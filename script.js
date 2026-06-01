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

// Upgraded Typewriter Effect (Cycling Words)
const words = [
    "Cybersecurity Analyst",
    "Web Developer",
    "Electronics Technician", 
    "Music Addicted",
    "Professional GOOGLE Searcher"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const typeElement = document.getElementById("typewriter");

function type() {
    currentWord = words[i];
    
    if (isDeleting) {
        // Delete a letter
        typeElement.textContent = currentWord.substring(0, j - 1);
        j--;
    } else {
        // Type a letter
        typeElement.textContent = currentWord.substring(0, j + 1);
        j++;
    }

    // Determine speed based on your previous React settings
    let typeSpeed = 70; // typingSpeed
    if (isDeleting) {
        typeSpeed = 40; // deletingSpeed
    }

    // Word is fully typed
    if (!isDeleting && j === currentWord.length) {
        typeSpeed = 900; // pauseTime
        isDeleting = true;
    } 
    // Word is fully deleted
    else if (isDeleting && j === 0) {
        isDeleting = false;
        i++;
        // Loop back to the start of the array
        if (i === words.length) {
            i = 0;
        }
    }

    setTimeout(type, typeSpeed);
}

// Start the animation when the page loads
window.addEventListener('load', type);
