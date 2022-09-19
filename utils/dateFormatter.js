const moment = require('moment');

// Formats object in YYYY-MM-DD Format
const dateFormatter = (date) => moment(date).format('YYYY-MM-DD');

module.exports = dateFormatter;