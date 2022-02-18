import React,{useState} from 'react' 
import Layout from '../containers/Layout'

export default function Bmi(){
    const [username, setUsername] = useState("")
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [result, setResult] = useState(0)
    const sum = () => {
        let username = document.getElementById('username').value
        console.log('이름 :' +username)
        let height = document.getElementById('height').value
        console.log('키 :' +height)
        let weight = document.getElementById('weight').value
        console.log('몸무게 :' + weight)
        setUsername(username)
        setHeight(height)
        setWeight(weight)
        setResult(String(username) + Number(height) + Number(weight))
        console.log('결과 :'+result)
    }

    return <Layout><h1>Bmi폼</h1>
    
    
    <div>
    <label><b>Username</b></label>
    <input id="username" type="" /><br />

    <label htmlFor=""><b>height</b></label>
    <input id= "height" type="" /><br />

    <label htmlFor=""><b>weight</b></label>
    <input id= "weight" type="" /><br />
    <button onClick={() =>{sum()}}>결과 버튼</button>
    <div>결과: {username} , {height} , {weight}</div>
    </div>
   
    </Layout>
     
}
 