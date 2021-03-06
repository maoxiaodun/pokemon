import axios from 'axios';

const baseHttp = axios.create({
    timeout: 10000
})

export const get = (url, params) => {
    return new Promise((resolve, reject) => {
        baseHttp.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            alert('请求出错');
            reject(err);
            console.log(err)
        })
    });
}