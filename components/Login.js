import React,{useState} from 'react'
import Layout from '../containers/Layout'
export default function Login (){
    const [Username, setUsername] = useState("")
    const [password, setPassword] = useState(0)
    const [result, setResult] = useState("")
    const sum = () => {
        let username = document.getElementById('username').value
        console.log('이름 :' +username)
        let password = document.getElementById('password').value
        console.log('비밀번호 :' + password)
        setUsername(username)
        setPassword(password)
        setResult("로그인 성공")
        console.log('결과 :' +result)
    }
   
    return <Layout><h1>로그인폼</h1>
    
  
    <div>
    <label><b>Username</b></label>
    <input id= "username" type="" /><br />

    <label htmlFor=""><b>Password</b></label>
    <input id= "password" type="" /><br />

    <button onClick={()=>{sum()}}>Login</button><br />
    <label><input type="checkbox" />Remember me</label><br />
    
    
    </div>
    <div>
    <button>Cancel</button><br />
    <span>Forgot <a>password?</a></span>
    </div>
    <div>결과: {result}</div>
    </Layout>
    
    }


