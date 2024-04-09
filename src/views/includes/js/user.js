let user;
const divUser = document.querySelector('.username')

function showUsername (username) {
    const p =  document.createElement('p') 
    p.textContent = username 
    divUser.appendChild(p)
 } 

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
    data.forEach( user => {
        showUsername(user.username)
    })
})
.catch(error => {
    console.error('Erro ao buscar perfil do usuário:', error);
});

