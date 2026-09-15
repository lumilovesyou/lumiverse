document.addEventListener("DOMContentLoaded", () => {
  console.log("Lumi says hello!");
});

////Marquee Content
function updateMarquee(contentCount, content) {
  if (content) {
    marqueeContent.innerHTML = content;
    marqueeContent.style.animation = "none";
  } else {
    marqueeContent.innerHTML = marqueeContent.innerHTML.repeat(contentCount);
  }
  marquee.style.setProperty("--marquee-loop-count", contentCount * -1);
}

const pageWidth = window.innerWidth;
const marquee = document.getElementById("marquee");
const marqueeContent = marquee.children[0];

updateMarquee(
  Math.max(Math.ceil(pageWidth / (0.6 * marqueeContent.offsetWidth)), 2),
);
////

window.addEventListener("resize", () => {
  if (window.innerWidth != pageWidth) {
    updateMarquee(0, "<a href='./i-hate-page-resizing'>wow... okay</a>");
  }
});
