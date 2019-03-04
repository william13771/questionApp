import Mock from 'mockjs'
export const LoginHome = (option) =>{
    const template = {
        code :0,
        data:{
            userName:'mifan'
        }
    }
    return Mock.mock(template)
}
export const getMenuList = (option) => {
    const template = {
        code :0,
        data:[
            {
                title:'会员管理',
                name:"1",
                children:[
                    {
                        title:'会员列表',
                        path:'/member/member-list',
                        name:'1-1'
                    }
                ]
            },
            {
                title:'知识管理',
                name:'2',
                children:[
                    {
                        title:'知识列表',
                        path:'/knowledge/knowledge-list',
                        name:'2-1'
                    }
                ]
            },
            {
                title:'项目管理',
                name:"3",
                children:[
                    {
                        title:'项目列表',
                        path:'/project/project-list',
                        name:'3-1'
                    }
                ]
            },
            {
                title:'专家管理',
                name:"4",
                children:[
                    {
                        title:'专家列表',
                        path:'/expert/expert-list',
                        name:'4-1'
                    }
                ]
            },
            {
                title:'问题管理',
                name:"5",
                children:[
                    {
                        title:'问题列表',
                        path:'/question/question-list',
                        name:'5-1'
                    }
                ]
            },
            {
                title:'权限管理',
                name:"6",
                children:[
                    {
                        title:'角色管理',
                        path:'/permission/user-manager',
                        name:'6-1'
                    },
                    {
                        title:'账户管理',
                        path:'/permission/account-manager',
                        name:'6-2'
                    }
                ]
            }
        ]
    }
    return Mock.mock(template)
}