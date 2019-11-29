const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateChatInput(data){
    let errors = {};

    data.chat = validText(data.chat)? data.chat : "";
 
    return { 
        errors, 
        isValid: Object.keys(errors).length === 0
    };
}