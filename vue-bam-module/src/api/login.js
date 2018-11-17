import request from '@/utils/request'

export function login(username, password) {
  //用户输入并传过来的 用户名和密码
  return request({
    url: '/bamUser/login?serverId=back',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/bamUser/info?serverId=back',
    method: 'post',
    data: {
      token
    }
  })
}

export function logout() {
  return request({
    url: '/bamUser/logout?serverId=back',
    method: 'post'
  })
}
