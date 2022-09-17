const moment = require('moment');

// Validates an email string using regex
const emailValidation = (email) => {
    const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return regex.test(email);
}

// Formats object in YYYY-MM-DD Format
const dateFormatter = (date) => moment(date).format('YYYY-MM-DD');

module.exports = {
    emailValidation,
    dateFormatter
};