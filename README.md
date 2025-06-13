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

# get method

```js
import axios from 'axios'

const FetchData = async () => {
    try{
        const response = await axios(url)
        console.log(response)
    } catch(error){
        console.log(error.resonse)
    }
};
```
# post method

```js
import axios from 'axios'

const postRequest = async () => {
    try{
        const response = await axios.post(url, { data })
        console.log(response.data)
    } catch(error){
        console.log(error.response)
    }
}
```
