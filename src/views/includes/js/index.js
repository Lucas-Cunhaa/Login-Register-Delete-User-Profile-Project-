const loginForm = document.querySelector('.login')
const usernameInput = document.querySelector('.usernameInput')
const passwordInput = document.querySelector('.passwordInput')

class User {
    Username 
    Password 
    constructor(username, password, ){
        this.Username = username 
        this.Password = password
    }
}
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = new User (usernameInput.value, passwordInput.value)
    console.log(user)
    fetch("http://localhost:3030/myapp/login", {
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
        if( data.message === 'Invalid User or Password'){
          alert('Invalid username or password')
        } else {
          module.exports = data.message
          window.location.href = "http://127.0.0.1:5500/myProject/src/views/includes/html/profile.html"
        }
      }).catch( error => {
        console.log(error)
      })


})
