<template>
    <el-tabs v-model="activeName" @tab-click="changeTab">
        <el-tab-pane label="问我的" name="1">
            <section>
                <el-form :inline="true" :model="form1" class="demo-form-inline">
                    <el-form-item label="选择行业">
                        <el-select v-model="form1.industry" placeholder="选择行业">
                            <el-option v-for="(item, index) of form1.industry_list" :key="index" :label="item.name" :value="item.name"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="success" @click="search(1)">查询</el-button>
                    </el-form-item>
                </el-form>
                <page-notice :total="page_list1.total" :pageSize="page_list1.pageSize" :pageCount="page_list1.pageCount"></page-notice>
                <el-table :data="table_data1" border style="width: 100%">
                    <el-table-column align="center" type="index" label="序号">
                    </el-table-column>
                    <el-table-column align="center" prop="content" label="问题内容">
                    </el-table-column>
                    <el-table-column align="center" prop="industry" label="行业">
                    </el-table-column>
                    <el-table-column align="center" prop="questioner" label="提问人">
                    </el-table-column>
                    <el-table-column align="center" prop="expert_name" label="专家名">
                    </el-table-column>
                    <el-table-column align="center" label="问题状态">
                        <template slot-scope="scope">
                            <span>{{ scope.row.status_text }}</span>
                        </template>
                    </el-table-column>
                     <el-table-column align="center" prop="question_time" label="提问时间">
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
        </el-tab-pane>
        <el-tab-pane label="公共问题" name="2">
            <section>
                <el-form :inline="true" :model="form2" class="demo-form-inline">
                    <el-form-item label="选择行业">
                        <el-select v-model="form2.industry" placeholder="所有行业">
                            <el-option v-for="(item, index) of form2.industry_list" :key="index" :label="item.name" :value="item.name"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="success" @click="search(2)">查询</el-button>
                    </el-form-item>
                </el-form>
                <page-notice :total="page_list2.total" :pageSize="page_list2.pageSize" :pageCount="page_list2.pageCount"></page-notice>
                <el-table :data="table_data2" border style="width: 100%">
                    <el-table-column align="center" type="index" label="序号">
                    </el-table-column>
                    <el-table-column align="center" prop="content" label="问题内容">
                    </el-table-column>
                    <el-table-column align="center" prop="industry" label="行业">
                    </el-table-column>
                    <el-table-column align="center" prop="questioner" label="提问人">
                    </el-table-column>
                    <el-table-column align="center" prop="expert_name" label="专家名">
                    </el-table-column>
                    <el-table-column align="center" label="问题状态">
                        <template slot-scope="scope">
                            <span>{{ scope.row.status_text }}</span>
                        </template>
                    </el-table-column>
                     <el-table-column align="center" prop="question_time" label="提问时间">
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
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    import PageNotice from '../../components/PageNotice.vue';
    export default {
        data() {
            return {
                activeName: '1',
                form1: {
                    industry: '',
                    industry_list: [{
                        name: '虞小鱼'
                    }]
                },
                form2: {
                    industry: '',
                    industry_list: [{
                        name: '虞小鱼'
                    }]
                },
                page_list1: {
                    total: 20,
                    pageSize: 15,
                    pageCount: 2
                },
                page_list2: {
                    total: 20,
                    pageSize: 15,
                    pageCount: 2
                },
                table_data1: [{
                    content: '测试1',
                    industry: '畜牧',
                    questioner: '虞小鱼',
                    expert_name: '2019-2-27',
                    status_text: '待审核',
                    question_time: '2019-2-27'
                }],
                table_data2: [{
                    content: '测试2',
                    industry: '畜牧',
                    questioner: '虞小鱼',
                    expert_name: '2019-2-27',
                    status_text: '待审核',
                    question_time: '2019-2-27'
                }]
            };
        },
        methods: {
            changeTab(tab, event) {
                console.log(tab, event);
            },
            search(index) {

            }
        },
        components: {
            'page-notice': PageNotice
        }
    }
</script>