const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateMessageInput(data){
    let errors = {};

    data.body = validText(data.body)? data.body : "";

    if(Validator.isEmpty(data.body)){
        errors.body = "create a body for your message"
    };
 
    return { 
        errors, 
        isValid: Object.keys(errors).length === 0
    };
}