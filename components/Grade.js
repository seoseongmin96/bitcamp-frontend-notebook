import React,{useState} from 'react'
import Layout from '../containers/Layout'
export default function Grade () {
    const [Username, setUsername] = useState(0)
    const [kor, setKor] = useState(0)
    const [eng, setEng] = useState(0)
    const [math, setMath] = useState(0)
    return <Layout><h1>Grade폼</h1>
    <form>
    
    <div>
    <label><b>Username</b></label>
    <input type="" /><br />

    <label htmlFor=""><b>kor </b></label>
    <input type="" /><br />

    <label htmlFor=""><b>eng </b></label>
    <input type="" /><br />

    <label htmlFor=""><b>math </b></label>
    <input type="" /><br />

    </div>
    </form>
    </Layout>
}
 ;