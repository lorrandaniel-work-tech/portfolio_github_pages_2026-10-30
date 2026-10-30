"""Serve only the public portfolio assets on the local computer."""

import argparse
import mimetypes
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parent
PUBLIC_PAGES = {
    "index.html",
    "portfolio_visual_cyber_cloud_lorran.html",
    "portfolio_en.html",
    "certificado.html",
    "curriculo.html",
}
PUBLIC_FOLDERS = {
    "css", "js", "img", "certificados", "certificate_previews", "curriculos", "projetos",
}
PUBLIC_EXTENSIONS = {".html", ".css", ".js", ".jpg", ".jpeg", ".png", ".pdf", ".svg", ".webp", ".ico"}


def public_file(request_path):
    path = unquote(urlsplit(request_path).path).replace("\\", "/").lstrip("/")
    if not path:
        path = "index.html"
    parts = path.split("/")
    if any(part in {"", ".", ".."} or ":" in part for part in parts):
        return None
    if path not in PUBLIC_PAGES and not (len(parts) > 1 and parts[0] in PUBLIC_FOLDERS):
        return None
    target = (ROOT / path).resolve()
    if not target.is_relative_to(ROOT) or target.suffix.lower() not in PUBLIC_EXTENSIONS:
        return None
    return target if target.is_file() else None


class PortfolioPreview(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_file(include_body=True)

    def do_HEAD(self):
        self.send_file(include_body=False)

    def send_file(self, include_body):
        try:
            target = public_file(self.path)
            if target is None:
                self.send_error(404)
                return
            with target.open("rb") as source:
                self.send_response(200)
                self.send_header("Content-Type", mimetypes.guess_type(target.name)[0] or "application/octet-stream")
                self.send_header("Content-Length", str(target.stat().st_size))
                self.send_header("Cache-Control", "no-store")
                self.send_header("X-Content-Type-Options", "nosniff")
                self.end_headers()
                if include_body:
                    while chunk := source.read(64 * 1024):
                        self.wfile.write(chunk)
        except (ValueError, OSError):
            self.send_error(404)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Prévia local dos arquivos públicos do portfólio.")
    parser.add_argument("--port", type=int, default=8021)
    args = parser.parse_args()
    with ThreadingHTTPServer(("127.0.0.1", args.port), PortfolioPreview) as server:
        print(f"Portfolio: http://127.0.0.1:{args.port}/index.html?lang=pt", flush=True)
        print(f"Curriculo: http://127.0.0.1:{args.port}/curriculo.html?lang=pt", flush=True)
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            pass
