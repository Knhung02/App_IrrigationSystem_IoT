import axios from 'axios'

export const axiosGet = async () => {
    const res = await axios({
        method:'get',
        // url:'https://dmbe-api.industry.com.vn/api/iot',
        url:'http://localhost:3000/irrigation/',
    })
    return res;
};
export const patchAPI = async (data) => {
    const res = await axios({
        method: 'PATCH',
        url:'http://localhost:3000/irrigation',
        data:data,
        headers: {
          'Accept': 'application/json',
          'content-type': 'application/json',
        },
    })
    return res;
  };
