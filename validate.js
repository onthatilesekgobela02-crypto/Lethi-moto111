function validateForm(){
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage').value.trim();

    //verify input fields
    if(name === '' || email === '' || password === ''){
        //errorMessage.textContent = 'All input fields are recquired!!!';
        alert("All input fields are recquired!!!");
        return false;
    }

    //validate email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]=\.[a-zA-Z]{2,}$/
    if(!email.match(emailPattern)){
        //errorMessage.textContent = 'Incorrect email format!!!';
        alert("Incorrect email format!!!");
        return false;
    }

    //validate password (6 characters or more)
    if(password.length < 6){
        //errorMessage.textContent = 'The password must be a minimum of 6 characters!!!';
        alert("The password must be a minimum of 6 characters!!!");
    }

    alert("Your form was submitted successfully!!!");
    return true;
}

/* =======================
   form-validation.js
   ======================= */

document.addEventListener("DOMContentLoaded", () => {

  const validateEmail = (email) => /^[^ ]+@[^ ]+\.[a-z]{2,4}$/i.test(email);
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  document.querySelectorAll(".validateForm").forEach(form => {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      let valid = true;

      form.querySelectorAll("input, textarea, select").forEach(input => {
        const errorEl = input.nextElementSibling;
        if(input.required && input.value.trim() === "") {
          if(errorEl) { errorEl.textContent = "This field is required"; errorEl.style.display = "block"; }
          valid = false;
        } else if(input.type === "email" && !validateEmail(input.value)) {
          if(errorEl) { errorEl.textContent = "Enter a valid email"; errorEl.style.display = "block"; }
          valid = false;
        } else if(input.type === "tel" && !validatePhone(input.value)) {
          if(errorEl) { errorEl.textContent = "Enter a valid 10-digit phone number"; errorEl.style.display = "block"; }
          valid = false;
        } else {
          if(errorEl) errorEl.style.display = "none";
        }
      });

      const feedback = form.querySelector(".formFeedback");
      if(valid && feedback) {
        feedback.style.display = "block";
        form.reset();
        setTimeout(() => { feedback.style.display = "none"; }, 5000);
      }
    });
  });

});
