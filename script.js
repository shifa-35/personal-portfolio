// ================================
// EMAILJS INITIALIZE
// ================================

emailjs.init({
    publicKey: "HUUWf0r2cVafGDDhV",
});

// ================================
// CONTACT FORM
// ================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill all the fields.");
            return;
        }

        emailjs.send(
            "service_g6xuy5s",
            "template_58qnh9u",
            {
                name: name,
                email: email,
                message: message,
            }
        )
        .then(function () {
            alert("✅ Message sent successfully!");
            contactForm.reset();
        })
        .catch(function (error) {
            console.error(error);
            alert("❌ Failed to send message.");
        });

    });
}

// ================================
// FADE-IN ON SCROLL
// ================================

const sections = document.querySelectorAll(".section");

function revealSections() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
}

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealSections);
revealSections();

// ================================
// NAVBAR ACTIVE LINK
// ================================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});

// ================================
// BUTTON HOVER EFFECT
// ================================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
    });
});

// ================================
// CARD ANIMATION
// ================================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", function () {
        this.style.transition = "0.3s";
        this.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)";
    });
});

// ================================
// PAGE LOADED
// ================================

window.addEventListener("load", function () {
    console.log("Portfolio Loaded Successfully");
});