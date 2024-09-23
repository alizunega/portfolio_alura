//validaciones para campos del formulario de contacto
//validacion nombre
export function validarNombre(name) {
  if (name === "") {
    return "Por favor, ingrese un nombre.";
  } else if (name.length > 50) {
    return "Nombre muy largo";
  } else {
    return "";
  }
}
//validacion email
const regEmail =
  /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

export function validarEmail(email) {
  if (email === "") {
    return "Por favor, ingrese un email.";
  } else if (!regEmail.test(email)) {
    return "Email no válido";
  } else {
    return "";
  }
}

//validacion asunto
export function validarAsunto(subject) {
  if (subject === "") {
    return "Por favor, ingrese un asunto.";
  } else if (subject.length > 50) {
    return "Asunto muy largo";
  } else {
    return "";
  }
}

//validacion mensaje
export function validarMensaje(message) {
  if (message === "") {
    return "Por favor, ingrese un mensaje.";
  } else if (subject.length > 300) {
    return "Mensaje muy largo";
  } else {
    return "";
  }
}
//validaciones para campos del formulario de contacto
