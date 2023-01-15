import { checkEmail, checkPhoneNumber } from "./utilities.js";

const contactForm = document.getElementById("contact-form");

const handleSubmit = e => {
    
    document.getElementById('contactDetails').style.borderColor = '#62466b';
    document.getElementById('contact-error-notification').style.display = 'none';
    document.getElementById('contactDetails').style.color = 'black';
    
    const formData = new FormData(e.target);
    
    const data = Object.fromEntries(formData);
    
    if(checkEmail(data.contactDetails) || checkPhoneNumber(data.contactDetails)) {
        return true;
        
    } else {
        document.getElementById('contact-error-notification').style.display = 'block';
        document.getElementById('contactDetails').style.borderColor = 'red';
        document.getElementById('contactDetails').style.color = 'red';
        e.preventDefault();
    }
}

contactForm.addEventListener('submit', handleSubmit);

