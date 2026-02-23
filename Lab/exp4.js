function SubmitButton(){
    //get value using DOM
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    document.getElementById('nameError').innerHTML = "";
    document.getElementById('emailError').innerHTML = "";
    document.getElementById('passwordError').innerHTML = "";

    let isValid = true;
    if(name === ""){
        document.getElementById('nameError').innerHTML = "Name field is required.";
        isValid = false;
    }

    if(email === ""){
        document.getElementById('emailError').innerHTML = "Email field is required.";
        isValid = false;
    }
    else if(!email.includes("@") || !email.includes(".")){
        document.getElementById('emailError').innerHTML = "Enter valid email";
        isValid = false;
    }

    if(password === ""){
        document.getElementById('passwordError').innerHTML = "Password field is required.";
        isValid = false;
    }
    else if(password.lenght < 6 ){
        document.getElementById('passwordError').innerHTML = "Password must be at least 6 characters";
        isValid = false;
    }
    
    return isValid;
}