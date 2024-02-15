import axios from "axios";

const instance = axios.create({
    baseURL:'http://localhost:5002'

});

export default instance;
//https://bareillybasket.onrender.com