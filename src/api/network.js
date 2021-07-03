import axios from 'axios'

axios.defaults.baseURL='http://localhost:3000'

// 设置axios请求的超时时间
axios.defaults.timeout=3000

// 封装自己的get、post方法
export default{
  get:function(path='',data={}){
    return new Promise(function(resolve,reject){
      axios.get(path,{
        params:data
      }).then(function(response){
        resolve(response)
      }).catch(function(error){
        reject(error)
      })
    })
  },
  post:function(path='',data={}){
    return new Promise(function(resolve,reject){
      axios.post(path,data).then(function(response){
        resolve(response)
      }).catch(function(error){
        reject(error)
      })
    })
  }
}