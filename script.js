const gifURLs = [
  "https://raw.githubusercontent.com/edvardoviedo/recursos/refs/heads/main/Untitled-Artwork_1.GIF",
  "https://raw.githubusercontent.com/edvardoviedo/recursos/refs/heads/main/Untitled-Artwork.GIF",
  "https://raw.githubusercontent.com/edvardoviedo/recursos/refs/heads/main/Untitled-Artwork_2.GIF",
  "https://raw.githubusercontent.com/edvardoviedo/recursos/refs/heads/main/Untitled_Artwork.GIF",
  "https://raw.githubusercontent.com/edvardoviedo/recursos/refs/heads/main/Untitled_Artwork_1.GIF"
];

const NUM_GIFS = 222; // Número total de gifs en la página

for (let i = 0; i < NUM_GIFS; i++) {
  const img = document.createElement("img");
  img.src = gifURLs[Math.floor(Math.random() * gifURLs.length)];
  img.className = "gif";

  const size = Math.floor(Math.random() * 150) + 80; // ancho aleatorio
  img.style.width = `${size}px`;

  img.style.left = `${Math.random() * 100}%`;
  img.style.top = `${Math.random() * 100}%`;

  const rotation = Math.floor(Math.random() * 360);
  img.style.transform = `rotate(${rotation}deg)`;

  // Evitar clic derecho
  img.addEventListener('contextmenu', (e) => e.preventDefault());

  // Evitar clic normal (opcional)
  img.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  });

  document.body.appendChild(img);
}
