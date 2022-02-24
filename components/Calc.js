import React, {useState} from 'react' 
import Layout from '../containers/Layout'
import axios from 'axios'
export default function Calc (){
    const [inputs, setInputs] = useState({})
    const { num1, num2 , opcode } = inputs;
    
    const handleChange = (e) => {
        e.preventDefault()
        const { value , name } = e.target;
        setInputs({
            ...inputs, [name] : value
        })

    }
    const handleClick = (e) => {
        e.preventDefault()
    const calcRequest = { num1, opcode, num2}
    alert( `계산기: ${JSON.stringify(calcRequest)}`)
        
        
    /*const [result, setResult] = useState(0)
    const sum = () => {
        let num1 = document.getElementById('num1').value
        console.log('숫자 1 :'+num1)
        let num2 = document.getElementById('num2').value
        console.log('숫자 2 :'+num2)
        
        setResult(Number(num1) + Number(num2))
        console.log('결과 : '+result)*/
    }
    return ( <Layout>
        <form>
        <h1>Calc폼</h1>
    
    <div>
    
    <label><b>num1</b></label>
    <input type="text" onChange={handleChange} name ="num1" /><br />

    <label htmlFor=""><b>opcode</b></label>
    <select onChange={handleChange} name ="opcode">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
        <option value="%">%</option>
    </select>
    <br />
    <label><b>num2</b></label>
     <input type = "text" onChange={handleChange} name="num2"/><br />
   
    <button onClick={handleClick}>계산결과</button><br/>
    </div>
    </form>
    </Layout>)
}

 