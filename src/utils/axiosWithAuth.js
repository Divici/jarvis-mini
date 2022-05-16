import axios from 'axios';

const axiosWithAuth = ()=> {
    //const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
        },
        baseURL: 'https://api.openai.com/v1/engines/text-davinci-002/completions'
    });
}

export default axiosWithAuth;
