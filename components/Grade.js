import React,{useState} from 'react'
import Layout from '../containers/Layout'
import axios from 'axios'
export default function Grade () {

    const [ inputs, setInputs] = useState([])
    const { username, kor, eng, math} = inputs;
   
    const handleChange = (e) => {
        e.preventDefault()

        const { value, name } = e.target;
        setInputs({
            ...inputs, [name] : value
        }) 
    }
    const handleClick = (e) => {
        e.preventDefault()
        const gradeRequest = { username, kor, eng, math}
        alert(`학생 성적표: ${JSON.stringify(gradeRequest)}`)
    
    /*const sum = () => {
        let username = document.getElementById('username').value
        console.log('이름 :' +username)
        let kor = document.getElementById('kor').value
        console.log('국어점수 :' +kor)
        let eng = document.getElementById('eng').value
        console.log('영어점수 :' +kor)
        let math = document.getElementById('math').value
        console.log('수학점수 :' +kor)
        setUsername(username)
        setKor(kor)
        setEng(eng)
        setMath(math)
        setResult(String(username) + Number(kor) + Number(eng) + Number(math))
        console.log('결과 :'+result)
        
    }*/
    }

    return(<Layout>
        <form>
        <h1>Grade폼</h1>
    
    
    <div>
    <label><b>Username</b></label>
    <input type= "text" onChange={handleChange} name="username"/><br />

    <label htmlFor=""><b>kor </b></label>
    <input type= "text" onChange={handleChange} name="kor"/><br />

    <label htmlFor=""><b>eng </b></label>
    <input type= "text" onChange={handleChange} name="eng"/><br />

    <label htmlFor=""><b>math </b></label>
    <input type= "text" onChange={handleChange} name="math"/><br />
    <button onClick={handleClick}>Grade 체크</button><br/>
    </div>
    </form>
    </Layout>)
}


 