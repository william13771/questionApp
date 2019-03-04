<template>
    <p>共 <span class="number-color" v-text="total"></span> 条数据，每页展示 <span class="number-color" v-text="pageSize"></span> 条，共 <span class="number-color" v-text="pageCount"></span> 页</p>
</template>

<script>
    export default {
        props: {
            total: {
                default: Number
            },
            pageSize: {
                default: 15,
                type: Number
            },
            pageCount: {
                default: Number
            },
        },
        data() {
            return {
    
            }
        }
    }
</script>

<style lang="less" scoped>
    .number-color {
        color: #f8584a;
    }
</style>
