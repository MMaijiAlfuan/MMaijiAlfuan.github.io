// Mobile nav toggle
const menuBtn = document.querySelector('[data-menu-toggle]');
const mobileNav = document.querySelector('[data-mobile-nav]');
if (menuBtn && mobileNav) {
  menuBtn.addEventListener('click', () => mobileNav.classList.toggle('open'));
}

// Active link highlight
const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
document.querySelectorAll('[data-nav] a').forEach(a => {
  const href = (a.getAttribute('href') || '').toLowerCase();
  if (href === here || (here === '' && href === 'index.html')) a.classList.add('active');
});

// Year
const yr = document.querySelector('[data-year]');
if (yr) yr.textContent = new Date().getFullYear();

// Contact form
const form = document.querySelector('[data-contact-form]');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.querySelector('[data-form-msg]').classList.add('show');
    form.reset();
  });
}
