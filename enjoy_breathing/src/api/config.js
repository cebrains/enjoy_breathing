


var config = {
    // serverBaseUrl: "http://model.rxthinking.com/restapi/",
    serverBaseUrl: "http://192.168.1.240:8090/",
    // serverBaseUrl: "http://localhost:8080/",
    isDebug: false, //  是否是调试模式，true 为json数据，false为服务器数据
    url: {}, //  url链接,也就是数据的地址
    showLog: false, // 是否显示日志
  
    //reqMaxTimes: 30,//最大请求次数
    // reqMaxMs: 200,//最大请求一次毫秒数,
    reqMaxTimes: 10,//最大请求次数
    reqMaxMs: 500,//最大请求一次毫秒数,
  
};
config.serverBaseUrl = config.isDebug ? 'http://localhost:8080/' : 'http://192.168.1.240:8090/';
var serverUrl = {
    resPath: config.serverBaseUrl + 'api/res/',
    register: '/register',          //注册
    login: 'login',       //登录
    logout: 'logOut',    //登出
    change_pwd: '/changePwd',    // 修改密码
    forget_pwd: '/forgetPwd',    // 忘记密码
    commonUrl: 'api/req/v1/respiratory',
};
config.url = serverUrl;
export default config;