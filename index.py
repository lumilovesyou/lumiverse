from flask import Flask, render_template

import scripts.information as info
from scripts.random_quote import get_random_quote

app = Flask(
    __name__, template_folder="pages", static_folder="assets", static_url_path="/assets"
)


@app.route("/")
def index():
    print("sections")
    print(info.read("sections"))
    return render_template(
        "index.html",
        quote=get_random_quote(),
        urls=info.read("urls"),
    )


@app.route("/test")
def test():
    return render_template("test.html")


if __name__ == "__main__":
    app.run(debug=True)
