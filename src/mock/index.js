import Mock from 'mockjs'
import { LoginHome } from './response/login'
import { getMenuList } from './response/login'
Mock.mock(/\loginHome/,LoginHome)
Mock.mock(/\getMenuList/,getMenuList)

//
export default Mock