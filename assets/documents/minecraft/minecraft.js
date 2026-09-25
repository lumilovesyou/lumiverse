document.addEventListener("DOMContentLoaded", () => {
  const modsBox = document.getElementById("modBoxes");
  const noneFoundText = document.getElementById("noModsText");

  function showModsByName(search) {
    const mods = modsBox.children;
    let countHidden = 0;
    for (let i = 0; i < mods.length; i++) {
      let name = mods[i]
        .getElementsByClassName("modName")[0]
        .innerText.toLowerCase();
      if (search && !name.includes(search)) {
        mods[i].classList.add("hidden");
        countHidden++;
      } else {
        mods[i].classList.remove("hidden");
      }
    }
    if (countHidden == mods.length) {
      noneFoundText.classList.remove("hidden");
    } else {
      noneFoundText.classList.add("hidden");
    }
  }

  document.getElementById("searchBox").addEventListener("input", (e) => {
    let search = e.target.value;
    if (search) {
      showModsByName(search.toLowerCase());
    } else {
      showModsByName("");
    }
  });
});
