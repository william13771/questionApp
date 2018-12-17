export const baseUrl = process.env.NODE_ENV === 'production'
    ? 'www.baidu.com'  // 正式环境
    : 'www.test.com'   // 生产环境