import axios from "axios"
const getUserDetail = async () =>{
    alert('Nhung')
    try {
        let response = await axios.get('https://dmbe-api.industry.com.vn/api/iot')  
        if (response.status != 200){
            throw 'Failed request'
        }
        if(response.status === 201){
            let responseUser = response.data.data
            let user = {}
            // debugger
            user.temperature = responseUser.temperature
            user.soilHumidity = responseUser.soilHumidity

            user.humidity = responseUser.humidity

            debugger
            return user
        }
        throw 'User not found' 
    } catch (error) {
        debugger
        throw error
    }
}
const login = ({email, password})=>{
}
//many other functions
export default {
    getUserDetail,
    login,
}
// async: hamf getUserDetail thuc hien thi ca ham khac thuc hien xong xong nhung lenh nay xong moi chuyen sang lenh tiep theo