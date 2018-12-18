<template>
    <div class="redrop_down">
        <Dropdown placement='right-start'>
             <a href="javascript:void(0)" class="drop_menu_a" >
                <Icon :type="parent.icon" :size='20' ></Icon>
            </a>
            <DropdownMenu slot="list" style="width:150px">
                <template v-for="item in parent.children">
                    <ReDropDown v-if="item.children" :parent='item' :key="`drop_${item.name}`"></ReDropDown>
                    <DropdownItem v-else :key="`drop_${item.name}`" :name='item.name' @click.native='gotoPath(item.path)'>{{item.title}}</DropdownItem>
                </template>
            </DropdownMenu>
        </Dropdown> 
    </div>
</template>

<script>
    export default {
        name: 'ReDropDown',
        props:{
            parent:{
                type:Object,
                default:() => ({})
            }
        },
        data() {
            return {
                
            }
        },
        methods:{
            gotoPath(path){
                console.log(path)
                this.$router.push(path)
            }
        }
    }
</script>

<style lang="less" >
.redrop_down{
    .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu), .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu){
        color: #fff;
    }
    .ivu-dropdown{
        // width: 150px !important;
    }
    .ivu-dropdown,.drop_menu_a{
        // width: 100%;
        display: block;
        text-align: center;
        color: #fff;
        height: 50px;
        line-height: 50px;
    }
    .ivu-select-dropdown{
        // width: 150px;
    }
}


</style>