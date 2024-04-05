const username = require('./index')


fetch(`http://localhost:3030/myapp/profile:/${username}`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(username)
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
