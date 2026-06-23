const clock = document.getElementById("clock");

if (clock) {
  const updateClock = () => {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
  };

  updateClock();
  setInterval(updateClock, 1000);
}
