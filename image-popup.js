const overlayBuilding = document.createElement("div");
overlayBuilding.innerHTML = '<img id="overlayImage">';
overlayBuilding.id = "imageOverlay";
overlayBuilding.classList.add("hidden");
document.body.appendChild(overlayBuilding);
const overlay = document.getElementById("imageOverlay");
overlay.addEventListener("click", () => {
    overlay.classList.add("hidden");
});

function makeImagePopup(id) {
    let images = [];

    if (Array.isArray(id)) {
        for (let i = 0; i < id.length; i++) {
            images.append(document.getElementById(id[i]))
        }
    } else {
        images.append(document.getElementById(id))
    }

    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener("click", (e) => {
            overlay.children[0].src = e.src;
            overlay.classList.remove("hidden");
        })
    }
}