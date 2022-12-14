// Validates an email string using regex
const emailValidation = (email) => {
    const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return regex.test(email);
}

module.exports = emailValidation;