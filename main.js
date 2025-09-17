let highestZ = 1;
let dragging = false;

addEventListener("DOMContentLoaded", () => {
    const windows = document.getElementsByClassName("window");
    for (let i = 0; i < windows.length; i++) {
        makeMouseWindow(windows[i]);
    }

    const apps = document.getElementsByClassName("app");
    for (let i = 0; i < windows.length; i++) {
        apps[i].addEventListener("click", () => {
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

function makeMouseWindow(draggableWindow) {
    const overlay = document.getElementById("overlay");
    let mouseX, mouseY, windowX, windowY = 0

    draggableWindow.children[0].onmousedown = startDragWindow;
    windowPosition(random(0, window.innerWidth - (window.innerWidth / 2)), random(0, window.innerHeight - (window.innerHeight / 2)));

    function startDragWindow(event) {
        if (dragging) {
            document.onmouseup = null;
            document.onmousemove = null;
        }
        dragging = true;
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
        console.log(overlay);
        windowX = mouseX - event.clientX;
        windowY = mouseY - event.clientY;
        mouseX = event.clientX;
        mouseY = event.clientY;

        windowPosition(draggableWindow.offsetLeft - windowX, draggableWindow.offsetTop - windowY);
    }

    function stopDraggingWindow() {
        overlay.classList.toggle("hidden");
        dragging = false;

        document.onmouseup = null;
        document.onmousemove = null;
    }

    function windowPosition(x, y) {
        draggableWindow.style.top = clamp(y, window.innerHeight * 0.055, window.innerHeight * 0.8) + "px";
        draggableWindow.style.left = clamp(x, window.innerWidth * -0.1, window.innerWidth * 0.9) + "px";
    }
}