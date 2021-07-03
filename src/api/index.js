// 存放专门用于管理请求的各种接口地址
import Network from './network';

export const getBanner = ()=>{
  return Network.get(path:'banner?type=2',{})
}