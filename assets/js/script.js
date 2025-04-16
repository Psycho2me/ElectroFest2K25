document.addEventListener('DOMContentLoaded', function () {

  // =========================
  // Theme Toggle Logic
  // =========================
  const themeToggleBtn = document.querySelector('.theme-toggle-btn');

  // Apply saved theme on load
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
  }

  // Toggle and save theme
  themeToggleBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });

  // =========================
  // Countdown Timer Logic
  // =========================
  const targetDate = new Date("2025-05-01T09:00:00").getTime();  // <-- set your event start date/time here!
  const timerElement = document.getElementById('timer');

  if (timerElement) {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        timerElement.innerHTML = "🎉 The Event Has Started!";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const sec = Math.floor((distance % (1000 * 60)) / 1000);

      timerElement.innerHTML = `
        <span>${days}</span> d
        <span>${hrs}</span> h
        <span>${mins}</span> m 
        <span>${sec}</span> s
      S;
    }, 1000);
  }

  // =========================
  // Event Category Filter Logic
  // =========================
  const tabs = document.querySelectorAll('.event-tab');
  const cards = document.querySelectorAll('.event-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      const category = this.getAttribute('data-category');

      cards.forEach(card => {
        if (category === 'all') {
          card.style.display = 'block';
        } else {
          card.style.display = card.classList.contains(category) ? 'block' : 'none';
        }
      });
    });
  });
});
