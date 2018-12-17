<template>
    <div id="login">
        <div class="warpper">
            <div class="login_box">
                 <Form :model="formItem" :label-width="50" :rules="ruleItem" ref="formItem">
                     <FormItem label="用户名" prop="userName">
                        <Input v-model="formItem.userName" placeholder="请输入用户名">
                        </Input>
                    </FormItem>

                     <FormItem label="密码" prop="pass">
                        <Input v-model="formItem.pass" type="password" placeholder="请输入用户名">
                        </Input>
                    </FormItem>
                 
                    <div id="vaptchaContainer" style="width: 300px;height: 36px;">
                        <div class="vaptcha-init-main">
                            <div class="vaptcha-init-loading">
                                <a href="/" target="_blank">
                                    <img src="https://cdn.vaptcha.com/vaptcha-loading.gif" />
                                </a>
                                <span class="vaptcha-text">Vaptcha启动中...</span>
                            </div>
                        </div>
                    </div>

                    <!-- <FormItem label="密码"> -->
                    <Button class="login_btn" type="primary" :disabled="loginBtnSate" @click="submitLogin('formItem')">登录</Button>
                    <!-- </FormItem> -->
                 </Form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
    
    data(){
        // 验证规则
        const validateUserName = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('用户名不能为空'));
                } else {
                    callback();
                }
        };
         const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('密码不能为空'));
                } else {
                    callback();
                }
        };
        return{
            formItem:{
                userName:'',
                pass:''
            },
            ruleItem:{
                userName:[ { validator: validateUserName, trigger: 'blur' }],
                pass:[ { validator: validatePass, trigger: 'blur' }]
            },
            loginBtnSate:true
        }
    },
    mounted(){
        let _this  = this
        vaptcha({
            //配置参数
            vid: '5c175515fc650fc918f9a5e6', // 验证单元id
            type: 'click', // 展现类型 点击式
            container: '#vaptchaContainer' // 按钮容器，可为Element 或者 selector
        }).then(function (vaptchaObj) {
            vaptchaObj.listen('pass', function() {
                _this.loginBtnSate = false
            })
            vaptchaObj.render()// 调用验证实例 vaptchaObj 的 render 方法加载验证按钮
        })
    },
    methods:{
        // 验证
        submitLogin (name) {
            this.$refs[name].validate( (valid) =>{
                   if (valid) {
                        this.loginMain()
                   }else{
                        this.$Message.error('输入有误!');
                        return false
                   }
            })
        },
        // 登录
        loginMain(){
            // this.$router.push('/layout')
        }
    }
}
</script>
<style lang="less" >
@import url('./login.less');
</style>

