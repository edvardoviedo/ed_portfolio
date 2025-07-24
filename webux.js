// Mostrar overlay solo en la card que se toca en móvil
document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", function (e) {
    if (e.target.closest(".gallery-btn")) return;

    // Oculta todas las overlays
    document
      .querySelectorAll(".gallery-item .gallery-overlay")
      .forEach((overlay) => {
        overlay.style.opacity = "0";
        overlay.style.pointerEvents = "none";
      });

    // Muestra sólo esta overlay
    const overlay = item.querySelector(".gallery-overlay");
    overlay.style.opacity = "1";
    overlay.style.pointerEvents = "auto";
  });
});

// Cierra overlays al tocar fuera de cualquier card
document.addEventListener("click", function (e) {
  if (!e.target.closest(".gallery-item")) {
    document
      .querySelectorAll(".gallery-item .gallery-overlay")
      .forEach((overlay) => {
        overlay.style.opacity = "0";
        overlay.style.pointerEvents = "none";
      });
  }
});
