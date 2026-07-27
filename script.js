// ================================
// DAY 11 PORTFOLIO JAVASCRIPT
// ================================


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

        alert("Thank you, " + name + "! Your message has been sent successfully.");

        contactForm.reset();

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

        navLinks.forEach(item => {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});


// ================================
// BUTTON HOVER EFFECT
// ================================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", function () {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", function () {

        button.style.transform = "scale(1)";

    });

});


// ================================
// CARD ANIMATION
// ================================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", function () {

        card.style.transition = "0.3s";

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", function () {

        card.style.transform = "translateY(0)";

    });

});


// ================================
// PAGE LOADED
// ================================

window.addEventListener("load", function () {

    console.log("Portfolio Loaded Successfully");

});
