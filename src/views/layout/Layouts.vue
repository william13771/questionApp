<template>
    <div class="layout-wrapper">
        <Layout class="layout-wrapper-layout">
            <Sider collapsible v-model='isCollapsible'  hide-trigger></Sider>
            <Layout>
                <Header class="layout-header">
                    <Icon :class="tranClass" @click.native="handleCollapsible" type="md-menu" size="30" />
                </Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isCollapsible:false
        }
    },
    mounted(){
       
    },
    computed:{
        tranClass(){
            return[
                'tranCollIcon',
                this.isCollapsible? 'rotate':''
            ]
        }
    },
    methods:{
        handleCollapsible(){
            this.isCollapsible = !this.isCollapsible
        }
    }
}
</script>

<style lang="less" scoped>
.layout-wrapper,.layout-wrapper-layout{
    height: 100%;
    .layout-header{
        background: #fff;
        box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, .1);
        padding: 0 20px;
        .tranCollIcon{
            cursor: pointer;
            transition: transform .3s ease;
            &.rotate{
                transform: rotateZ(-90deg);
                transition: transform .3s ease;
            }
        }
    }
    
}

</style>


