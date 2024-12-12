let firstNameError = document.getElementById("first-name-error");
let surNameError = document.getElementById("sur-name-error");
let dobError = document.getElementById("dob-error");
let genderError = document.getElementById("gender-error");
let contactError = document.getElementById("contact-error");
let passwordError = document.getElementById("password-error");
let submitError = document.getElementById("submit-error");
let submitBtn = document.getElementById("btn");

function validateFirstName() {
    let name = document.getElementById("first-name").value;

    if (name.length == 0) {
        firstNameError.innerHTML = "First name is required";
        firstNameError.style.left = "18%";  
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        firstNameError.innerHTML = "Write full first name";
        firstNameError.style.left = "18%";
        return false;
    }

    firstNameError.innerHTML = "";
    firstNameError.style.display = "none"; 
    return true;
}


function validateSurName(){
    let surName = document.getElementById("sur-name").value;

    if(surName.length == 0){
        surNameError.innerHTML = "Surname is required";
        surNameError.style.right = "3%";
        return false;
    }
    if(!surName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        surNameError.innerHTML = "Write full Surname";
        surNameError.style.right = "4%";
        return false;
    }
    surNameError.innerHTML = "";
    surNameError.style.display = "none"; 
    return true;
}

function validateDateOfBirth() {
    let dateOfBirth = document.getElementById("date-of-birth").value;

    if (!dateOfBirth) {
        dobError.innerHTML = "Please select your date of birth";
        dobError.style.right = "7%";
        return false;
    }

    let birthDate = new Date(dateOfBirth);
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age < 15) {
        dobError.innerHTML = "Must be 15+";
        dobError.style.right = "12%";
        return false; 
    } 
    else {
        dobError.innerHTML = ""; 
    }
    return true;
}

function validateContactError() {
    let contactInput = document.getElementById("contact").value; // Assuming the input field has the ID "email"

    // Check if the input is empty
    if (contactInput.length === 0) {
        contactError.innerHTML = "Email/Phone is required";
        contactError.style.right = "5%";
        return false;
    }

    // Regular expression for email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Regular expression for phone number (11 digits only)
    const phoneRegex = /^[0-9]{11}$/;

    // Validate as email or phone number
    if (!contactInput.match(emailRegex) && !contactInput.match(phoneRegex)) {
        contactError.innerHTML = "Enter a valid email address or phone number";
        contactError.style.right = "5%";
        return false;
    }

    // If input passes validation
    contactError.innerHTML = "";
    return true;
}

function validatePassword() {
    let password = document.getElementById("password").value;

    if(password == ""){
        passwordError.innerHTML = "Enter password"
        passwordError.style.right = "4%";
        return false;
    }
    if(!password.match(/^.{8,}$/)){
        passwordError.innerHTML = "Enter a valid password";
        passwordError.style.right = "11%";
        return false
    }
    passwordError.innerHTML = "";
    return true;
}

function validateForm() {
    firstNameError.innerHTML = '';
    surNameError.innerHTML = '';
    dobError.innerHTML = '';
    contactError.innerHTML = '';
    passwordError.innerHTML = '';

    if(!validateFirstName() || !validateSurName() || !validateDateOfBirth() || !validateContactError() || !validatePassword()){
        submitError.style.display = "block";
        submitError.innerHTML = "Please fill the information correctly to Sign Up";
        submitError.style.top = "90%";
        setTimeout(function(){submitError.style.display = "none";}, 3000);
        return false;
    }

    document.getElementById("first-name").value = '';
    document.getElementById("sur-name").value = '';
    document.getElementById("date-of-birth").value = '';
    document.getElementById("contact").value = '';
    document.getElementById("password").value = '';

    submitError.style.display = "none"; 

    alert("Welcome to Facebook Community!");
    return true; 
}

submitBtn.addEventListener("click", (event) =>{
    event.preventDefault(); 

    validateForm();
})