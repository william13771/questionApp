import Mock from 'mockjs'
import { LoginHome } from './response/login'
Mock.mock(/\loginHome/,LoginHome)

//
export default Mock