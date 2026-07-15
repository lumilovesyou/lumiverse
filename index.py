from flask import Flask, render_template
from scripts.random_quote import getRandomQuote
app = Flask(
    __name__,
    template_folder="pages",
    static_folder="assets",
    static_url_path="/assets"
)

@app.route("/")
def index():
    return render_template(
        "index.html",
        quote=getRandomQuote()
    )

if __name__ == "__main__":
    app.run(debug=True)