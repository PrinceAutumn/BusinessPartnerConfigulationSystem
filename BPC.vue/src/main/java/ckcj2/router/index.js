import Vue from 'vue'
import  Login from "../components/view/Login";
import  Rounter from '...vue-router'
import AdminIndex from '../home/AdminIndex'
const path=require('path')
module.exports={
  dev:{
    assertsSubDiresctory:'static',
    assertPublicPath:'/'
  }
}



Vue.use(VueResource)

let childen
const routers=[

    {path:'/login',name:login,component:login},
    {path:'/Register',name:Register,component:Register},
    {path:'/Home',name:'Index',component:Index},
    {path:"/Register",name:'Reister',component:Register },
    {path:"/Admin",name:'Admin',component:AdminIndex,}
     childen:
    {path:'/UserM',name:"UserM",component:()=>import('../components/home/UserManager')};

}
    export default new Router (options:{
{
    mode:"history",
   routes: routers,

}
};





















