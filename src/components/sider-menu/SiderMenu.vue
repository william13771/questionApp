<template>
    <div>
        <slot class="top">11111</slot>
        <Menu theme ="dark" width='auto' active-name="1-1" :open-names="['1']">
            <template v-for='(item,index) in menuList'>
                <Submenu v-if="item.children" :key="index" :name='item.name'>
                     <template slot="title">
                        <Icon :type="item.icon" />
                        {{item.title}}
                    </template>
                     <MenuItem v-for="subItem in item.children" :key="`menu_${subItem.name}`" :name='subItem.name' :to='`/layout/${subItem.path}`'>
                        {{subItem.title}}
                     </MenuItem>
                </Submenu>
                <MenuItem  v-else :key="index" :name='item.name' @click.native="gotoPath(item.path)">
                      <Icon :type="item.icon" />
                      {{item.title}}
                </MenuItem>
            </template>
        </Menu>
    </div>
</template>
<script>
export default {
    //

    name:'SiderMenu',
    props:{
        collllapsd:{
            type:Boolean,
            default:false
        },
        menuList:{
            type:Array,
            default:() => []
        }
    },
    data(){
        return{
            light:'light'
        }
    },
    mounted(){
        console.log(this.collllapsd)
    },
    methods:{
        gotoPath(path){
            console.log(path)
            this.$router.push(path)
        }
    }
}
</script>
<style lang="less" scoped>
.top{
    height: 64px;
}
.ivu-menu-item-selected{
    background: orangered !important;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active:hover{
      background: orangered !important;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu), .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu){
    color: #fff;
}
</style>

