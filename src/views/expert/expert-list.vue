<template>
    <section>
        <el-form :inline="true" :model="form" class="demo-form-inline" label="所有专家">
            <el-form-item label="搜索专家">
                <el-input v-model="form.title" placeholder="专家名称"></el-input>
            </el-form-item>
            <el-form-item>
                <el-select v-model="form.industry" placeholder="选择行业">
                    <el-option v-for="(item, index) of form.industry_list" :key="index" :label="item.name" :value="item.name"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="success" @click="search">查询</el-button>
            </el-form-item>
        </el-form>
        <page-notice :total="page_list.total" :pageSize="page_list.pageSize" :pageCount="page_list.pageCount"></page-notice>
        <el-table :data="table_data" border style="width: 100%">
            <el-table-column align="center" type="index" label="序号">
            </el-table-column>
            <el-table-column align="center" label="头像">
                <template slot-scope="scope">
                    <img :src="scope.row.avatar_url" alt="头像"></img>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="name" label="姓名">
            </el-table-column>
            <el-table-column align="center" prop="introduce" label="专家介绍">
            </el-table-column>
            <el-table-column align="center" prop="industry" label="行业">
            </el-table-column>
            <el-table-column align="center" prop="add_time" label="添加时间">
            </el-table-column>
            <el-table-column align="center" label="状态">
                <template slot-scope="scope">
                    <span>{{ scope.row.status_text }}</span>
                </template>
            </el-table-column>
            <el-table-column align="center" label="操作">
                <template slot-scope="scope">
                    <div>
                        <el-button type="text" style="color: #606266;">查看</el-button>
                        <el-button type="text">编辑</el-button>
                        <el-button type="text" style="color: red;">审核</el-button>
                    </div>
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
                    title: '',
                    industry: '',
                    industry_list: [{
                        name: '虞小鱼'
                    }]
                },
                page_list: {
                    total: 20,
                    pageSize: 15,
                    pageCount: 2
                },
                table_data: [{
                    avatar_url: '',
                    name: '测试1',
                    introduce: '畜牧',
                    industry: '虞小鱼',
                    add_time: '2019-2-27',
                    status_text: '待审核'
                }]
            }
        },
        methods: {
            search() {
                console.log(this.form.industry);
            }
        },
        components: {
            'page-notice': PageNotice
        }
    }
</script>