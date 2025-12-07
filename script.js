const buttons = document.querySelectorAll(".sound");
const volumeSlider = document.getElementById("volume");
const darkBtn = document.getElementById("dark-mode");

let currentAudio = null;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const soundFile = btn.dataset.sound; // "gtone.mp3" etc.

    // stop old audio (if playing)
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // IMPORTANT: relative path, no leading "/"
    const audio = new Audio("./" + soundFile);
    audio.volume = volumeSlider.value;

    // if file can't be loaded, log reason
    audio.addEventListener("error", () => {
      console.error("Audio load error for:", soundFile, audio.error);
    });

    // play & CATCH promise errors so they are not "Uncaught"
    audio
      .play()
      .then(() => {
        // playing ok
      })
      .catch((err) => {
        console.error("Audio play error:", err);
      });

    currentAudio = audio;

    // small click animation
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
