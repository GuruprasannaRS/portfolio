// Mobile menu toggle
const burger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.navlinks');

burger?.addEventListener('click', () => {
  if (navlinks.style.display === 'flex') {
    navlinks.style.display = '';
    navlinks.style.position = '';
    navlinks.style.right = '';
    navlinks.style.top = '';
    navlinks.style.background = '';
    navlinks.style.padding = '';
    navlinks.style.borderRadius = '';
  } else {
    navlinks.style.display = 'flex';
    navlinks.style.flexDirection = 'column';
    navlinks.style.position = 'absolute';
    navlinks.style.right = '18px';
    navlinks.style.top = '70px';
    navlinks.style.background = 'var(--card)';
    navlinks.style.padding = '12px';
    navlinks.style.borderRadius = '10px';
  }
});

// IntersectionObserver - active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('nav.navlinks a');

const obs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.id;
    const anchor = document.querySelector('nav.navlinks a[href="#' + id + '"]');
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      if (anchor) anchor.classList.add('active');
    }
  });
}, {root: null, threshold: 0.45});

sections.forEach(s => obs.observe(s));

// reveal on initial view
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');
    const rObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.18 });
    reveals.forEach(r => rObs.observe(r));
  });
  

// Close mobile nav on link click
navAnchors.forEach(a => a.addEventListener('click', () => {
  if (window.innerWidth <= 880) navlinks.style.display = '';
}));
