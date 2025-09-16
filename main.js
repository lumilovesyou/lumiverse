let highestZ = 1;

addEventListener("DOMContentLoaded", () => {
    const windows = document.getElementsByClassName("window");
    for (let i = 0; i < windows.length; i++) {
        makeWindow(windows[i]);
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

function makeWindow(draggableWindow) {
    let mouseX, mouseY, windowX, windowY = 0

    draggableWindow.children[0].onmousedown = startDragWindow;
    draggableWindow.style.top = random(0, window.innerHeight - (window.innerHeight / 2)) + "px";
    draggableWindow.style.left = random(0, window.innerWidth - (window.innerWidth / 2)) + "px";

    function startDragWindow(event) {
        event.preventDefault();
        mouseX = event.clientX; 
        mouseY = event.clientY;
        if (draggableWindow.style.zIndex != highestZ) {
            highestZ++;
            draggableWindow.style.zIndex = highestZ;
        }
        document.onmousemove = moveWindow;
        document.onmouseup = stopDraggingWindow;
    }

    function moveWindow(event) {
        event.preventDefault();
        windowX = mouseX - event.clientX;
        windowY = mouseY - event.clientY;
        mouseX = event.clientX;
        mouseY = event.clientY;

        draggableWindow.style.top = draggableWindow.offsetTop - windowY + "px";
        draggableWindow.style.left = draggableWindow.offsetLeft - windowX + "px";
    }

    function stopDraggingWindow() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}