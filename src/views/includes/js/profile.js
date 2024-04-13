const divUser = document.querySelector(".username");
const deleteForm = document.querySelector(".delete-form");

const usernameForm = document.querySelector(".username-form")
const usernameInput = document.querySelector('.usernameInput')

const emailForm = document.querySelector('.email-form')
const emailInput = document.querySelector('.emailInput')

const passwordForm = document.querySelector('.password-form')
const passwordInput = document.querySelector('.passwordInput')


let user = sessionStorage.getItem("username")
let change;

function showUsername(username) {
  const p = document.createElement("p");
  p.textContent = username;
  divUser.appendChild(p);
} 

showUsername(user)

  deleteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(user)
    fetch(`http://localhost:3030/myapp/profile/${user}`, {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("User deleted");
        window.location.href = "http://127.0.0.1:5500/myProject/src/views/includes/html/index.html";
      });
  });

  usernameForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const newUsername = {username: usernameInput.value}
    putFetch(newUsername)
    change = "username"; 
  })

  emailForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const newEmail = {email: emailInput.value}
    change = "email";
    putFetch(newEmail)
    
  })
 
  passwordForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const newPassword = {password: passwordInput.value}
    change = "password";
    putFetch(newPassword)
  })
  
  function putFetch(myChange) {
    fetch(`http://localhost:3030/myapp/profile/${user}`, {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(myChange)
    })
      .then((res) => res.json())
      .then((data) => {
        sessionStorage.setItem("username", usernameInput.value );
        alert(`Your ${change} has been updated`);
        location.reload()
      });
  }


