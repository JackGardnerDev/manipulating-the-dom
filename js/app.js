const sections = document.querySelectorAll('section');
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Build the navigation menu
function buildNav() {
    const navList = document.getElementById('navbar-list');
    sections.forEach(section => {
        const listItem = document.createElement('li');
        const anchorLink = document.createElement('a');
        anchorLink.textContent = section.getAttribute('data-nav');
        anchorLink.classList.add('menu-link');
        listItem.appendChild(anchorLink);
        navList.appendChild(listItem);
    });
}

// Add class 'your-active-class' to section when near top of viewport
function setActiveSection() {
    let maxVisibleSection = sections[0];
    let maxVisibleSectionOffset = -Infinity;

    sections.forEach(section => {
        const box = section.getBoundingClientRect();
        if (box.top <= 200 && box.bottom > 0 && box.bottom > maxVisibleSectionOffset) {
            maxVisibleSection = section;
            maxVisibleSectionOffset = box.bottom;
        }
    });

    sections.forEach(section => {
        if (section === maxVisibleSection) {
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
    });
}

// Scroll to a section when link clicked
function scrollToSection() {
    const navLinks = document.querySelectorAll('.menu-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const sectionId = this.textContent.replace(/\s+/g, '').toLowerCase();
            const targetSection = document.getElementById(sectionId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Show/hide scroll-to-top button based on the screens scroll position
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function toggleScrollToTopButton() {
    if (window.scrollY > window.innerHeight / 2) {
        scrollToTopBtn.style.opacity = '1';
    } else {
        scrollToTopBtn.style.opacity = '0';
    }
}

// Attach the toggleScrollToTopButton function to the scroll event
window.addEventListener('scroll', toggleScrollToTopButton);

// Scroll to top of page function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Toggle section visibility on click
function toggleSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection.style.display === 'none' || targetSection.style.display === '') {
        targetSection.style.display = 'block';
    } else {
        targetSection.style.display = 'none';
    }
}

// Add class 'active' to navigation link when section is active
function setActiveNavLink() {
    const navLinks = document.querySelectorAll('.menu-link');
    sections.forEach((section, index) => {
        const box = section.getBoundingClientRect();
        const navLink = navLinks[index];

        if (box.top <= 200 && box.bottom > 0) {
            navLink.classList.add('active');
        } else {
            navLink.classList.remove('active');
        }
    });
}

// Attach the setActiveNavLink function to the scroll event
window.addEventListener('scroll', setActiveNavLink);

// Scroll to a section when a link is clicked and update if state is active
function scrollToSection() {
    const navLinks = document.querySelectorAll('.menu-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const sectionId = this.textContent.replace(/\s+/g, '').toLowerCase();
            const targetSection = document.getElementById(sectionId);
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Remove 'active' class from all links
            navLinks.forEach(navLink => navLink.classList.remove('active'));

            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });
}

// Set sections as active when seen and update if state is active
document.addEventListener('scroll', () => {
    setActiveSection();
    setActiveNavLink();
});

// Build the navigation menu
document.addEventListener('DOMContentLoaded', buildNav);

// Scroll to a section when clicking link
document.addEventListener('DOMContentLoaded', scrollToSection);

// Set sections as active when seen
document.addEventListener('scroll', setActiveSection);