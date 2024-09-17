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
