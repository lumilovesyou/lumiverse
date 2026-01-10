const params = new URLSearchParams(document.location.search); if (params.get("unfancy")) {

    for (let i = 0; i < document.styleSheets.length; i++) {
        void(document.styleSheets.item(i).disabled=true)
    }

} else {

const embedLink = '<a href="https://lumiverse.dev/" target="_blank"><img src="./assets/images/88x31/lumi-88x31.png">';

document.addEventListener("DOMContentLoaded", () => {
    //Lumiverse embed 88x31
    let lumi = document.getElementById("lumi-88x31");
    let lumiChild = lumi.lastChild.innerHTML;
    lumi.innerHTML = lumiChild;
    lumi.addEventListener("click", () => {
        navigator.clipboard.writeText(embedLink);
        alert("Copied embed HTML!")
    });
});

}