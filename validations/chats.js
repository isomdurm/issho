const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateMessageInput(data){
    let errors = {};

    data.name = validText(data.name)? data.name : "";

    if(Validator.isEmpty(data.name)){
        errors.body = "create a name for your message"
    };
 
    return { 
        errors, 
        isValid: Object.keys(errors).length === 0
    };
}