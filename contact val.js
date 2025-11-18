/* =========================
   contact-validation.js
   ========================= */

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("contactUsForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const feedback = document.getElementById("formFeedback");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    let valid = true;

    // Validate Name
    if(nameInput.value.trim() === "" || !nameInput.value.includes(" ")) {
      nameError.textContent = "Please enter your full name";
      nameError.style.display = "block";
      valid = false;
    } else {
      nameError.style.display = "none";
    }

    // Validate Email
    const emailPattern = /\S+@\S+\.\S+/;
    if(emailInput.value.trim() === "" || !emailPattern.test(emailInput.value)) {
      emailError.textContent = "Email is required";
      emailError.style.display = "block";
      valid = false;
    } else {
      emailError.style.display = "none";
    }

    // Validate Message
    if(messageInput.value.trim().length < 10) {
      messageError.textContent = "Message must be at least 10 characters long";
      messageError.style.display = "block";
      valid = false;
    } else {
      messageError.style.display = "none";
    }

    if(valid) {
      feedback.style.display = "block";
      form.reset();
      setTimeout(() => { feedback.style.display = "none"; }, 5000);
    }
  });

  // Back to top logic
  const backToTopBtn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
  backToTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

});
