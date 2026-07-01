document.querySelectorAll(".tabs button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tabs button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
  });
});

document.querySelectorAll(".primary, .secondary").forEach((button) => {
  button.addEventListener("click", () => {
    button.animate([{ transform: "scale(1)" }, { transform: "scale(.98)" }, { transform: "scale(1)" }], {
      duration: 160,
      easing: "ease-out",
    });
  });
});
