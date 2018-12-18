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
                icon:'logo-nodejs',
                name:"1",
                path:'index',
                children:[
                    {
                        title:'文章管理',
                        path:'/layout/index',
                        name:'1-1'
                    },
                    {
                        title:'评论管理',
                        path:'/layout/login',
                        name:'1-2'
                    },
                    {
                        title:'举报管理',
                        path:'/layout/question',
                        name:'1-3'
                    }
                ]
            },
            {
                title:'系统设置',
                icon:'ios-settings',
                name:'2'
            },
            {
                title:'项目管理',
                icon:'logo-angular',
                name:"3",
                path:'index',
                children:[
                    {
                        title:'文章管理',
                        path:'index',
                        name:'3-1'
                    },
                    {
                        title:'评论管理',
                        path:'index',
                        name:'3-2'
                    },
                    {
                        title:'举报管理',
                        path:'index',
                        name:'3-3'
                    }
                ]
            },
        ]
    }
    return Mock.mock(template)
}