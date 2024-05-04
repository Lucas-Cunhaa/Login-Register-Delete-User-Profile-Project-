import Button from "../components/Atoms/button"; 
import Input from "../components/Atoms/input"; 
import { useState } from 'react';
import User from '../components/organism/User'
import NavBar from "../components/organism/navBar";
import '../css/login.css'


const Form = () => {
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = new User(username, password)
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
          sessionStorage.setItem("username", username)
          window.location.href = "http://localhost:5173/profile"
        }
      }).catch( error => {
        console.log(error)
      })

    }
    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <>
        <section className="content-form">
           
            <h1 className="h1-form">Login form</h1>
            <form className="login" method="GET" onSubmit={handleSubmit}>
                <Input onChange={(e) =>{handleChangeUsername(e)} } value={username} type="text" placeholder="Username" />
                <Input onChange={(e) =>{handleChangePassword(e)} } value={password} type="password" placeholder="Password"/> 
                <Button type="submit" className="login-button">Submit</Button>
                <NavBar link='/register'> Do not have an account ? register HERE </NavBar>
            </form>
        </section>
        </>
    )
}
export default Form