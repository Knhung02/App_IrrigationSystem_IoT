export const isValidEmail = (stringEmail) =>{
    return (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/.test(stringEmail)
    )
}
export const isValidPassword = (stringPassword) => stringPassword.length >= 6
