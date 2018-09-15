const regularExpresion = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const isNotEmpty = value => (value !== '');
const isEmail = value => (regularExpresion.test(value))
const equalPassword = (password, confirPassword) => password === confirPassword;
const miniLenght = value => (value.length >= 6);
const isMessage = value => (value.trim() !== '');


//  Valida los campos al Registrar Nuevo Usuario
const validationRegisterUser = (nameUser, email, password, confirPassword) => {
  const isValid = (isNotEmpty(nameUser)
    && isEmail(email)
    && isNotEmpty(password)
    && isNotEmpty(confirPassword)
    && equalPassword(password, confirPassword)
    && miniLenght(password));
  return isValid;
}

// Validando Login: email y password correctos
const isValidLogin = (email, password) => (isEmail(email) && isNotEmpty(password));

// Valida ingreso de email para RESETEAR su contraseña
const validationUpdatePassword = (email) => isEmail(email);

// Valida publicacion en el muro
const validationPublicPost = (newPost) => isMessage(newPost);

// Exportando funciones al Objeto Global windown
window.isValidLogin = isValidLogin;
window.validationRegisterUser = validationRegisterUser;
window.validationPublicPost = validationPublicPost;
window.validationUpdatePassword = validationUpdatePassword;
window.isNotEmpty = isNotEmpty;
window.isEmail = isEmail;
window.equalPassword = equalPassword;
window.miniLenght = miniLenght;
window.isMessage= isMessage;

