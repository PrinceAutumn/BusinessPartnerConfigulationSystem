import request from '@/utils/request'
export function login(name,password) {
    return request({
        url: '/XX/XX',
        method: 'post',
        data: {
            name,
            password
        }
    })}
