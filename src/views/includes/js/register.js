const registerForm = document.querySelector('.register')
const usernameInput = document.querySelector('.usernameInput')
const emailInput = document.querySelector('.emailInput')
const passwordInput = document.querySelector('.passwordInput')
class User {
    Username 
    Email 
    Password 
    
    constructor(username, email , password, ){
        this.Username = username 
        this.Email = email 
        this.Password = password      
    }
}
registerForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    const user = new User(username, email, password);


    fetch("http://localhost:3030/myapp/register", {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
              'Content-Type': 'application/json'
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
          body: JSON.stringify(user)
      }).then(res => {
        return res.json()
      }).then(data => {
        if(data.message === 'Failed, User alredy exist'){
          alert('ERROR user aredy exist')
        } else {
          alert(`User ${username} created`)
          location.reload()
        }
        console.log(data)
      }).catch(error => {
        console.log(error)
      })
})

