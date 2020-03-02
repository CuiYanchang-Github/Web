import request from '@/utils/request'

export function addStudent(data) {
  return request({
    url: '/student/add',
    method: 'post',//提交数据用post
    data
  })
}

export function getStudent(params) {
  return request({
    url: '/student/list',
    method: 'get',//请求数据用get
    params
  })
}