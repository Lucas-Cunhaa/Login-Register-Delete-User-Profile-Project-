import Button from "../components/Atoms/button"; 
import Input from "../components/Atoms/input"; 
import { useState } from 'react';
import NavBar from "../components/organism/navBar";

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


const FormRegister = () => {
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = new User(username,email,password)
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

    }
    const handleSetUsername = (e) => {
        setUsername(e.target.value)
    }
    const handleSetEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleSetPassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <>
        <section className="content">
           
            <h1>Register</h1>
            <form className="login" method="GET" onSubmit={handleSubmit}>
                <Input onChange={(e) =>{handleSetUsername(e)} } value={username} type="text" placeholder="Username" />
                <Input onChange={(e) =>{handleSetEmail(e)} } value={email} type="eamil" placeholder="Email"/> 
                <Input onChange={(e) =>{handleSetPassword(e)} } value={password} type="password" placeholder="Password"/> 
                <Button type="submit" className="login-button">Submit</Button>
                <NavBar link='/'> Alredy have an account? Login HERE </NavBar>
            </form>
        </section>
        </>
    )
}

export default FormRegister