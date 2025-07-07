const imgURLs = [
  "https://raw.githubusercontent.com/edvardoviedo/recursos/refs/heads/main/MOVONTE/linkedin_recap_team.jpg",
  "https://raw.githubusercontent.com/edvardoviedo/recursos/refs/heads/main/MOVONTE/jiram.jpg",
  "https://raw.githubusercontent.com/edvardoviedo/recursos/refs/heads/main/MOVONTE/SHIT_DONE.jpg",
  "https://raw.githubusercontent.com/edvardoviedo/recursos/refs/heads/main/MOVONTE/Hi!%20Can%20we%20have%20a%20quick%20meeting%20I%20promise%20it%20won%E2%80%99t%20take%20long.jpg",
  "https://raw.githubusercontent.com/edvardoviedo/recursos/refs/heads/main/MOVONTE/9%20(changed).jpg"
];

// Número de filas y columnas para repartir
const rows = 2; 
const cols = 3; 

// Tamaño base más grande
const minSize = 250; 
const maxSize = 400;

imgURLs.forEach((url, i) => {
  const img = document.createElement("img");
  img.src = url;

  const size = Math.floor(Math.random() * (maxSize - minSize)) + minSize;
  img.style.width = `${size}px`;

  // Slot: fila y columna
  const row = Math.floor(i / cols);
  const col = i % cols;

  // Cada slot tiene un margen interno para que la imagen no toque el borde
  const slotWidth = 100 / cols;
  const slotHeight = 100 / rows;

  // Posición random dentro de su slot
  const left = col * slotWidth + Math.random() * (slotWidth - 20);
  const top = row * slotHeight + Math.random() * (slotHeight - 20);

  img.style.left = `${left}%`;
  img.style.top = `${top}%`;

  document.body.appendChild(img);
});
