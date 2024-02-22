import axios from "axios";

const instance = axios.create({
    baseURL:'https://bareillybasket.onrender.com'

});

export default instance;
//