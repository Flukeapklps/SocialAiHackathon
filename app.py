from flask import Flask, send_from_directory, render_template
import os

app = Flask(__name__, static_folder="out", static_url_path="")

# Serve root index
@app.route("/")
def index():
    return send_from_directory("out", "index.html")

# Serve all _next files
@app.route("/_next/<path:path>")
def next_files(path):
    return send_from_directory("out/_next", path)

# Serve static assets (images, css, etc.)
@app.route("/<path:path>")
def static_files(path):
    full_path = os.path.join("out", path)
    if os.path.exists(full_path):
        return send_from_directory("out", path)
    return send_from_directory("out", "index.html")  # fallback for SPA

if __name__ == "__main__":
    app.run(debug=True)
