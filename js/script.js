// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Navigation toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Scroll handling for navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Fade-in animations
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => observer.observe(element));

    // Contact form validation and handling
    const contactForm = document.getElementById('contactForm');
    const formMsg = document.getElementById('formMsg');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (!name || !email || !message) {
                showFormMessage('Please fill in all fields', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showFormMessage('Please enter a valid email address', 'error');
                return;
            }

            // Here you would typically send the form data to a server
            // For demo purposes, we'll just show a success message
            showFormMessage('Thank you for your message. We will get back to you soon!', 'success');
            contactForm.reset();
        });
    }

    function showFormMessage(message, type) {
        if (formMsg) {
            formMsg.textContent = message;
            formMsg.className = `form-msg ${type}`;
            setTimeout(() => {
                formMsg.style.display = 'none';
            }, 5000);
        }
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
