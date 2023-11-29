import ApiManager from './ApiManager'

export const user_login = async data => {
    try {
        const result = await ApiManager('auth/login',{
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            data: data,
        })
        // console.log(result)
        return result;
    } catch (error) {
        return error.response.data;
    }
    // try {
    //     const result = await ApiManager('auth/login',{
    //         method:'POST',
    //         headers:{
    //             'content-type':'application/json',
    //         },
    //         data: data,
    //     })
    //     // console.log(result)
    //     return result;
    // } catch (error) {
    //     return error.response.data;
    // }
}
