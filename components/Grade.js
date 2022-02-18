import React,{useState} from 'react'
import Layout from '../containers/Layout'
export default function Grade () {
    const [Username, setUsername] = useState("")
    const [kor, setKor] = useState(0)
    const [eng, setEng] = useState(0)
    const [math, setMath] = useState(0)
    const[result, setResult] = useState(0)
    const sum = () => {
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
        
    }
    return <Layout><h1>Grade폼</h1>
    
    
    <div>
    <label><b>Username</b></label>
    <input id= "username" type="" /><br />

    <label htmlFor=""><b>kor </b></label>
    <input id= "kor" type="" /><br />

    <label htmlFor=""><b>eng </b></label>
    <input id= "eng" type="" /><br />

    <label htmlFor=""><b>math </b></label>
    <input id= "math" type="" /><br />
    <button onClick={() =>{sum()}}>결과 버튼</button>
    <div>결과: {Username}, {kor}, {eng}, {math}</div>

    </div>
    
    </Layout>
}
 ;