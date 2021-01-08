const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {

    let errors = {}; 
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : ""; 

    if (Validator.isEmpty(data.email)) {
        errors.email = "Un email est requis.";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "L'email est invalide.";
    } // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Veuillez insérer un mot de passe.";
    }
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "La confirmation du mot de passe est requise";
    }
    if (!Validator.isLength(data.password, {
            min: 6,
            max: 30
        })) {
        errors.password = "Le mot de passe doit contenir au moins 6 caractères.";
    }
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Les mots de passe ne sont pas similaires.";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};