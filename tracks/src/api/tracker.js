import axios from 'axios';

//Connect to custom track-server api
export default axios.create({
    baseURL: 'http://c9f67f6a.ngrok.io'//Change every 8 hours
});