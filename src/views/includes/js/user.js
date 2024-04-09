const divUser = document.querySelector(".username");
const deleteForm = document.querySelector(".deleteProfile");

function showUsername(username) {
  const p = document.createElement("p");
  p.textContent = username;
  divUser.appendChild(p);
}

let user;

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
    data.forEach((user) => {
      showUsername(user.username);
      user = user.username;
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

 

