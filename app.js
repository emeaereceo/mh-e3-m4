// 1. Seleccion de elementos
const imagenPrincipal = document.getElementById("imagen-principal");
const thumbnails = document.querySelectorAll(".thumbnail");
const contenedorPrincipal = document.getElementById(
  "imagen-principal-container"
);

console.log(thumbnails);
// 2. Añadir Event Listener a los thumbnails
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    // a. Obtengo la url y el texto del thumbnail clickeado
    const nuevaUrl = e.currentTarget.src;
    const nuevoTextoAlt = e.currentTarget.alt;

    // b. Actualizo la imagen principal
    imagenPrincipal.src = nuevaUrl;
    imagenPrincipal.alt = nuevoTextoAlt;

    // c. Eliminar pie de foto si existe
    // const pieAnterior = document.getElementById("pie-de-foto");
    // if (pieAnterior) {
    // pieAnterior.remove()
    // }

    // d. Crear el nuevo elemento del parrafo
    // const nuevoPie = document.createElement("p");
    // nuevoPie.id = "pie-de-foto";
    // nuevoPie.textContent = nuevoTextoAlt;

    // e. Añadir el nuevo parrafo al contenedor
    // contenedorPrincipal.appendChild(nuevoPie);

    // refactor del pie, sobreescribo contenido
    let pie = document.getElementById("pie-de-foto");
    if (!pie) {
      // Si NO existe, lo creo por unica vez
      pie = document.createElement("p");
      pie.id = "pie-de-foto";
      contenedorPrincipal.appendChild(pie);
    }
    // Si existe, solo reemplaza el texto sin eliminar elemento
    pie.textContent = nuevoTextoAlt;
  });
});
