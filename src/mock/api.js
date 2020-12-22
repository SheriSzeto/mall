import Mock from 'mockjs'

Mock.mock('/api/user/login', {
  status: 0,
  data: {
    'id|+1': 1,
    username: '@name',
    email: 'aaa@123.com',
    phone: null,
    role: 0,
    createTime: 1479048325000,
    updateTime: 1479048325000
  }
})
