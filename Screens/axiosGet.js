import axios from 'axios'

export const axiosGet = async () => {
    const res = await axios({
        method:'get',
        url:'http://localhost:3000/irrigation/',
    })
    return res;
};

