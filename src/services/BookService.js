import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/birchtrees20/textbookmockdata',  // notice that it doesn't include books
    withCredentials: false,
    headers: {
        Accept: 'application/json',   // what client expect
        'Content-Type': 'application/json' // descriping our request content (none here)
    }
})

export default {
    getBooks() { 
        return apiClient.get('/books') //  notice that /books will be append to the baseURL
    },
    getBook(id) {
        return apiClient.get('/books/' + id) // we append id to the URL
    } 
}

