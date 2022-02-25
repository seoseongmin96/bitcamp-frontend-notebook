import React, {useState} from 'react' 
import Layout from '../containers/Layout';
import { memberBmi } from '../api/index';
export default function Bmi(){

    const [inputs , setInputs] = useState({})
    const [ result, setResult] = useState(``)
    const { name , weight , height } = inputs;
   
    const handleChange = (e) => {
        e.preventDefault()
    
        const { value, name } = e.target;
        setInputs({
            ...inputs, [name] : value
        })
    }
    const handleClick = (e) => {
        e.preventDefault()
        
        memberBmi({name, weight, height}).then(res => setResult(res.data)).catch( err => console.log(`에러 발생${err}`))
        
    }


    return (<Layout>
        
        <h1>Bmi폼</h1>
        
        <form action="">
   
    <label><b>Username</b></label>
    <input name="name" type="text" onChange={handleChange} /><br />

    <label htmlFor=""><b>height</b></label>
    <input name= "height" type="text" onChange={handleChange} /><br />

    <label htmlFor=""><b>weight</b></label>
    <input name="weight" type= "text" onChange={handleChange} /><br/>
    <button onClick={handleClick}>전 송</button>
    </form>
    <div>Bmi 결과 : {result}</div>
    
    </Layout>)
}