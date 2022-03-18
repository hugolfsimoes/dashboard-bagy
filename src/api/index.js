import axios from 'axios';

const url = 'http://localhost:3004/lojas';
export const getAllStores = () => axios.get(url);