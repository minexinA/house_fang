//1.导入axios的依赖包
import axios from 'axios';

//2.创建axios对象信息
const Server = axios.create({
    baseURL:"",
    timeout:5000,
})

//3.定义前置拦截器。token值。。。
Server.interceptors.request.use(function(config){
    return config
},function(error){
    return Promise.reject(error)
})

//4.定义后置拦截器，格式化返回的数据
Server.interceptors.response.use(function(response){
    console.log("相应拦截器:",response);
    //对数据进行格式化的操作了。
    return response.data;
}, function(error){
    return Promise.reject(error)
})


// 5. 抛出对象，main.js中引入拦截器的信息。
export default Server;