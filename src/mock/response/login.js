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