
const Validation = {};

Validation.validationEmail = (el) => {
    return /^(?!\.)(""([^""\r\\]|\\[""\r\\])*""|([-a-z0-9!#$%&'*+/=?^_`{|}~]|(?<!\.)\.)*)(?<!\.)@[a-z0-9][\w\.-]*[a-z0-9]\.[a-z][a-z\.]*[a-z]$/.test(el);

};

Validation.validationPass = (el) => {
    return !!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=(.*[a-zA-Z]){4}).{8,20}$/.test(el);
}

Validation.validationDublPass = (pass, pass2) => {
    return pass === pass2;
}

Validation.validationName = (el) => {
    return /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/.test(el);
}

export default Validation;