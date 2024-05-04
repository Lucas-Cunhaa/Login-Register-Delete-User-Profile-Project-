import Button from "../components/Atoms/button";
import Input from "../components/Atoms/input";
import { useState } from "react";
import '../css/profile.css'

let user = sessionStorage.getItem("username")
let change;



const Profile = () => {


  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  
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
        console.log(data)
        sessionStorage.setItem("username", username );
        alert(`Your ${change} has been updated`);
        location.reload()
      });
  }


const handleSetUsername = (e) => {
    e.preventDefault()
    setUsername(e.target.value)
}
const handleChangeUsername = (e) => {
    e.preventDefault()
    const newUsername = { username: username}
    putFetch(newUsername) 
  }
const handleSetEmail = (e) => {
    setEmail(e.target.value)
}
const handleChangeEmail = (e) => {
    e.preventDefault()
    const newEmail = {email: email}
    putFetch(newEmail)
}
const handleSetPassword = (e) => {
    setPassword(e.target.value)
}
const handleChangePassword = (e) => {
    e.preventDefault()
    const newPassword = {password: password}
    putFetch(newPassword)
}
const handleDeleteProfile = (e) => {
   e.prevent.default() 
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

}

  return (
    <>
    <section className="content-all"> 
      <section className="top">
        <div className="content">
          <h1 className="h1-user">Hello again {user}</h1>
          <div className="username"></div>
        </div>
        <div className="delete">
          <form className="delete-form" method="DELETE" onSubmit={ (e) => {handleDeleteProfile(e)}}>
            <input
              className="delete-button"
              id="button"
              type="submit"
              value="Submit"
            />
            <p className="button-holder">Delete</p>
            <label htmlFor="delete-button">
              <svg
                className="delete-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </label>
          </form>
        </div>
      </section>

      <div className="put">
        <h2> Change your profile</h2>
        <form className="username-form" onSubmit={(e) =>handleChangeUsername(e)}>
          <Input
            onChange={(e) => {
              handleSetUsername(e);
            }}
            value={username}
            type="text"
            placeholder="Username"
          />
          <Button type="submit" className="button-username">
            Submit
          </Button>
        </form>

        <form className="email-form" onSubmit={ (e) =>handleChangeEmail(e)}>
          <Input
            onChange={(e) => {
              handleSetEmail(e);
            }}
            value={email}
            type="email"
            placeholder="Email"
          />
          <Button type="submit" className="button-email">
            Submit
          </Button>
        </form>
        <form className="password-form" onSubmit={(e) =>handleChangePassword(e)}>
          <Input
            onChange={(e) => {
              handleSetPassword(e);
            }}
            value={password}
            type="password"
            placeholder="Password"
          />
          <Button type="submit" className="password-button">
            Submit
          </Button>
        </form>
      </div>
    </section>
    </>
  );


};
export default Profile;
