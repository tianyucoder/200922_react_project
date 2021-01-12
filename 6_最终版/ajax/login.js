import axios from 'axios'

/**
 * 请求登录
 * @param {*} phone 
 * @param {*} code 
 */
export const reqLogin =  (phone,code) => axios.post('/login/phone',{phone,code})