<template>
    <section>
        <el-form :inline="true" :model="form" class="demo-form-inline" label="搜索会员">
            <el-form-item label="审批人">
                <el-input v-model="form.keyword" placeholder="会员名称/手机号"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="success" @click="search">查询</el-button>
            </el-form-item>
        </el-form>
        <page-notice :total="page_list.total" :pageSize="page_list.pageSize" :pageCount="page_list.pageCount"></page-notice>
        <el-table :data="table_data" border style="width: 100%">
            <el-table-column align="center" type="index" label="序号">
            </el-table-column>
            <el-table-column align="center" label="会员头像">
                <template slot-scope="scope">
                    <img :src="scope.row.avatar_url" alt="头像">
                </template>
            </el-table-column>
            <el-table-column align="center" prop="name" label="会员名称">
            </el-table-column>
            <el-table-column align="center" prop="level" label="会员等级">
            </el-table-column>
            <el-table-column align="center" prop="register_time" label="注册时间">
            </el-table-column>
            <el-table-column align="center" label="操作">
                <template slot-scope="scope">
                    <el-button type="text" style="color: #606266;">查看</el-button>
                    <el-button type="text">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </section>
</template>

<script>
    import PageNotice from '../../components/PageNotice.vue';
    export default {
        data() {
            return {
                form: {
                    keyword: ''
                },
                page_list: {
                    total: 20,
                    pageSize: 15,
                    pageCount: 2
                },
                table_data: [
                    {
                        avatar_url: '',
                        name: '虞小鱼',
                        level: '1',
                        register_time: '2019-2-27'
                    }
                ]
            }
        },
        methods: {
            search() {
                console.log('submit!');
            }
        },
        components: {
            'page-notice': PageNotice
        }
    }
</script>