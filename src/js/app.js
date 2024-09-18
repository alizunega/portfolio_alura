document.addEventListener("click", () => {
  const menu = document.querySelector(".header--nav-list");
  const button = document.querySelector(".header--nav-button");
  menu.hidden = !menu.hidden;

  // Ocultar el botón cuando el menú esté visible
  if (!menu.hidden) {
    button.style.display = "none"; // Ocultar el botón
    // temporizador para cerrar el menu desplegable
    setTimeout(() => {
      menu.hidden = true;
      button.style.display = "block"; // Mostrar el botón de nuevo
    }, 6000);
  }
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtén los valores del formulario
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Crea el enlace mailto
    var mailtoLink = `mailto:ali.zunega@gmail.com?subject=Contacto de ${name}&body=Nombre: ${name}%0AEmail: ${email}%0AMensaje: ${message}`;

    // Abre el cliente de correo
    window.location.href = mailtoLink;
  });
