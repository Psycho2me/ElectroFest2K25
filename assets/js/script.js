// Theme Toggle Button
const themeToggleBtn = document.querySelector('.theme-toggle-btn');
const body = document.body;

// Check local storage for the user's theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
}

// Toggle Theme
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    // Save the theme preference in localStorage
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark-theme');
    } else {
        localStorage.removeItem('theme');
    }
});

// Countdown Timer Functionality
const timerElement = document.getElementById('timer');
const eventDate = new Date('2025-05-01T09:00:00'); // Set your event date here

function updateCountdown() {
    const now = new Date();
    const timeDifference = eventDate - now;

    if (timeDifference <= 0) {
        timerElement.innerHTML = "Event has started!";
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
