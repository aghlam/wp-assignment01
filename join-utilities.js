import { checkForCapital, checkEmpty, checkEmail, checkPhoneNumber, checkPassword } from "./utilities.js";

const joinForm = document.getElementById('join-form');

const handleSubmit = e => {

    let valid = true;

    const formData = new FormData(e.target);
    
    const data = Object.fromEntries(formData);
    
    if (!validateFirstName(data.firstName)) {
        valid = false;
    }

    if (!validateLastName(data.lastName)) {
        valid = false;
    }

    if (!validateEmail(data.email)) {
        valid = false;
    }

    if (!confirmEmail(data.email, data.emailConfirm)) {
        valid = false;
    }

    if (!validatePhone(data.phone)) {
        valid = false;
    }

    if (!validateAge(data.birthday)) {
        valid = false;
    }

    if (!validatePassword(data.password)) {
        valid = false;
    }

    if (!valid) {
        e.preventDefault();

    } else {
        
        return true;
    }

}

// First Name validation function
const validateFirstName = firstName => {

    // Check if field is empty
    if (!checkEmpty(firstName)) {
        document.getElementById('firstName-error-capital').style.display = 'none';
        document.getElementById('firstName').style.borderColor = 'red';
        document.getElementById('firstName').style.color = 'red';
        document.getElementById('firstName-error-empty').style.display = 'block';

        return false;

    // Check if first letter is capital    
    } else if (!checkForCapital(firstName.charAt(0))) {
        document.getElementById('firstName-error-empty').style.display = 'none';
        document.getElementById('firstName').style.borderColor = 'red';
        document.getElementById('firstName').style.color = 'red';
        document.getElementById('firstName-error-capital').style.display = 'block';
        return false;
    
    // Resets fields
    }

    document.getElementById('firstName').style.borderColor = '#62466b';
    document.getElementById('firstName').style.color = 'inherit';
    document.getElementById('firstName-error-capital').style.display = 'none';
    document.getElementById('firstName-error-empty').style.display = 'none';

    return true;
}

// Last Name validation function
const validateLastName = lastName => {
    // Checks if field is empty
    if (!checkEmpty(lastName)) {
        document.getElementById('lastName').style.borderColor = 'red';
        document.getElementById('lastName').style.color = 'red';
        document.getElementById('lastName-error-empty').style.display = 'block';
        
        return false;
    }
    
    document.getElementById('lastName').style.borderColor = '#62466b';
    document.getElementById('lastName').style.color = 'inherit';
    document.getElementById('lastName-error-empty').style.display = 'none';

    return true;
}

// Email validation function
const validateEmail = email => {
    if (!checkEmail(email)) {
        document.getElementById('email').style.borderColor = 'red';
        document.getElementById('email').style.color = 'red';
        document.getElementById('email-error').style.display = 'block';
        
        return false;
    }
    
    document.getElementById('email').style.borderColor = '#62466b';
    document.getElementById('email').style.color = 'inherit';
    document.getElementById('email-error').style.display = 'none';
    
    return true;
    
}

// Email confirmation function 
const confirmEmail = (email, emailConfirm) => {
    // Check if input emails match    
    if (email != emailConfirm) {
        document.getElementById('email').style.borderColor = 'red';
        document.getElementById('email').style.color = 'red';
        document.getElementById('emailConfirm').style.borderColor = 'red';
        document.getElementById('emailConfirm').style.color = 'red';
        document.getElementById('email-confirm-error').style.display = 'block';
        
        return false;
    }
    
    document.getElementById('email').style.borderColor = '#62466b';
    document.getElementById('email').style.color = 'inherit';
    document.getElementById('emailConfirm').style.borderColor = '#62466b';
    document.getElementById('emailConfirm').style.color = 'inherit';
    document.getElementById('email-confirm-error').style.display = 'none';

    return true;

}

// Phone number validation function
const validatePhone = number => {
    // Check if valid Aus number
    if(!checkPhoneNumber(number)) {
        document.getElementById('phone').style.borderColor = 'red';
        document.getElementById('phone').style.color = 'red';
        document.getElementById('phone-error').style.display = 'block';
        
        return false;
    }
    
    document.getElementById('phone').style.borderColor = '#62466b';
    document.getElementById('phone').style.color = 'inherit';
    document.getElementById('phone-error').style.display = 'none';

    return true;

}

// Age validation function
const validateAge = year => {

    // Obtain current year
    let currentYear = new Date().getFullYear();
    
    // Check if age is 16 or over
    if (currentYear - year < 16) {
        document.getElementById('birthday').style.borderColor = 'red';
        document.getElementById('birthday-error').style.display = 'block';
        
        return false;
    }
    
    document.getElementById('birthday').style.borderColor = '#62466b';
    document.getElementById('birthday-error').style.display = 'none';
    
    return true;
}

// Password validation function
const validatePassword = password => {
    // Check valid password combination
    if (!checkPassword(password)) {
        document.getElementById('password').style.borderColor = 'red';
        document.getElementById('password').style.color = 'red';
        document.getElementById('password-error').style.display = 'block';
        
        return false;
    }
    
    document.getElementById('password').style.borderColor = '#62466b';
    document.getElementById('password').style.color = 'inherit';
    document.getElementById('password-error').style.display = 'none';
    
    return true;
}


joinForm.addEventListener('submit', handleSubmit);