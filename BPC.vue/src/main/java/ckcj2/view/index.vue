<templete xmlns:NavMenu="">
    <div>
        <NavMenu:msg ="message" type="menu></NavMenu:msg>
        <button @click="clickMe">BusPartnerConfulationSystem</button>
        {{message}}
        <!--绑定路由-->
                  <router-link to="login">登录</router-link>
          <router-link to="/Register/123">注册</router-link>
           <router-link to="/Helloworld">""</router-link>

    </div>
</templete>
<script>

  import NavMenu from "./NavMenu";
  export default{
      name defualt {
      name:"Index",
          data(){
             return{
              message:"BBB",
             }
         },
      methods:{
          clickMe:function(){
              this.message='变了';
          },
          getMsg:function(data){
              console.log(data);
              this.message=data;
             }
          },
      components:{NavMenu:NavMenu},
      beforeCreate() {


           }
      }

  import Helloworld from "./compnnents/helloworld";
import Index from "./components/view/Index"

export defualt{
name:'App',
components:{HelloWorld,index},
}
</script>
</style>












