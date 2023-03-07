import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        "token": localStorage.getItem('token@rapfood')
    }
});

// api.get('products');
// api.get('products/1');
// api.post('products', dados);
// api.put('products/1', dados);
// api.delete('products/1');

export default api;