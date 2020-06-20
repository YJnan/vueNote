module.mexports = {
  title: 'vue源码解析',
  head: [ //注入当前页的HTML<header>中的标签
    ['link', { rel: 'icon', href:'/xxx.ping' }]  //自定义favicon
  ],
  themeConfig:{
    logo:'',  //左上角logo
    nav: [  //导航栏配置
      {text:'首页', link: '/'},
      {text:'vue2.X', link: '/old'},
      {text:'vue3.0', link: '/new'},
    ],
    sidebar: 'auto', //侧边栏配置
  }
}