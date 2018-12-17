<template>
    <div>
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
    </div>
</template>
<script>
export default {
    name: 'Layout',
    mounted(){
        vaptcha({
            //配置参数
            vid: '5c175515fc650fc918f9a5e6', // 验证单元id
            type: 'click', // 展现类型 点击式
            container: '#vaptchaContainer' // 按钮容器，可为Element 或者 selector
        }).then(function (vaptchaObj) {
            vaptchaObj.render()// 调用验证实例 vaptchaObj 的 render 方法加载验证按钮
        })
    }
}
</script>
