import './Auth.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Auth(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = () =>{
        if(username && password){
            navigate("/calc")
        }
        else{
            alert("Enter something!!!")
        }
    }

    return(
        <div className='auth-container'>
            <h2> Login </h2>
            <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            >
            </input>
            <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            ></input>
            <button onClick={handleLogin}> Submit </button>
        </div>
    )
}

export default Auth