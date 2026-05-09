const toggleButton = document.getElementById('theme-toggle');
const html = document.documentElement;

// Initialisation thème
const savedTheme = localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
html.setAttribute('data-theme', savedTheme);

// Bascule au clic
toggleButton.addEventListener('click', () => {
  toggleButton.classList.add('pulse');

  setTimeout(() => {
    toggleButton.classList.remove('pulse');

    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }, 300);
});

