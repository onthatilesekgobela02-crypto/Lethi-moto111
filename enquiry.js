/* =========================
   enquiry-validation.js
   ========================= */

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("enquiryForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const enquiryInput = document.getElementById("enquiry");

  // Create error messages dynamically
  const nameError = document.createElement("small");
  const emailError = document.createElement("small");
  const messageError = document.createElement("small");

  [nameError, emailError, messageError].forEach(el => {
    el.style.color = "red";
    el.style.display = "block";
    el.style.marginTop = "5px";
  });

  nameInput.parentNode.insertBefore(nameError, nameInput.nextSibling);
  emailInput.parentNode.insertBefore(emailError, emailInput.nextSibling);
  enquiryInput.parentNode.insertBefore(messageError, enquiryInput.nextSibling);

  const feedback = document.getElementById("formFeedback");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    let valid = true;

    // Validate Name
    if(nameInput.value.trim() === "" || !nameInput.value.includes(" ")){
      nameError.textContent = "Please enter your full name";
      valid = false;
    } else {
      nameError.textContent = "";
    }

    // Validate Email
    const emailPattern = /\S+@\S+\.\S+/;
    if(emailInput.value.trim() === "" || !emailPattern.test(emailInput.value)){
      emailError.textContent = "Email is required";
      valid = false;
    } else {
      emailError.textContent = "";
    }

    // Validate Message
    if(enquiryInput.value.trim().length < 10){
      messageError.textContent = "Message must be at least 10 characters long";
      valid = false;
    } else {
      messageError.textContent = "";
    }

    // If valid, show success feedback
    if(valid){
      feedback.style.display = "block";
      form.reset();
      setTimeout(() => { feedback.style.display = "none"; }, 5000);
    }
  });

  // Back to top button
  const backToTopBtn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
  backToTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

});
