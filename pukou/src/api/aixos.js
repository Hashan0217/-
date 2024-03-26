import axios from "axios";
import Nprogress from 'nprogress'
import Vue from 'vue'


const request = axios.create({
    baseURL: "http://localhost:5000",
    headers: { 'content-type': 'application/json' },
});

request.interceptors.request.use(function (config) {
    Nprogress.start();
    let token = localStorage.getItem('token')
    if (token) {
        token = "Bearer " + JSON.parse(token)
    }
    if (config.url === '/file/img' || config.url === '/file/imgs') {
        config.headers['Content-Type'] = 'multipart/form-data';
    }

    config.headers.Authorization = token;
    return config;
});

request.interceptors.response.use(function (response) {
    Nprogress.done();
    if (response.data.code !== 200) {
        Vue.prototype.$message.error(response.data.msg)
    }
    if (response.data.code === 401) {
        Vue.prototype.$message.error(response.data.msg)
        setTimeout(() => {
            // 清空本地缓存
            localStorage.clear()
            // Vue.prototype.$route.push('/login')
        }, 1000)

    }
    return response;
});

export default request;
