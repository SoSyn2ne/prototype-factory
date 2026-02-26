const modeButtons = Array.from(document.querySelectorAll(".mode"));
const tagButtons = Array.from(document.querySelectorAll(".tag"));
const timelineItems = Array.from(document.querySelectorAll(".item"));

let activeMode = "quick";
let activeTag = "all";

function applyMode() {
  timelineItems.forEach((item) => {
    const quick = item.querySelector(".summary.quick");
    const deep = item.querySelector(".summary.deep");

    if (!quick || !deep) return;

    if (activeMode === "quick") {
      quick.classList.remove("hidden");
      deep.classList.add("hidden");
    } else {
      quick.classList.add("hidden");
      deep.classList.remove("hidden");
    }
  });
}

function applyTagFilter() {
  timelineItems.forEach((item) => {
    if (activeTag === "all") {
      item.classList.remove("hidden");
      return;
    }

    const tags = item.dataset.tags || "";
    const shouldShow = tags.includes(activeTag);
    item.classList.toggle("hidden", !shouldShow);
  });
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeMode = button.dataset.mode;
    modeButtons.forEach((target) => target.classList.toggle("active", target === button));
    applyMode();
  });
});

tagButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeTag = button.dataset.tag;
    tagButtons.forEach((target) => target.classList.toggle("active", target === button));
    applyTagFilter();
  });
});

applyMode();
applyTagFilter();
