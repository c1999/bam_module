import request from '@/utils/request'

export function serverList() {
  return request({
    url: '/server/serverList?serverId=back',
    method: 'post',
  })
}

export function getPassword(server_id) {
  return request({
    url: '/server/getPassword?serverId=back',
    method: 'post',
    data: {
      server_id,
    }
  })
}

export function addServer(server_id) {
  return request({
    url: '/server/addServer?serverId=back',
    method: 'post',
    data: {
      server_id,
    }
  })
}