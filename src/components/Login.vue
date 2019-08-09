<template>
    <div>
    <!--End Header End-->
    <!--Begin Login Begin-->
    <div class="log_bg">
        <div class="top">
            <div class="logo"><a href="Index.html"><img src="../assets/images/logo.png" /></a></div>
        </div>
        <div class="login">
            <div class="log_img"><img src="../assets/images/l_img.png" width="611" height="425" /></div>
            <div class="log_c">
                <form>
                    <table border="0" style="width:370px; font-size:14px; margin-top:30px;" cellspacing="0" cellpadding="0">
                        <tr height="50" valign="top">
                            <td width="55">&nbsp;</td>
                            <td>
                                <span class="fl" style="font-size:24px;">登录</span>
                                <span class="fr">还没有商城账号，<a href="Regist.html" style="color:#ff4e00;">立即注册</a></span>
                            </td>
                        </tr>
                        <tr height="70">
                            <td>用户名</td>
                            <td><input type="text" value="" class="l_user" v-model="name"/></td>
                        </tr>
                        <tr height="70">
                            <td>密&nbsp; &nbsp; 码</td>
                            <td><input type="password" value="" class="l_pwd"  v-model="password"/></td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td style="font-size:12px; padding-top:20px;">
                	<span style="font-family:'宋体';" class="fl">
                    	<label class="r_rad"><input type="checkbox" /></label><label class="r_txt">请保存我这次的登录信息</label>
                    </span>
                                <span class="fr"><a href="#" style="color:#ff4e00;">忘记密码</a></span>
                            </td>
                        </tr>
                        <tr height="60">
                            <td>&nbsp;</td>
                            <td><input type="button" value="登录" class="log_btn"  @click="login"
                            /></td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    </div>
    </div>
</template>

<script>

    export default {
        name: "Login",
        data () {
            return {
                // info:{
                    name:'',
                    password:''
                // }
            }
        },
        methods: {
          login() {
              // var re_name=this.name
              // var re_password=this.password
              // console.log(this.name)
              // console.log(this.password)
            let _this=this
            axios.post(this.url+'login',{
                name:this.name,
                password:this.password
            })
              .then(function (response) {
                // console.log(response.data.access_token)
                  localStorage.setItem("token", response.data.access_token);
                  localStorage.setItem("name", response.data.name);
                  localStorage.setItem("id", response.data.id);
                if (response.data.status=='success') {
                  _this.$router.push({path:'/Index'})
                }else{
                  alert(response.data.text)
                }
              })
              .catch(function (error) { // 请求失败处理
                console.log(error);
              });
          }
        }
        // mounted () {
            // var _this=this

        // }
    }

</script>

<style scoped>

</style>
