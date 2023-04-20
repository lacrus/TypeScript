"use strict";
var validations;
(function (validations) {
    validations.validateText = (text) => {
        return text.length > 3 ? true : false;
    };
    validations.validateDate = (myDate) => {
        return isNaN(myDate.valueOf()) ? true : false;
    };
})(validations || (validations = {}));
console.log(validations.validateDate(new Date("1988-09-18")));
//# sourceMappingURL=main.js.map