const projects = document.getElementsByClassName("projectTracker");
for (let i = 0; i < projects.length; i++) {
  const project = projects[i];
  const container = project.getElementsByClassName("collapsibleContainer")[0];
  project
    .getElementsByClassName("collapsibleToggle")[0]
    .addEventListener("click", (e) => {
      container.style.gridTemplateRows = container.style.gridTemplateRows
        ? ""
        : "1fr";
      e.target.classList.toggle("clicked");
    });
}
