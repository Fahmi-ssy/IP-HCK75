import axios from 'axios'

async function getPruduct() {
    const response = await axios.get('https://fakestoreapi.com/products')
    console.log(response)
}
getPruduct()
