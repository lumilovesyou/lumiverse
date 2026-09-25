document.addEventListener("DOMContentLoaded", () => {
  /* Consts */
  const searchBox = document.getElementById("searchBox");
  const modsList = document.getElementById("modBoxes");
  const noModsMessage = document.getElementById("noModsText");

  /* Assemble mods into a list */
  const mods = [...modsList.getElementsByClassName("modBox")].map((e) => ({
    element: e,
    name: e.querySelector(".modName").textContent.trim().toLowerCase(),
  }));

  /* Loop through mods and hide/show as needed */
  const filterMods = (query) => {
    const normalisedQuery = query.trim().toLowerCase();
    let visibleCount = 0;

    for (const mod of mods) {
      const isVisible = mod.name.includes(normalisedQuery);
      mod.element.classList.toggle("hidden", !isVisible);
      visibleCount += Number(isVisible);
    }

    noModsMessage.classList.toggle("hidden", visibleCount > 0);
  };

  /* Run search function when textbox input changes */
  searchBox.addEventListener("input", (e) => {
    filterMods(e.currentTarget.value);
  });
});
