/* Mobile navigation */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function () {
navbar.classList.toggle("active");

if (navbar.classList.contains("active")) {
    menuToggle.textContent = "✕";
} else {
    menuToggle.textContent = "☰";
}


});

/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {
link.addEventListener("click", function () {
navbar.classList.remove("active");
menuToggle.textContent = "☰";
});
});

/* Automatically update copyright year */

document.getElementById("year").textContent = new Date().getFullYear();

/* Contact form */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

event.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const subject = document.getElementById("subject").value.trim();
const message = document.getElementById("message").value.trim();

if (!name || !email || !subject || !message) {
    formMessage.textContent = "Please complete all fields.";
    formMessage.style.color = "#d93025";
    return;
}

/*
   GitHub Pages cannot process emails by itself.

   For now, this opens the visitor's email application.
   Replace your@email.com with the real business email.
*/

const businessEmail = "your@email.com";

const mailSubject =
    encodeURIComponent(subject + " - Website Inquiry");

const mailBody =
    encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

window.location.href =
    "mailto:" + businessEmail +
    "?subject=" + mailSubject +
    "&body=" + mailBody;

formMessage.textContent =
    "Opening your email application...";

formMessage.style.color = "#20b996";


});
