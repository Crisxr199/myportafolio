// HTML
<a href="#" class="btn-download-cv">Descargar CV</a>

// JavaScript
const downloadButton = document.querySelector('.btn-download-cv');
const filePath = '/ruta/a/tu/archivo.pdf'; // Cambia esta ruta

downloadButton.addEventListener('click', (e) => {
  e.preventDefault(); // Previene el comportamiento por defecto del enlace

  const link = document.createElement('a');
  link.href = filePath;
  link.download = 'Mi-Curriculum.pdf'; // Nombre de archivo de descarga
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});