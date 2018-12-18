<template>
    <div class="layout-wrapper">
        <Layout class="layout-wrapper-layout">
            <Sider collapsible v-model='isCollapsible'  hide-trigger breakpoint='md'>
                <SiderMenu :collllapsd='isCollapsible' :menuList='menuList'>
                    <div v-if="!isCollapsible" class="logo_text">问哈哈后台</div>
                    <div v-else class="logo_text">问</div>
                </SiderMenu>
            </Sider>
            <Layout>
                <Header class="layout-header">
                    <Icon :class="tranClass" @click.native="handleCollapsible" type="md-menu" size="30" />
                </Header>
                <Content class="content-wrapper">
                    <Card shadow class="content-card">
                        <!-- //  -->
                        <router-view/>
                    </Card>
                </Content>
                <!-- <Footer>Footer</Footer> -->
            </Layout>
        </Layout>
    </div>
</template>
<script>
import SiderMenu from '../../components/sider-menu'
import axios from 'axios'
export default {
    components:{
        SiderMenu
    },
    data(){
        return {
            isCollapsible:false,
            menuList:[]
        }
    },
    mounted(){
       this.getMenuList()
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
        },
        getMenuList(){
            axios.get('/getMenuList').then( res =>{
                console.log(res)
                this.menuList = res.data.data
            })
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
    .content-wrapper{
        padding: 10px;  
        .content-card{
            min-height:  calc(~"100vh - 84px");
        }
    }
    .logo_text{
        height: 64px;
        color: #fff;
        text-align: center;
        line-height: 64px;
        font-size: 30px;
        // background: orangered;
    }
    
}

</style>


