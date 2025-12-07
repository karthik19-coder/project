let currentVolume = 1;

// Preload audio files for faster playback
const audioFiles = {};
document.querySelectorAll(".sound").forEach(btn => {
  const file = btn.dataset.sound;
  audioFiles[file] = new Audio("sounds/" + file);
});

// Play sound + animation
document.querySelectorAll(".sound").forEach(btn => {
  btn.addEventListener("click", () => {
    const file = btn.dataset.sound;
    const audio = audioFiles[file];
    audio.volume = currentVolume;

    audio.currentTime = 0; 
    audio.play();

    // animation class
    btn.classList.add("playing");
    setTimeout(() => btn.classList.remove("playing"), 200);
  });
});

// Volume slider
document.getElementById("volume").addEventListener("input", (e) => {
  currentVolume = e.target.value;
});

// Dark mode toggle
document.getElementById("dark-mode").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
