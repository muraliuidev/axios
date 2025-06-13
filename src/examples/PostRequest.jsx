import { useState } from "react"
import axios from 'axios'

const url = 'https://www.course-api.com/axios-tutorial-post'
function PostRequest() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const resp = await axios.post(url , {name:name, email:email})
            console.log(resp.data)
        } catch (error) {
            console.log(error.resp)
        }
    }
    return(
        <div>
            <section>
                <form>
                    <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" value={name} onChange={(e)=> setName(e.target.value)} />
                    </div>
                    <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                    </div>
                    <button onClick={handleSubmit}>Log in</button>
                </form>
            </section>
        </div>
    )
}
export default PostRequest