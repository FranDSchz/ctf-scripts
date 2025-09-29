(async () => {
  const formData = new FormData();

  formData.append('bio', 'Misión cumplida por Gemini y un gran hacker.');
  

  formData.append('profile_pic', 'https://i.imgur.com/RbhW7Rb.png');

  await fetch('/profile', {
    method: 'POST',
    body: formData
  });
})();
