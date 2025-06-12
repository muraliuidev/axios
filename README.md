# axios
    - npm i axios
    
# import methods
    - axios.get(url)
    - axios.post(url)
    - axios.patch/put(url)
    - axios.delete(url)

    - default method will be 'get'
    - axios(url)
    
    - it's return a Promise
    - response data located in data object
    - error in error.response

```js
import axios from 'axios'

const fetchData = async () => {
    try{
        const response = await axios(url)
        console.log(response)
    } catch(error){
        console.log(error.resonse)
    }
};

