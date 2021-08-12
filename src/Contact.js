import axios from 'axios';

export const Axios = axios.create({
    baseURL:"https://mysqlindivere.herokuapp.com/",
});