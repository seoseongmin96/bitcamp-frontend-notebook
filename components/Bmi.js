import React,{useState} from 'react' 
import Layout from '../containers/Layout'

export default function Bmi(){
    const [username, setUsername] = useState(0)
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    return <Layout><h1>Bmi폼</h1>
    <form>
    
    <div>
    <label><b>Username</b></label>
    <input type="" /><br />

    <label htmlFor=""><b>height</b></label>
    <input type="" /><br />

    <label htmlFor=""><b>weight</b></label>
    <input type="" /><br />
    </div>
    </form>
    </Layout>
     
}
 