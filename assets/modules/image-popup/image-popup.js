let overlay;

export function setup() {
    const overlayBuilding = document.createElement("div");
    overlayBuilding.innerHTML = '<img id="overlayImage">';
    overlayBuilding.id = "imageOverlay";
    overlayBuilding.classList.add("hidden");
    document.body.appendChild(overlayBuilding);
    overlay = document.getElementById("imageOverlay");
    overlay.addEventListener("click", () => {
        overlay.classList.add("hidden");
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            overlay.classList.add("hidden");
        }
    })
}

export function makeImagePopupById(id) {
    let images = [];
    if (Array.isArray(id)) {
        for (let i = 0; i < id.length; i++) {
            images.push(document.getElementById(id[i]));
        }
    } else {
        images.push(document.getElementById(id));
    }
    makeImagesPopup(images);
}

export function makeImagesPopupByClass(id) {
    let images = [];
    if (Array.isArray(id)) {
        for (let i = 0; i < id.length; i++) {
            Array.from(document.getElementsByClassName(id[i])).forEach(element => {
                images.push(element);
            });
        }
    } else {
        Array.from(document.getElementsByClassName(id)).forEach(element => {
            images.push(element);
        });
    }
    makeImagesPopup(images);
}

export function makeAllImagesPopup() {
    let images = [];
    Array.from(document.getElementsByTagName("img")).forEach(element => {
        if (element.id != "overlayImage") {
            images.push(element);
        }
    });
    makeImagesPopup(images)
}

function makeImagesPopup(images) {
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener("click", (element) => {
            overlay.children[0].src = element.target.src;
            overlay.classList.remove("hidden");
        })
    }
}