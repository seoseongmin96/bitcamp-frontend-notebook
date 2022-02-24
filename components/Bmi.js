import React, {useState} from 'react' 
import Layout from '../containers/Layout';
import axios  from 'axios';
export default function Bmi(){

    const [inputs , setInputs] = useState({})
    const { name , weight , height } = inputs;
   
    const handleChange= (e) => {
        e.preventDefault()
    
        const { value, name } = e.target;
        setInputs({
            ...inputs, [name] : value
        })
    }
    const handleClick = (e) => {
        e.preventDefault()
        const bmiRequest = { name, weight, height}
        alert( `사용자 이름: ${JSON.stringify(bmiRequest)}`)
    
    
       /* axios.get(`http://localhost:8080/member/bmi/aaa/180.5/80.5`)
            .then((res)=>{
                alert(`답장이 도착했습니다 [내용] ${JSON.stringify(res.data)}`)
            })*/
    }


    return (<Layout>
        <form>
        <h1>Bmi폼</h1>
        
    
    <div>
    <label><b>Username</b></label>
    <input type="text" onChange={handleChange} name="name"/><br />

    <label htmlFor=""><b>키</b></label>
    <input type="text" onChange={handleChange} name="height"/><br />

    <label htmlFor=""><b>weight</b></label>
    <input type= "text" onChange={handleChange} name="weight"/><br/>
    <button onClick={handleClick}>BMI 체크</button><br />
    </div> 
    
    </form>
    </Layout>)
}