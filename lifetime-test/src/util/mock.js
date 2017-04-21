import Mock from 'mockjs'
export default Mock.mock('http://g123.cn', {
  'name': '@name',
  'age|1-100': '100',
  'color': '@color'
})