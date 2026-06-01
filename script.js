// 1. Scroll Animations using Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Triggers when 10% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Stop observing once it has animated in
        }
    });
}, observerOptions);

// Grab all elements with the 'hidden' class and observe them
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));


// 2. Contact Form Handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the page from reloading
    
    // In a real scenario, you would send this data to a server here.
    // For now, we will simulate a successful send.
    alert('Thank you for reaching out! I will get back to you soon.');
    contactForm.reset();
});

// Typewriter Effect
const textToType = "Gabriel";
const typewriterElement = document.getElementById('typewriter');
let typeIndex = 0;

function typeWriter() {
    if (typeIndex < textToType.length) {
        typewriterElement.innerHTML += textToType.charAt(typeIndex);
        typeIndex++;
        setTimeout(typeWriter, 150); // Adjust this number (150) to change the typing speed
    }
}

// Start the animation when the page loads
window.addEventListener('load', typeWriter);
