import os

from flask import Flask, redirect, render_template
from flask.helpers import url_for

import scripts.information as info
from scripts.random_quote import get_random_quote

app = Flask(
    __name__, template_folder="pages", static_folder="assets", static_url_path="/assets"
)


@app.route("/")
def index():
    return render_template(
        "index.html",
        quote=get_random_quote(),
        urls=info.read("urls"),
    )


@app.route("/minecraft")
def minecraft():
    return render_template("minecraft.html", mods=info.read("mods"))


@app.route("/<string:page>")
def route(page: str):
    if os.path.exists(f"./pages/{page}.html"):
        return render_template(f"{page}.html")
    else:
        return redirect(url_for("index"), 301)


if __name__ == "__main__":
    app.run(debug=True)
