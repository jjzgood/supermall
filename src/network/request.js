import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000/',
        timeout: 5000
    })

    // 拦截器
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err);
    })

    // 返回真正的网络请求
    return instance(config)

}