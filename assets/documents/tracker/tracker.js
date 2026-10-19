document.querySelectorAll(".projectTracker").forEach((project) => {
  const container = project.querySelector(".collapsibleContainer");
  const toggle = project.querySelector(".collapsibleToggle");

  toggle.addEventListener("click", () => {
    const isOpen = container.classList.toggle("isOpen");
    toggle.classList.toggle("clicked", isOpen);
  });
});
