import axios from 'axios'

/**
 * 请求获取验证码
 * @param {*} phone 
 */
export const reqVerifyCode =  phone => axios.post('/login/digits',{phone})

export const reqVerifyLogin =  () => axios.post('/login/verify')