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


// Professional Contact Form Handling (Formspree AJAX)
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevents the default page redirect
    
    const data = new FormData(contactForm);
    
    try {
        const response = await fetch(contactForm.action, {
            method: contactForm.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            alert('Thank you for reaching out! I will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Oops! There was a problem submitting your form. Please check your details and try again.');
        }
    } catch (error) {
        alert('Oops! There was a network error. Please try again later.');
    }
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
