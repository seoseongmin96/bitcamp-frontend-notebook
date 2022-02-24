import React,{useState} from 'react'
import Layout from '../containers/Layout'
import axios from 'axios'
export default function Login (){

    const [ inputs, setInputs] = useState([])
    const { username, password} = inputs;

    const handleChange = (e) => {
        e.preventDefault()

        const { value, name} = e.target;
        setInputs({
            ...inputs, [name] : value
        })
    }
    const handleClick = (e) => {
        e.preventDefault()
        const loginRequest = { username, password}
        alert(`로그인 : ${JSON.stringify(loginRequest)}`)
    
    
    /*const sum = () => {
        let username = document.getElementById('username').value
        console.log('이름 :' +username)
        let password = document.getElementById('password').value
        console.log('비밀번호 :' + password)
        setUsername(username)
        setPassword(password)
        setResult("로그인 성공")
        console.log('결과 :' +result)
    }*/
    }

    return( <Layout>
    <form>
    <h1>로그인폼</h1>
    
  
    <div>
    <label><b>Username</b></label>
    <input type= "text" onChange={handleChange} name="username"/><br />

    <label htmlFor=""><b>Password</b></label>
    <input type= "text" onChange={handleChange} name="password"/><br />

    <button onClick={handleClick}>Login</button><br />
    <label><input type="checkbox" />Remember me</label><br />
    
    
    </div>
    <div>
    <button>Cancel</button><br />
    <span>Forgot <a>password?</a></span>
    </div>
    </form>
    </Layout>)
    
    }


