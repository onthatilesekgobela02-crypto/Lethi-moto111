// Get form elements
const form = document.getElementById("enquiryForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const messageError = document.getElementById("messageError");
const feedback = document.getElementById("formFeedback");



// HELPER FUNCTION TO CREATE ERROR ELEMENTS
  function createErrorElement(input) {
    const error = document.createElement("small");
    error.style.color = "red";
    error.style.display = "block";
    error.style.marginTop = "5px";
    input.parentNode.insertBefore(error, input.nextSibling);
    return error;
  }

// Validation functions
function validateName() {
  const value = nameInput.value.trim();
  if (value === "" || !value.includes(" ")) {
    nameError.textContent = "Please enter your full name";
    nameError.style.display = "block";
    return false;
  } else {
    nameError.style.display = "none";
    return true;
  }
}

function validateEmail() {
  const value = emailInput.value.trim();
  const emailPattern = /\S+@\S+\.\S+/;
  if (value === "" || !emailPattern.test(value)) {
    emailError.textContent = "Email is required";
    emailError.style.display = "block";
    return false;
  } else {
    emailError.style.display = "none";
    return true;
  }
}

function validatePhone() {
  const value = phoneInput.value.trim();
  const phonePattern = /^[0-9]{10}$/;
  if (value === "" || !phonePattern.test(value)) {
    phoneError.textContent = "Enter a valid 10-digit phone number";
    phoneError.style.display = "block";
    return false;
  } else {
    phoneError.style.display = "none";
    return true;
  }
}

function validateMessage() {
  const value = messageInput.value.trim();
  if (value.length < 10) {
    messageError.textContent = "Message must be at least 10 characters long";
    messageError.style.display = "block";
    return false;
  } else {
    messageError.style.display = "none";
    return true;
  }
}

// Live validation
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
phoneInput.addEventListener("input", validatePhone);
messageInput.addEventListener("input", validateMessage);

// Form submit
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isMessageValid = validateMessage();

  if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
    feedback.style.display = "block";
    form.reset();

    // Hide feedback after 5 seconds
    setTimeout(() => {
      feedback.style.display = "none";
    }, 5000);
  }

  // Back to Top
    const backBtn = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
      backBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });
    backBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
});
