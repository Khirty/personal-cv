// Progressive enhancement: navigation, scroll reveals, filters, and email copy.
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
function closeMenu() { navLinks.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Open navigation'); document.body.classList.remove('menu-open'); }
menuButton.addEventListener('click', () => { const isOpen = menuButton.getAttribute('aria-expanded') === 'true'; if (isOpen) { closeMenu(); } else { navLinks.classList.add('open'); menuButton.setAttribute('aria-expanded', 'true'); menuButton.setAttribute('aria-label', 'Close navigation'); document.body.classList.add('menu-open'); } });
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
window.addEventListener('resize', () => { if (window.innerWidth > 760) closeMenu(); });
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = document.querySelectorAll('.reveal');
if (reduceMotion || !('IntersectionObserver' in window)) { reveals.forEach(item => item.classList.add('visible')); }
else { const observer = new IntersectionObserver((entries, obs) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); obs.unobserve(entry.target); } }); }, { threshold: .09 }); reveals.forEach(item => observer.observe(item)); }
const filters = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.project-card');
filters.forEach(button => button.addEventListener('click', () => { const selected = button.dataset.filter; filters.forEach(filter => { const active = filter === button; filter.classList.toggle('active', active); filter.setAttribute('aria-pressed', String(active)); }); cards.forEach(card => { card.hidden = selected !== 'all' && card.dataset.category !== selected; }); }));
document.getElementById('year').textContent = new Date().getFullYear();
const copyButton = document.getElementById('copy-email');
const feedback = document.getElementById('copy-feedback');
copyButton.addEventListener('click', async () => { try { await navigator.clipboard.writeText('khirtabapo2008@gmail.com'); feedback.textContent = 'Email copied to clipboard!'; } catch { feedback.textContent = 'Copy manually: khirtabapo2008@gmail.com'; } });
const sectionLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
if ('IntersectionObserver' in window) { const sectionObserver = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) sectionLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id)); }); }, { rootMargin: '-35% 0px -55% 0px' }); document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section)); }
