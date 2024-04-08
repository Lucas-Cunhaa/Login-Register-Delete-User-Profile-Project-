fetch("http://localhost:3030/myapp/profile", {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
}).then(res => res.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('Erro ao buscar perfil do usuário:', error);
});
