import * as validaciones from "./validaciones.js";

//funcion para ir arriba

let mybutton = document.getElementById("myBtn");
let navFlotante = document.querySelector(".nav--flotante");

//muestra el boton cuando ha bajado
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
    navFlotante.style.display = "inline-flex";
  } else {
    mybutton.style.display = "none";
    navFlotante.style.display = "none";
  }
}
mybutton.addEventListener("click", irArriba);

function irArriba() {
  document.body.scrollTop = 0; //para navegadores: Safari
  document.documentElement.scrollTop = 0; // Para navegadores: Chrome, Firefox, IE and Opera
}

//activacion del boton menu
const menu = document.querySelector(".header--nav-list");
const button = document.querySelector(".header--nav-button");
button.addEventListener("click", () => {
  menu.hidden = !menu.hidden;

  // Ocultar el botón cuando el menú esté visible
  if (!menu.hidden) {
    button.style.display = "none"; // Ocultar el botón
    // temporizador para cerrar el menu desplegable
    setTimeout(() => {
      menu.hidden = true;
      button.style.display = "block"; // Mostrar el botón de nuevo
    }, 4000);
  }
});

//validar campos

// Función para validar cada campo
function validarCampos() {
  let isValid = true;

  // Validar nombre
  const name = document.getElementById("name").value;
  const nameError = document.getElementById("name-error");
  const nameValidation = validaciones.validarNombre(name);
  nameError.textContent = nameValidation;
  if (nameValidation !== "") isValid = false;

  // Validar email
  const email = document.getElementById("email").value;
  const emailError = document.getElementById("email-error");
  const emailValidation = validaciones.validarEmail(email);
  emailError.textContent = emailValidation;
  if (emailValidation !== "") isValid = false;

  // Validar asunto
  const subject = document.getElementById("subject").value;
  const subjectError = document.getElementById("subject-error");
  const subjectValidation = validaciones.validarAsunto(subject);
  subjectError.textContent = subjectValidation;
  if (subjectValidation !== "") isValid = false;

  // Validar mensaje
  const message = document.getElementById("message").value;
  const messageError = document.getElementById("message-error");
  const messageValidation = validaciones.validarMensaje(message);
  messageError.textContent = messageValidation;
  if (messageValidation !== "") isValid = false;

  // Habilitar o deshabilitar el botón de envío
  document.getElementById("submit-button").disabled = !isValid;
}

function manejarEnvioFormulario(event) {
  event.preventDefault(); // Evita la recarga de la página

  // Mostrar mensaje de éxito
  const successMessage = document.getElementById("success-message");
  successMessage.style.display = "block";

  // Ocultar el mensaje después de 3 segundos
  setTimeout(() => {
    successMessage.style.display = "none";
    document.getElementById("contact-form").reset(); // Opcional: limpiar el formulario
    location.reload();
  }, 3000);
}

// Asociar la validación a los eventos de entrada de los campos
document.getElementById("name").addEventListener("input", validarCampos);
document.getElementById("email").addEventListener("input", validarCampos);
document.getElementById("subject").addEventListener("input", validarCampos);
document.getElementById("message").addEventListener("input", validarCampos);

// Asociar el evento de envío del formulario
document
  .getElementById("contact-form")
  .addEventListener("submit", manejarEnvioFormulario);

// Inicializar la validación al cargar la página
document.addEventListener("DOMContentLoaded", validarCampos);
