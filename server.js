const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const root = __dirname;
const uploadDir = path.join(root, "uploads");
const port = Number(process.env.PORT || 4173);
const maxUploadBytes = 12 * 1024 * 1024;

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml"
};

fs.mkdirSync(uploadDir, { recursive: true });

const server = http.createServer(async (request, response) => {
  try {
    if (request.method === "POST" && request.url === "/api/uploads") {
      await handleUpload(request, response);
      return;
    }

    if (request.method !== "GET" && request.method !== "HEAD") {
      sendJson(response, 405, { error: "Method not allowed" });
      return;
    }

    serveStatic(request, response);
  } catch (error) {
    console.error(error);
    sendJson(response, 500, { error: "Internal server error" });
  }
});

server.listen(port, () => {
  console.log(`Gray Ravens Database running at http://localhost:${port}`);
});

function serveStatic(request, response) {
  const url = new URL(request.url, `http://${request.headers.host || "localhost"}`);
  const cleanPath = decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname);
  const filePath = path.normalize(path.join(root, cleanPath));

  if (!filePath.startsWith(root)) {
    sendJson(response, 403, { error: "Forbidden" });
    return;
  }

  fs.stat(filePath, (statError, stats) => {
    if (statError || !stats.isFile()) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }

    const contentType = mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream";
    response.writeHead(200, {
      "Content-Type": contentType,
      "Cache-Control": cleanPath.startsWith("/uploads/") ? "public, max-age=31536000, immutable" : "no-cache"
    });

    if (request.method === "HEAD") {
      response.end();
      return;
    }

    fs.createReadStream(filePath).pipe(response);
  });
}

async function handleUpload(request, response) {
  const body = await readRequestBody(request, maxUploadBytes);
  let payload;

  try {
    payload = JSON.parse(body);
  } catch {
    sendJson(response, 400, { error: "Invalid JSON upload payload" });
    return;
  }

  const dataUrl = String(payload.dataUrl || "");
  const match = dataUrl.match(/^data:(image\/[a-zA-Z0-9.+-]+);base64,(.+)$/);
  if (!match) {
    sendJson(response, 400, { error: "Expected an image data URL" });
    return;
  }

  const mimeType = match[1].toLowerCase();
  const extension = extensionFromMime(mimeType);
  if (!extension) {
    sendJson(response, 415, { error: "Unsupported image type" });
    return;
  }

  const buffer = Buffer.from(match[2], "base64");
  if (!buffer.length || buffer.length > maxUploadBytes) {
    sendJson(response, 413, { error: "Image is empty or too large" });
    return;
  }

  const originalName = path.parse(String(payload.name || "image")).name;
  const safeName = slugify(originalName) || "image";
  const hash = crypto.createHash("sha256").update(buffer).digest("hex").slice(0, 12);
  const fileName = `${safeName}-${Date.now()}-${hash}${extension}`;
  const filePath = path.join(uploadDir, fileName);

  await fs.promises.writeFile(filePath, buffer);
  sendJson(response, 201, {
    url: `/uploads/${fileName}`,
    fileName,
    size: buffer.length,
    mimeType
  });
}

function readRequestBody(request, limit) {
  return new Promise((resolve, reject) => {
    let total = 0;
    const chunks = [];

    request.on("data", (chunk) => {
      total += chunk.length;
      if (total > limit) {
        request.destroy();
        reject(new Error("Upload too large"));
        return;
      }
      chunks.push(chunk);
    });

    request.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    request.on("error", reject);
  });
}

function sendJson(response, status, payload) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload));
}

function extensionFromMime(mimeType) {
  return {
    "image/png": ".png",
    "image/jpeg": ".jpg",
    "image/webp": ".webp",
    "image/gif": ".gif",
    "image/svg+xml": ".svg"
  }[mimeType] || "";
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
