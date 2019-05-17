import Vue from 'vue'
const requireComponent = require.context('.', true, /\.vue$/)
requireComponent.keys().forEach(filename => {
  //获取组件配置
  const componentConfig = requireComponent(filename);

  //截取出组件名称
  filename = filename.replace(/^\.\//,'').replace(/.vue$/,'')

  //全局注册组件
  Vue.component(filename, componentConfig.default || componentConfig)
});
