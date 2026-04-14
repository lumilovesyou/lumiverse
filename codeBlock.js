document.addEventListener("DOMContentLoaded", () => {
    const codeBlocks = Array.from(document.querySelectorAll("code"));
    for (let i = 0; i < codeBlocks.length; i++) {
        codeBlocks[i].addEventListener("click", () => {
            let text = codeBlocks[i].innerText;
            navigator.clipboard.writeText(text);
            alert(`Copied "${text}" to clipboard!`)
        })
    }
});