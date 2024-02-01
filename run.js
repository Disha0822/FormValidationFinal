function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailValidText = document.getElementById("emailValidText");
    const email = emailInput.value.trim();
    // Regular expression for email validation

    const emailRegex = /^(?!(.*\.com){3}|(.*\.in){3}|(.*\.){3})[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.(com|in)$/;


    if (!/[A-Z]/.test(email) && emailRegex.test(email)) {
        if ( email.length <= 30) {
            emailValidText.innerText = "Email is valid";
            emailValidText.style.color = "green";
            return true;
        } else {
            emailValidText.innerText = "Email length exceeds 30 characters";
            emailValidText.style.color = "red";
            return false;
        }
    } else {
        emailValidText.innerText = "Email is not valid";
        emailValidText.style.color = "red";
        return false;
    }
}

// Example of calling the function on keyup event
const emailInput = document.getElementById("email");
emailInput.addEventListener("keyup", validateEmail);



function validateUrl() {
    const urlInput = document.getElementById("url");
    const urlValidText = document.getElementById("urlValidText");
    const url = urlInput.value.trim();
    // Regular expression for URL validation
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+(\.com|\.in)$/;
    if (urlRegex.test(url)) {
        // URL is valid
        urlValidText.innerText = "URL is valid";
        urlValidText.style.color = "green";
        return true;
    } else {
        // URL is invalid
        urlValidText.innerText = "URL is not valid";
        urlValidText.style.color = "red";
        return false;
    }
}
// Example of calling the function on keyup event
const urlInput = document.getElementById("url");
urlInput.addEventListener("keyup", validateUrl);



function validateGender() {
    const maleRadio = document.getElementById("male");
    const femaleRadio = document.getElementById("female");
    const genderValidText = document.getElementById("genderValidText");

    if (maleRadio.checked || femaleRadio.checked) {
        genderValidText.innerText = "Gender is selected";
        genderValidText.style.color = "green";
        return true;
    } else {
        genderValidText.innerText = "Please select a gender";
        genderValidText.style.color = "red";
        return false;
    }
}

// Example of calling the function when a radio button is clicked
const genderRadios = document.querySelectorAll('.gender');
genderRadios.forEach(radio => radio.addEventListener('click', validateGender));





function validateAlpha() {
    const alphaInput = document.getElementById("alpha");
    const alphaValidText = document.getElementById("alphaValidText");
    const alpha = alphaInput.value.trim();

    // Regular expression for alpha validation (start with capital letter, minimum 3 characters)
    const alphaRegex = /^[A-Z][a-z]{2,}$/;
    
    if (alphaRegex.test(alpha)) {
        alphaValidText.innerText = "Alpha text is valid";
        alphaValidText.style.color = "green";
        return true;
    } else {
        // Alpha text is invalid
        alphaValidText.innerText = "Alpha text is not valid";
        alphaValidText.style.color = "red";
        return false;
    }
}

// Example of calling the function on keyup event
const alphaInput = document.getElementById("alpha");
alphaInput.addEventListener("keyup", validateAlpha);




function validateTextarea() {
    const textareaInput = document.getElementById("textarea");
    const textareaValidText = document.getElementById("textareaValidText");
    const textarea = textareaInput.value.trim();
    if (textarea.length > 0) {
        // Textarea is not empty
        textareaValidText.innerText = "Textarea is valid";
        textareaValidText.style.color = "green";
        return true;
    } else {
        // Textarea is empty
        textareaValidText.innerText = "Textarea is required";
        textareaValidText.style.color = "red";
        return false;
    }
}
// Example of calling the function on keyup event
const textareaInput = document.getElementById("textarea");
textareaInput.addEventListener("keyup", validateTextarea);


function validateImage() {
    const imageInput = document.getElementById("image");
    const imageValidText = document.getElementById("imageValidText");
    const allowedFormats = ["image/jpeg", "image/png"];
    const maxSizeInBytes = 1048576; // 1MB
    
    if (imageInput.files.length > 0) {
        const imageFile = imageInput.files[0];
        const imageSize = imageFile.size;
        const imageFormat = imageFile.type;
        
        if (imageSize <= maxSizeInBytes && allowedFormats.includes(imageFormat)) {
            imageValidText.innerText = "Image is valid";
            imageValidText.style.color = "green";
            return true;
        } else {
            imageValidText.innerText = "Please select a valid image (JPEG or PNG format, maximum size 1MB)";
            imageValidText.style.color = "red";
            return false;
        }
    } else {
        imageValidText.innerText = "Image is required";
        imageValidText.style.color = "red";
        return false;
    }
}

const imageInput = document.getElementById("image");
imageInput.addEventListener("change", validateImage);

function validateColor() {
    const colorInput = document.getElementById("color");
    const colorValidText = document.getElementById("colorValidText");
    
    if (colorInput.value) {
        colorValidText.innerText = ""; 
        colorInput.style.backgroundColor = colorInput.value;
        return true;
    } else {
        colorValidText.innerText = "Color is required";
        // colorInput.style.backgroundColor = "white"; 
        return false;
    }
}

// Example of calling the function on input event (when the color is selected)
const colorInput = document.getElementById("color");
colorInput.addEventListener("input", validateColor);


function validatePassword() {
    const passwordInput = document.getElementById("password");
    const passwordValidText = document.getElementById("passwordValidText");
    const password = passwordInput.value.trim();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[^\s]{8,16}$/;

    if (passwordRegex.test(password)) {
        // Password meets all requirements
        passwordValidText.innerText = "Password is valid";
        passwordValidText.style.color = "green";
        return true;
    } else {
        // Password does not meet all requirements
        passwordValidText.innerText = "Password should contain at least one uppercase letter, one lowercase letter, one special character, one numeric character, and be 8-16 characters long without whitespace";
        passwordValidText.style.color = "red";
        return false;
    }
}

// Example of calling the function on keyup event
const passwordInput = document.getElementById("password");
passwordInput.addEventListener("keyup", validatePassword);



function validatePhoneNumber() {
    const phoneNumberInput = document.getElementById("phoneNumber");
    const phoneNumberValidText = document.getElementById("phoneNumberValidText");
    let phoneNumber = phoneNumberInput.value.trim();
    phoneNumber = phoneNumber.replace(/\D/g, '');
    const phoneRegex = /^[7-9]\d{9}$/;
    if (phoneNumber.length === 10)
     {
        phoneNumberInput.disabled = true;
    }
    if (phoneRegex.test(phoneNumber)) {
        phoneNumberValidText.innerText = "Phone number is valid";
        phoneNumberValidText.style.color = "green";
        return true;
    } else {
        phoneNumberValidText.innerText = "Please enter a valid 10-digit";
        phoneNumberValidText.style.color = "red";
        return false;
    }
}

// Example of calling the function on input event
const phoneNumberInput = document.getElementById("phoneNumber");
phoneNumberInput.addEventListener("input", validatePhoneNumber);

function validateBirthdate() {
    const birthdateInput = document.getElementById("birthdate");
    const birthdateValidText = document.getElementById("birthdateValidText");
    const birthdate = new Date(birthdateInput.value); // Convert input value to a Date object

    // Get the current date
    const currentDate = new Date();

    // Calculate the cutoff date (December 31, 2025)
    const cutoffDate = new Date(2025, 11, 31);

    // Check if the birthdate is a valid date, is in the past, and is not after December 31, 2025
    if (!isNaN(birthdate.getTime()) && birthdate < currentDate && birthdate <= cutoffDate) {
        // Birthdate is valid and in the past, and not after December 31, 2025
        birthdateValidText.innerText = "Birthdate is valid";
        birthdateValidText.style.color = "green";
        return true;
    } else {
        // Birthdate is invalid, in the future, or after December 31, 2025
        birthdateValidText.innerText = "Please enter a valid birthdate up to 2025";
        birthdateValidText.style.color = "red";
        return false;
    }
}




function validateCheckbox() {
    const checkboxes = document.querySelectorAll('.checkbox:checked');
    const checkboxValidText = document.getElementById("checkboxValidText");

    if (checkboxes.length > 0) {
        // At least one checkbox is checked
        checkboxValidText.innerText = "";
        return true;
    } else {
        // No checkbox is checked
        checkboxValidText.innerText = "Please check at least one checkbox";
        checkboxValidText.style.color = "red";
        return false;
    }
}

// Example of calling the function when checkboxes change state
const checkboxInputs = document.querySelectorAll('input[type="checkbox"]');
checkboxInputs.forEach(input => {
    input.addEventListener("change", validateCheckbox);
});

function validateCurrency() {
    const currencyInput = document.getElementById("currency");
    const currencyValidText = document.getElementById("currencyValidText");
    const currency = currencyInput.value.trim();

    // Regular expression for currency validation (positive decimal number)
    const currencyRegex = /^\d+(\.\d{1,2})?$/;

    if (currency.length === 0) {
        // Currency is required
        currencyValidText.innerText = "Currency is required";
        currencyValidText.style.color = "red";
        return false;
    } else if (!currencyRegex.test(currency)) {
        // Currency format is invalid
        currencyValidText.innerText = "Please enter a valid currency amount";
        currencyValidText.style.color = "red";
        return false;
    } else {
        // Convert currency to number
        const currencyAmount = parseFloat(currency);

        // Check if currency exceeds 1 trillion
        if (currencyAmount > 1000000000000) {
            currencyValidText.innerText = "Currency should not exceed 1 trillion";
            currencyValidText.style.color = "red";
            return false;
        } else {
            // Currency format is valid and within the limit
            currencyValidText.innerText = "Currency format is valid";
            currencyValidText.style.color = "green";
            return true;
        }
    }
}

function validateForm() {

    // Reset previous validation messages
    // resetValidationMessages();

    // Perform individual field validations
    // const isValid = validateEmail() || validateAlpha()||validateUrl()|| validateTextarea() ||validateImage()|| validatePassword()|| validatePhoneNumber()|| validateBirthdate()||validateCurrency()|| validateCheckbox()|| validateGender() || validateColor();

    const emailValid = validateEmail();
    const alphaValid = validateAlpha();
    const urlValid = validateUrl();
    const textareaValid = validateTextarea();
    const imageValid = validateImage();
    const passwordValid = validatePassword();
    const phoneNumberValid = validatePhoneNumber();
    const birthdateValid = validateBirthdate();
    const currencyValid = validateCurrency();
    const checkboxValid = validateCheckbox();
    const genderValid = validateGender();
    const colorValid = validateColor();

    // Display messages for each field
    if (emailValid && alphaValid && urlValid && textareaValid && imageValid &&
        passwordValid && phoneNumberValid && birthdateValid && currencyValid &&
        checkboxValid && genderValid && colorValid) {
        window.alert("Form submitted successfully!");
    } else {
        window.alert("Please fill in all required fields correctly.");
    }
    

    
}

// function resetValidationMessages() {
//     // Reset previous validation messages
//     const validationMessages = document.querySelectorAll('.validation-message');
//     validationMessages.forEach(message => message.innerText = '');
// }

function displayValidationMessage(field) {
    // Display validation message for the given field
    const messageElement = document.getElementById(`${field}ValidText`);
    messageElement.innerText = `Please provide a valid ${field}.`;
    messageElement.style.color = "red";
}



// Add validation functions for other fields as needed



// const submit = () => {
//     let isValid = true;

//     // // Reset previous validation messages
//     // resetValidationMessages();

//     // Perform individual field validations
//     isValid = isValid && validateEmail();
//     isValid = isValid && validateAlpha();
//     isValid = isValid && validateUrl();
//     isValid = isValid && validateTextarea();
//     isValid = isValid && validateImage();
//     isValid = isValid && validatePassword();
//     isValid = isValid && validatePhoneNumber();
//     isValid = isValid && validateBirthdate();
//     isValid = isValid && validateCurrency();
//     isValid = isValid && validateCheckbox();
//     isValid = isValid && validateGender();
//     isValid = isValid && validateColor();

//     return isValid;
// }

