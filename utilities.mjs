
// export const checkEmail = email => console.log(email)
const checkEmail = email => email.match(/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+$/)

const checkPhoneNumber = number => number.match(/^((\+61|0)?\s?[2|3|4|7|8])?\d{2}\s?\d{2}\s?\d\s?\d{3}$/)

const checkEmpty = input => input.match(/^[a-zA-Z0-9\-]+$/);

const checkForCapital = char => char.match(/^[A-Z]$/);

const checkPassword = password => password.match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,})$/);


export {
    checkEmail,
    checkPhoneNumber,
    checkForCapital,
    checkEmpty,
    checkPassword,
}