

// Select the elements
const mobileMenu = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar__menu');

// Toggle the active class on click
mobileMenu.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    mobileMenu.classList.toggle('is-active');
});