 // form-validation.js

document.addEventListener("DOMContentLoaded", () => {
  // BACK TO TOP BUTTON
  const backToTopBtn = document.getElementById("backToTop");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });
    backToTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  // HELPER FUNCTION TO CREATE ERROR ELEMENTS
  function createErrorElement(input) {
    const error = document.createElement("small");
    error.style.color = "red";
    error.style.display = "block";
    error.style.marginTop = "5px";
    input.parentNode.insertBefore(error, input.nextSibling);
    return error;
  }

  // CONTACT PAGE FORM
  const contactForm = document.getElementById("contactUsForm");
  if (contactForm) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const feedback = document.getElementById("formFeedback");

    const nameError = createErrorElement(nameInput);
    const emailError = createErrorElement(emailInput);
    const messageError = createErrorElement(messageInput);

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let valid = true;

      // Name Validation
      if (nameInput.value.trim() === "" || !nameInput.value.includes(" ")) {
        nameError.textContent = "Please enter your full name";
        valid = false;
      } else nameError.textContent = "";

      // Email Validation
      const emailPattern = /\S+@\S+\.\S+/;
      if (emailInput.value.trim() === "" || !emailPattern.test(emailInput.value)) {
        emailError.textContent = "Email is required";
        valid = false;
      } else emailError.textContent = "";

      // Message Validation
      if (messageInput.value.trim().length < 10) {
        messageError.textContent = "Message must be at least 10 characters long";
        valid = false;
      } else messageError.textContent = "";

      if (valid) {
        feedback.style.display = "block";
        contactForm.reset();
        setTimeout(() => { feedback.style.display = "none"; }, 5000);
      }
    });
  }

  // ENQUIRY PAGE FORM
  const enquiryForm = document.getElementById("enquiryForm");
  if (enquiryForm) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const enquiryInput = document.getElementById("enquiry");
    const feedback = document.getElementById("formFeedback");

    const nameError = createErrorElement(nameInput);
    const emailError = createErrorElement(emailInput);
    const messageError = createErrorElement(enquiryInput);

    enquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let valid = true;

      // Name Validation
      if (nameInput.value.trim() === "" || !nameInput.value.includes(" ")) {
        nameError.textContent = "Please enter your full name";
        valid = false;
      } else nameError.textContent = "";

      // Email Validation
      const emailPattern = /\S+@\S+\.\S+/;
      if (emailInput.value.trim() === "" || !emailPattern.test(emailInput.value)) {
        emailError.textContent = "Email is required";
        valid = false;
      } else emailError.textContent = "";

      // Message Validation
      if (enquiryInput.value.trim().length < 10) {
        messageError.textContent = "Message must be at least 10 characters long";
        valid = false;
      } else messageError.textContent = "";

      if (valid) {
        feedback.style.display = "block";
        enquiryForm.reset();
        setTimeout(() => { feedback.style.display = "none"; }, 5000);
      }
    });
  }
});
