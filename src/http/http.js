import axios from 'axios';
const base_url = 'http://sc.judeng.org.cn';
const token = '184c7b39c128e69a00ac4226698255503b043619';
axios.interceptors.request.use(
    config => {
        debugger
        if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.token = token;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
});
export function getRoleList(params) {
    new Promise((resolve, reject) => {
        debugger
        axios.get(base_url + '/admin/role', { params: params })
        .then(res => {
            debugger
            if (res.code === 200) {
                resolve(res.data);
            }
        });
    })
}