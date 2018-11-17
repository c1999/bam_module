import request from '@/utils/request'

export function accountList() {
    return request({
        url: '/account/accountList?serverId=back',
        method: 'post',
    })
}

export function getPassword(server_id) {
    return request({
        url: '/account/getPassword?serverId=back',
        method: 'post',
        data: {
            server_id,
        }
    })
}

export function addAccount(server_id) {
    return request({
        url: '/account/addAccount?serverId=back',
        method: 'post',
        data: {
            server_id,
        }
    })
}