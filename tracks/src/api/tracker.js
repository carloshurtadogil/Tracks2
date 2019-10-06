import axios from 'axios';

//Connect to custom track-server api
export default axios.create({
    baseURL: 'http://3a8f1b1d.ngrok.io'//Change every 8 hours
});