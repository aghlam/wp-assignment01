
// export const checkEmail = email => console.log(email)
export const checkEmail = email => email.match(/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+$/)

export const checkPhoneNumber = number => number.match(/^((\+61|0)?\s?[2|3|4|7|8])?\d{2}\s?\d{2}\s?\d\s?\d{3}$/)

export const checkEmpty = input => {
    if (input === "" || input === undefined || input === null ) {
        return false;
    }

    return true;
}