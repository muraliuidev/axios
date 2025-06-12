import { useState } from "react"
import axios from 'axios'

const url = 'https://icanhazdadjoke.com/'

function HeadersData() {
    const [joke, setJoke] = useState();

    const findJoke = async () => {
        try{
            const resp = await axios(url, {
                headers: {
                    Accept: 'Application/json'
                }
            })
            setJoke(resp?.data.joke)
            
        } catch(error){
            console.log(error.response)
        }
    }
    return(
        <div>
            <button onClick={findJoke}>Render Joke</button>
            <p>{joke}</p>
        </div>
    )
}
export default HeadersData