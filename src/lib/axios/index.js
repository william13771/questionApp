import axios from 'axios'
import qs from 'qs'
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.interceptors.request.use((config =>{
    console.log(config)
    return config;  
}))    