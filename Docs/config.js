module.exports = {
  title: '『长路漫漫 唯剑作伴』',  // 设置网站标题
  description : '为了那些已经迷失的人...',
  base : '/Docs',
  // themeConfig : {
  //   nav : [
  //     { text: '接口定义', link: '/apiword' },
  //     { text: '接口字段定义', link: '/api' },
  //     { text: '附录：错误码', link: '/error' }
  //   ],
  //   sidebar: {
  //     '/' : [
  //       "/", // 指的是根目录的md文件 也就是 README.md 里面的内容
  //       "apiword",  // 根目录创建 apiword.md文件
  //       "api", // 根目录创建 api.md文件
  //       "error" // 根目录创建 error.md文件
  //     ]
  //   },
  //   sidebarDepth : 2
  // }
  themeConfig: {
    repoLabel: 'github',
    // editLinks: true,
    docsDir: 'docs',
    //获取最后一次提交博客时间
    lastUpdated: true, // 最后更新时间
    displayAllHeaders: true, // 默认值：false
    // selectText: '选择语言',
    // editLinkText: '编辑此页',
    // lastUpdated: '上次更新',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        lastUpdated: '上次更新',
        nav: [
          {
            text: '首页',
            link: '/home/home'
            // items: [
            //   { text: 'html&css', link: '/index/html-css/css.md' },
            //   { text: 'javascript', link: '/index/javascript/javascript.md' },
            //   { text: 'nodejs', link: '/index/nodejs/nodejs.md' },
            //   { text: '其它', link: '/index/others/rap2.md' }
            // ]
          },
          {
            text: '笔记本',
            link: '/notes/notes'
          },
          {
            text: '大杂烩',
            link: '/practice/practice.md'
          },
          {
            text: '个人',
            link: ''
          },
          {
            text: 'github',
            link: 'https://github.com/original0413'
          }
        ],
      },
    },
  }
}