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