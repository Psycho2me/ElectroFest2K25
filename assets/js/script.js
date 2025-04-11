// Theme Toggle Functionality
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  body.classList.add(currentTheme);
}

themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  const theme = body.classList.contains("dark-theme") ? "dark-theme" : "light-theme";
  localStorage.setItem("theme", theme); // Save theme in localStorage
});

// Event Filter (Tabs)
const eventTabs = document.querySelectorAll(".event-tab");
const eventCards = document.querySelectorAll(".event-card");

eventTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const category = tab.dataset.category;
    eventCards.forEach(card => {
      if (category === "all" || card.classList.contains(category)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
    eventTabs.forEach(tab => tab.classList.remove("active"));
    tab.classList.add("active");
  });
});

// Countdown Timer
const countdownDate = new Date("April 26, 2025 21:00:00").getTime();
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = countdownDate - now;

  if (timeLeft <= 0) {
    countdownElement.innerHTML = "Event has started!";
    clearInterval(countdownInterval);
  } else {
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    countdownElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Back to Top Button
const backToTopBtn = document.getElementById("back-to-top");

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Page Load Animation
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("loading-overlay").style.display = "none"; // Remove loading screen
  }, 1500); // Adjust this time as per the load time
});

// Adjust the visibility of event categories based on selection
const eventTabsElements = document.querySelectorAll('.event-tab');

eventTabsElements.forEach((tab) => {
  tab.addEventListener('click', function () {
    const category = tab.dataset.category;
    eventCards.forEach((card) => {
      if (category === 'all' || card.classList.contains(category)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Theme Switcher Button Event Listener
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const newTheme = document.body.classList.contains("dark-theme") ? "dark-theme" : "light-theme";
  localStorage.setItem("theme", newTheme);
});
