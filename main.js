let highestZ = 1;

addEventListener("DOMContentLoaded", () => {
    let windowPieces = [
        ["https://linktree.lumiverse.dev/assets/images/ico-res.png", "Linktree", '<iframe src="https://linktree.lumiverse.dev/"></iframe>', "https://linktree.lumiverse.dev/", 50, 45],
        ["./assets/images/gifypet/gifypet.png", "Gifypet", '<iframe scale="0.5" width="314" height="321" scrolling="no" src="https://gifypet.neocities.org/pet/pet.html?name=Mildew&dob=1758063721&gender=undefined&element=Water&pet=https%3A%2F%2Flumilovesyou.github.io%2Flumiverse%2Fassets%2Fimages%2Fgifypet%2Fmildew.gif&map=https%3A%2F%2Flumilovesyou.github.io%2Flumiverse%2Fassets%2Fimages%2Fgifypet%2Fbackground.webp&background=&tablecolor=%23f8fdff&textcolor=%23f8fdff" frameborder="0"></iframe>', "https://gifypet.neocities.org/pet/pet.html?name=Mildew&dob=1758063721&gender=undefined&element=Water&pet=https%3A%2F%2Flumilovesyou.github.io%2Flumiverse%2Fassets%2Fimages%2Fgifypet%2Fmildew.gif&map=https%3A%2F%2Flumilovesyou.github.io%2Flumiverse%2Fassets%2Fimages%2Fgifypet%2Fbackground.webp&background=&tablecolor=%23f8fdff&textcolor=%23f8fdff", 20, 20]
    ]
    for (let i = 0; i < windowPieces.length; i++) {
        piece = windowPieces[i]
        createWindow(piece[0], piece[1], piece[2], piece[3], (window.innerWidth / 100) * piece[4], (window.innerHeight / 100) * piece[5]);
    }

    const windows = document.getElementsByClassName("window");
    for (let i = 0; i < windows.length; i++) {
        makeMouseWindow(windows[i]);
    }


    const apps = document.getElementsByClassName("app");
    for (let i = 0; i < windows.length; i++) {
        apps[i].addEventListener("click", () => {
            apps[i].classList.toggle("closed");
            document.getElementsByClassName(apps[i].classList[1])[1].classList.toggle("hide");
            document.getElementsByClassName(apps[i].classList[1])[1].classList.toggle("show");
        });
    }
});

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function clamp(value, min, max) {
    if (value < min) {
        return min;
    } else if (value > max) {
        return max;
    } else {
        return value;
    }
}

function createWindow(image, title, contents, source, startX, startY) {
    // Creates the window
    const contentBox = document.getElementById("content");
    let createdWindow = document.createElement("div");
    createdWindow.classList = `window ${title.toLowerCase()} show`;
    let header = document.createElement("div");
    header.classList = "header";
    let icon = document.createElement("img");
    icon.src = image;
    icon.draggable = "false";
    header.appendChild(icon);
    header.innerHTML = `${header.innerHTML} ${title}`;
    createdWindow.appendChild(header);
    let open = document.createElement("a");
    open.href = source;
    open.target = "_blank";
    open.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width=24 height=24 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"/><path d="M11 13l9 -9"/><path d="M15 4h5v5"/></svg>';
    createdWindow.appendChild(open);
    createdWindow.innerHTML = `${createdWindow.innerHTML}${contents}`;
    createdWindow.style.left = `${startX}px`;
    createdWindow.style.top = `${startY}px`;
    contentBox.appendChild(createdWindow);

    //Creates the app
    const appBar = document.getElementById("appBar");
    let app = document.createElement("img");
    app.src = image;
    app.draggable = "false";
    app.classList = `app ${title.toLowerCase()}`;
    appBar.appendChild(app);
}

function makeMouseWindow(draggableWindow) {
    const overlay = document.getElementById("overlay");
    let mouseX, mouseY, windowX, windowY = 0

    draggableWindow.children[0].onmousedown = startDragWindow;

    function startDragWindow(event) {
        overlay.classList.toggle("hidden");
        event.preventDefault();
        mouseX = event.clientX; 
        mouseY = event.clientY;
        if (draggableWindow.style.zIndex != highestZ) {
            highestZ++;
            draggableWindow.style.zIndex = highestZ;
        }
        document.onmousemove = moveWindow;
        document.onmouseup = stopDraggingWindow;
        document.onmouseup = stopDraggingWindow;
    }

    function moveWindow(event) {
        event.preventDefault();
        windowX = mouseX - event.clientX;
        windowY = mouseY - event.clientY;
        mouseX = event.clientX;
        mouseY = event.clientY;

        windowPosition(draggableWindow.offsetLeft - windowX, draggableWindow.offsetTop - windowY);
    }

    function stopDraggingWindow() {
        overlay.classList.toggle("hidden");

        document.onmouseup = null;
        document.onmousemove = null;
    }

    function windowPosition(x, y) {
        draggableWindow.style.top = clamp(y, window.innerHeight * 0.055, window.innerHeight * 0.8) + "px";
        draggableWindow.style.left = clamp(x, window.innerWidth * -0.1, window.innerWidth * 0.9) + "px";
    }
}