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
    const user = new User (usernameInput,emailInput,passwordInput)
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
        console.log(data)
      }).catch(alert(error.Message))
})
