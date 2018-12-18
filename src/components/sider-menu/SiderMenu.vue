<template>
    <div class="siderMenu">
        <slot></slot>
        <Menu v-show="!collllapsd" theme="dark" width='auto'>
            <template v-for="(item,index) in menuList">
                <Submenu :name="item.name" v-if="item.children">
                    <template slot="title">
                        <Icon :type="item.icon" size='20'/>
                        {{item.title}}
                    </template>
                    <MenuItem v-for="(subItem,indexs) in item.children" :name="subItem.name" :to="subItem.path">{{subItem.title}}</MenuItem>
                </Submenu>
                 <MenuItem v-else  :name="item.name" :to="item.path">
                       <Icon :type="item.icon" size='20' />
                       {{item.title}}
                 </MenuItem>
            </template>
        </Menu>
        <template v-if="collllapsd" v-for="item in menuList">
            <Dropdown v-if="item.children" placement='right-start'>
                <a href="javascript:void(0)">
                    <Icon :type="item.icon" size='30' color='#fff'/>
                </a>
                <DropdownMenu slot="list">
                    <DropdownItem v-for="subItem in item.children">{{subItem.title}}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Tooltip v-else :content="item.title" placement='right'>
                  <Icon :type="item.icon" size='30' color='#fff'/>
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
        }
    }
}
</script>
<style lang="less" scoped>
@import url('./siderMenu.less');
</style>

