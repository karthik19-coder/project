const buttons = document.querySelectorAll(".sound");
const volumeSlider = document.getElementById("volume");
const darkBtn = document.getElementById("dark-mode");

let currentAudio = null;

// play sound on click
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const soundFile = btn.dataset.sound; // "gtone.mp3" etc.

    // stop old sound
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // IMPORTANT: no leading slash
    currentAudio = new Audio("./" + soundFile);
    currentAudio.volume = volumeSlider.value;
    currentAudio.play();

    // small animation
    btn.classList.add("playing");
    setTimeout(() => btn.classList.remove("playing"), 200);
  });
});

// volume control
volumeSlider.addEventListener("input", () => {
  if (currentAudio) {
    currentAudio.volume = volumeSlider.value;
  }
});

// dark mode toggle
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  darkBtn.textContent = document.body.classList.contains("dark")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});
