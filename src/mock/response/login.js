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
                title:'编程语言',
                icon:'logo-angular',
                name:"1",
                path:'index',
                children:[
                    {
                        title:'Python',
                        path:'index',
                        name:"1-1", 
                    },
                    {
                        title:'Java',
                        path:'index',
                        name:"1-2", 
                    }
                ]
            },
            {
                title:'系统设置',
                icon:'ios-settings',
                name:"2",
                path:'login',
            }
        ]
    }
    return Mock.mock(template)
}