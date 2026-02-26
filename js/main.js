// Howie G's Website - Main JS

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const homeNavLinks = document.querySelectorAll('.nav-link:not(.nav-logo)');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const spans = navToggle.querySelectorAll('span');

    if (navLinks) {
      // Inner pages: toggle the ul.nav-links
      navLinks.classList.toggle('open');
    } else if (homeNavLinks.length > 0) {
      // Homepage: toggle individual .nav-link elements
      homeNavLinks.forEach(link => link.classList.toggle('mobile-open'));
    }

    const isOpen = (navLinks && navLinks.classList.contains('open')) ||
                   (homeNavLinks.length > 0 && homeNavLinks[0].classList.contains('mobile-open'));

    if (isOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });
}

// Close mobile nav when clicking a link
const allNavItems = document.querySelectorAll('.nav-links a, .nav-link:not(.nav-logo)');
allNavItems.forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks) navLinks.classList.remove('open');
    homeNavLinks.forEach(l => l.classList.remove('mobile-open'));
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  });
});

// Contact form
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button');
    btn.textContent = 'Thank you!';
    btn.style.background = '#2A9D8F';
    contactForm.reset();
    setTimeout(() => {
      btn.textContent = 'Send';
      btn.style.background = '';
    }, 3000);
  });
}
