const textarea = document.getElementById("constraints");
const counter = document.getElementById("counter");

if (textarea && counter) {
  const maxChars = 280;

  const updateCounter = () => {
    if (textarea.value.length > maxChars) {
      textarea.value = textarea.value.slice(0, maxChars);
    }
    counter.textContent = `${textarea.value.length} / ${maxChars}`;
  };

  textarea.addEventListener("input", updateCounter);
  updateCounter();
}
