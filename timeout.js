// timeout.js
var { setDefaultTimeout } = require("cucumber");

setDefaultTimeout(60 * 2000);
// this timeout value is global setting impact all step definition function,
// thus it doesn't means the value is more large more better.