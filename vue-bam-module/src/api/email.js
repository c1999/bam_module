import request from '@/utils/request'

export function emailList() {
    return request({
        url: '/email/emailList?serverId=back',
        method: 'post',
    })
}

export function getPassword(server_id) {
    return request({
        url: '/email/getPassword?serverId=back',
        method: 'post',
        data: {
            server_id,
        }
    })
}

export function addEmail(server_id) {
    return request({
        url: '/email/addEmail?serverId=back',
        method: 'post',
        data: {
            server_id,
        }
    })
}