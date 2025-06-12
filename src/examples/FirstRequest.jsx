import { useEffect } from "react";
import axios from 'axios';

const url = 'https://www.course-api.com/react-store-products'

function FirstRequest() {

const fetchData = async () => {
    try{
        const response = await axios(url)
        const data = response.data
        console.log(data)
        console.log(response)
    } catch(error){
        console.log(error.response)
    }
}

useEffect(()=> {
    fetchData();
},[])

    return(
        <div>
            <h2>First Request</h2>
        </div>
    )
}
export default FirstRequest;