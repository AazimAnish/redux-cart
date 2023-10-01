// api/fakestoreAPI.ts
import axios from 'axios';

const fakestoreAPI = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default fakestoreAPI;
