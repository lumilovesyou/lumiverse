import { setup, makeImagesPopupByClass } from "./assets/modules/image-popup/image-popup.js";

document.addEventListener("DOMContentLoaded", () => {
    setup();
    makeImagesPopupByClass("popupImage");

    const my88x31Building = document.createElement("span");
    const my88x31 = document.getElementById("myEightyEight");
    my88x31.parentNode.replaceWith(my88x31);
    my88x31.addEventListener("click", () => {
        navigator.clipboard.writeText("<a href=\"http://lumiverse.dev/\" target=\"_blank\"><img src=\"https://lumiverse.dev/assets/88x31/mine/lumi-88x31.gif\"></a>");
        alert("Copied embed to clipboard!");
    });
});