module.exports = {
  title: '劲松',
  description: '劲松的blog，前端技术、vue、react、node等',
  themeConfig: {// 主题设置
    nav: [// 导航栏
      {
        text: '首页',
        link: '/'
      },
      {
        text: '浏览器',
        link: '/guide/browser/'
      },
      // {
      //   text: 'Vue',
      //   link: '/guide/vue/'
      //   // items: [
      //   //   { text: '笔记', link: '/guide/foo/one' }, // 可不写后缀 .md
      //   //   { text: '其它链接', link: 'https://www.baidu.com/' }// 外部链接
      //   // ]
      // },
      // {
      //   text: 'Typescript 学习笔记',
      //   items: [
      //     { text: '笔记', link: '/guide/bar/' },// 以 ‘/’结束，默认读取 README.md
      //     { text: '其它链接', link: 'https://www.baidu.com/' } // 外部链接
      //   ]
      // }
    ],
    sidebar: {//左侧列表
      '/guide/browser/': ['browser_request_limit'],
      // '/guide/foo/': [
      //   {
      //     title: 'Typescript 学习',
      //     collapsable: true,
      //     children: ['one', 'two']
      //   }
      // ],
      // '/': [''] //不能放在数组第一个，否则会导致右侧栏无法使用 
    }
  }
}