document.addEventListener("DOMContentLoaded", () => {
    const overlayBuilding = document.createElement("div");
    overlayBuilding.innerHTML = '<img id="overlayImage">';
    overlayBuilding.id = "imageOverlay";
    overlayBuilding.classList.add("hidden");
    document.body.appendChild(overlayBuilding);
    const overlay = document.getElementById("imageOverlay");
    overlay.addEventListener("click", () => {
        overlay.classList.add("hidden");
    });
    
    /*
    const images = document.querySelectorAll("img");
    for (let i = 0; i < images.length; i++) {
        images[i].src = images[i].src.replace("jpeg", "webp");
    }
    */

    const imagesTable = document.getElementById("imagesTable").children[0].children;
    for (let i = 0; i < imagesTable.length; i++) {
        const tableRow = imagesTable[i].children;
        for (let j = 0; j < tableRow.length; j++) {
            let childImage = tableRow[j].children[0].children[0];
            childImage.src = childImage.src.replace("jpeg", "webp");
            childImage.addEventListener("click", (e) => {
                overlay.children[0].src = childImage.src;
                overlay.classList.remove("hidden");
            });
        }
    }

    const my88x31Building = document.createElement("span");

    const my88x31 = document.getElementById("myEightyEight");
    my88x31.parentNode.replaceWith(my88x31);
    my88x31.addEventListener("click", () => {
        navigator.clipboard.writeText("<a href=\"http://lumiverse.dev/\" target=\"_blank\"><img src=\"https://lumiverse.dev/assets/images/88x31/mine/lumi-88x31.png\"></a>");
        alert("Copied embed to clipboard!");
    });
});