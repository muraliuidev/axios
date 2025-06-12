import { useState } from "react"
import axios from 'axios'

const url = 'https://icanhazdadjoke.com/'
function HeadersData() {
    const [joke, setJoke] = useState()

    const findJoke = async () => {
        try{
            const resp = await axios(url, {
                headers: {
                    Accept: 'application/json'
                }
            })
            const {data} = resp
            setJoke(data) 
            
        } catch (error) {
            console.log(error.response)
        }
    }
    
    return (
        <div>
            <button onClick={findJoke}>Random Job</button>
            <p>{joke?.joke}</p>
        </div>
    )
}
export default HeadersData