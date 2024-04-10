const divUser = document.querySelector(".username");
const deleteForm = document.querySelector(".delete-form");
const putForm = document.querySelector(".put-form")
const usernameInput = document.querySelector('.usernameInput')
const emailInput = document.querySelector('.emailInput')
const passwordInput = document.querySelector('.passwordInput')

let user;

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

function showUsername(username) {
  const p = document.createElement("p");
  p.textContent = username;
  divUser.appendChild(p);
}


fetch("http://localhost:3030/myapp/profile", {
  method: "GET",
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
    data.forEach((element) => {
      showUsername(element.username);
      user = element.username;
    });
    
  })
  .catch((error) => {
    console.error("ERROR:", error);
  });

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

  putForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const newUsername = usernameInput.value
    const newEmail = emailInput.value
    const newPassword = passwordInput.value

    


  })
 

