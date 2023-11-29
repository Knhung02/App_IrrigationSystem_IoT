import axios from "axios"
const getUserDetail = async () =>{
    try {
        let response = await axios.get('https://randomuser.me/api')  
        if (response.status != 200){
            throw 'Failed request'
        }
        if (response.data.results.length > 0){
            let responseUser = response.data.results[0]
            let user = {}
            // debugger
            user.dateOfBirth = new Date(responseUser.dob.date)// convert sang kieu Date
            user.email = responseUser.email
            user.gender = responseUser.gender ?? 'male' //default value
            user.userId = `${responseUser.id.name}${responseUser.id.value}`//noi chuoi
            user.address = `${responseUser.location.state},${responseUser.location.street.name}`
            user.username = responseUser.login.username
            user.url = responseUser.picture.large
            user.phone = responseUser.phone ?? ''
            user.registereddate = new Date(responseUser.registered.date)

            return user
        }
        throw 'User not found'
    } catch (error) {
        // debugger
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