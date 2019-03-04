<template>
    <section>
        <el-form :inline="true" :model="form" class="demo-form-inline" label="角色管理">
            <el-form-item label="搜索角色">
                <el-input v-model="form.keyword" placeholder="角色名称"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="success" @click="search">查询</el-button>
                <el-button @click="openAddDialog(0)">新增账号</el-button>
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
                    <!-- <el-button type="text">查看</el-button> -->
                    <el-button type="text" @click="openAddDialog(scope.row.id)">编辑</el-button>
                    <el-switch v-model="scope.row.is_open" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
                </template>
            </el-table-column>
        </el-table>
        <section>
            <el-button>全选</el-button>
            <el-button>反选</el-button>
            <el-button>删除</el-button>
        </section>
        <el-dialog title="账号管理" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
            <el-form :model="adding" class="demo-form-inline" label="角色管理">
            <el-form-item label="角色: ">
                <el-select v-model="adding.user" placeholder="请选择角色">
                    <el-option v-for="item of adding.user_list" :label="item.name" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="账号名: ">
                <el-input v-model="adding.username" placeholder="请输入账户名"></el-input>
            </el-form-item>
            <el-form-item label="密码: ">
                <el-input v-model="adding.password" placeholder="请输入密码"></el-input>
            </el-form-item>
        </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
            </el-dialog>

    </section>
</template>

<script>
    import PageNotice from '../../components/PageNotice.vue';
    import { getRoleList } from '../../http/http.js';
    
    export default {
        data() {
            return {
                dialogVisible: false,
                form: {
                    keyword: ''
                },
                adding: {
                    user: '',
                    user_list: [],
                    username: '',
                    password: ''
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
            },
            openAddDialog(id) {
                this.dialogVisible = true;
                console.log(getRoleList());
                
            },
            handleClose() {
                this.dialogVisible = true;
            }
        },
        components: {
            'page-notice': PageNotice
        }
    }
</script>