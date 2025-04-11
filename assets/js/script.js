// ==========================
// Theme Toggle Functionality
// ==========================
const themeToggleButton = document.getElementById('themeToggle');
const body = document.body;
const availableThemes = ['light', 'dark', 'blue', 'green', 'purple'];  // Available theme options

// Check if there's a saved theme in localStorage and apply it
const savedTheme = localStorage.getItem('theme');
if (savedTheme && availableThemes.includes(savedTheme)) {
  body.classList.add(savedTheme + '-theme');
  themeToggleButton.textContent = savedTheme === 'dark' ? '🌕' : '🌙'; // Dark mode toggle icon
} else {
  body.classList.add('light-theme');
}

// Toggle theme on button click
themeToggleButton.addEventListener('click', () => {
  let currentTheme = 'light'; // default theme

  // Find the current active theme
  for (let theme of availableThemes) {
    if (body.classList.contains(theme + '-theme')) {
      currentTheme = theme;
      break;
    }
  }

  // Change to next theme in the list
  let nextThemeIndex = (availableThemes.indexOf(currentTheme) + 1) % availableThemes.length;
  let nextTheme = availableThemes[nextThemeIndex];

  // Apply new theme
  body.classList.remove(currentTheme + '-theme');
  body.classList.add(nextTheme + '-theme');

  // Save to localStorage
  localStorage.setItem('theme', nextTheme);

  // Update button icon based on theme
  themeToggleButton.textContent = nextTheme === 'dark' ? '🌕' : '🌙';
});

// ==========================
// Back to Top Button
// ==========================
const backToTopBtn = document.getElementById('backToTopBtn');

// Show the button when scrolled 200px down
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// Scroll to the top of the page when the button is clicked
backToTopBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ==========================
// Music Toggle (Autoplay, Mute on load)
// ==========================
const musicPlayer = new Audio('assets/music/DigitalVoyage.mp3');
musicPlayer.loop = true; // Keep the music playing in loop

// Set music to autoplay muted on page load
musicPlayer.volume = 0.1; // Set initial low volume (you can adjust)
musicPlayer.autoplay = true;
musicPlayer.muted = true;

// Music toggle button functionality
const musicToggleButton = document.getElementById('musicToggle');

// Set the initial state of the music toggle
musicToggleButton.textContent = "🔊"; // Mute state

// Handle music toggle button click
musicToggleButton.addEventListener('click', () => {
  if (musicPlayer.muted) {
    musicPlayer.muted = false;
    musicToggleButton.textContent = "🔉"; // Sound on
  } else {
    musicPlayer.muted = true;
    musicToggleButton.textContent = "🔊"; // Sound off
  }
});
