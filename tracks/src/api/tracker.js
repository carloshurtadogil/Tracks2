import axios from 'axios';

//Connect to custom track-server api
export default axios.create({
    baseURL: ''//Change every 8 hours
});