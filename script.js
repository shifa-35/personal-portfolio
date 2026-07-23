// ========================================
// DAY 7 - JAVASCRIPT
// Shifa Siddiqui Portfolio
// ========================================


// ========================================
// 1. BUTTON EVENT
// Email Me Button
// ========================================

const emailBtn = document.getElementById("emailBtn");

emailBtn.addEventListener("click", function () {

    alert("Thank you for contacting me! I will get back to you soon.");

});


// ========================================
// 2. DOM MANIPULATION
// Show More About Me
// ========================================

const showMoreBtn = document.getElementById("showMoreBtn");

const aboutText = document.getElementById("aboutText");


showMoreBtn.addEventListener("click", function () {

    aboutText.textContent =
        "Hello! I am Shifa Siddiqui, a B.Sc. IT student and aspiring Front-End Developer. I am passionate about creating clean, responsive and user-friendly websites. I am currently improving my skills in HTML, CSS, JavaScript and GitHub while working on different web development projects.";

    showMoreBtn.textContent = "Information Updated";

});


// ========================================
// 3. SCROLL TO TOP
// ========================================

const scrollTopBtn = document.getElementById("scrollTopBtn");


// Show button when user scrolls down

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        scrollTopBtn.style.display = "block";

    } else {

        scrollTopBtn.style.display = "none";

    }

});


// Scroll to top when button is clicked

scrollTopBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});