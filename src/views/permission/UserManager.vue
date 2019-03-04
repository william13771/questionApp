<template>
    <section>
        <el-form :inline="true" :model="form" class="demo-form-inline" label="角色管理">
            <el-form-item label="搜索角色">
                <el-input v-model="form.keyword" placeholder="角色名称"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="success" @click="search">查询</el-button>
            </el-form-item>
        </el-form>
        <page-notice :total="page_list.total" :pageSize="page_list.pageSize" :pageCount="page_list.pageCount"></page-notice>
        <el-table :data="table_data" border style="width: 100%">
            <el-table-column align="center" type="index" label="序号">
            </el-table-column>
            <el-table-column align="center" prop="name" label="角色名称">
            </el-table-column>
            <el-table-column align="center" prop="describe" label="角色描述">
            </el-table-column>
            <el-table-column align="center" prop="add_time" label="角色添加时间">
            </el-table-column>
            <el-table-column align="center" prop="status" label="角色状态">
            </el-table-column>
            <el-table-column align="center" label="操作">
                <template slot-scope="scope">
                    <el-switch v-model="scope.row.is_open" active-color="#13ce66" inactive-color="#ff4949"></el-switch>&nbsp;&nbsp;&nbsp;
                    <el-button type="text">权限</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-button>全选</el-button>
        <el-button>反选</el-button>
        <el-button>删除</el-button>
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
                table_data: [{
                    name: '虞小鱼',
                    describe: '会员',
                    add_time: '2019-2-27',
                    status: '在线'
                }]
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