<template>
    <div>
        <slot></slot>
        <Menu v-if="!collllapsd" theme ="dark" width='auto' active-name="1-1" :open-names="['1']">
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
        <template v-if="collllapsd" v-for="item in menuList">
            <ReDropDown v-if="item.children" :parent='item' :key="`drop_${item.name}`"></ReDropDown>
            <Tooltip v-else transfer :content="item.title" :key="`drop_${item.name}`" placement="right" @click.native='gotoPath(item.path)'>
                <a class="drop_menu_a">
                    <Icon :type="item.icon"  :size="20" color='#fff'/>
                </a>
            </Tooltip>
        </template>
    </div>
</template>
<script>
import ReDropDown from './RedropDown'
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
    components:{
        ReDropDown
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
            this.$router.push('/'+path)
        }
    }
}
</script>
<style lang="less" scoped>
.top{
    height: 64px;
}
.ivu-menu-item-selected{
    // background: orangered !important;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active:hover{
    //   background: orangered !important;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu), .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu){
    color: #fff;
}
.ivu-tooltip,.drop_menu_a{
     width: 100%;
    display: block;
    text-align: center
}

</style>

