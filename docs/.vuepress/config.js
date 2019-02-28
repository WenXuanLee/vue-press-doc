const rootFolder = './docs/'
const fs = require('fs')

let sidebarConfig = []
// crawl the dir to build sidebar. by 小董
fs.readdirSync(rootFolder).forEach((file) => {
  if(fs.lstatSync(rootFolder + file).isDirectory()) {
    if(file === '.vuepress') {
      return
    }
    let childrenTem = []
    fs.readdirSync(rootFolder + file).forEach((mdFile) => {
      if(mdFile == "README.md") {
        childrenTem.push(`/${file}/`);
      }else {
        childrenTem.push(`/${file}/${mdFile.replace(".md", "")}`)
      }
    })
    sidebarConfig.push({ "title": file, children: childrenTem })
  } else {
    file !== "README.md" && sidebarConfig.push(file.replace(".md", ""))
  }
})
// .vuepress/config.js
module.exports = {
    themeConfig: {
      docsDir: "docs",
      serviceWorker: {
        updarePopup: true
      },
      logo: '/assets/img/logo.png',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        {
            text: 'Docs',
            items: [
                { text: '結帳頁', link: '/doc/' },
                { text: '購物車', link: '/doc/' }
            ]
        }
      ],
      sidebar: sidebarConfig
/*       [
        {
          title: '新人教學文件',
          collapsable: false,
          children: [
            '/guide/',
            '/guide/testGuide'
          ]
        },
        {
          title: 'Page Docs',
          collapsable: false,
          children: [
              '/doc/',
              '/doc/結帳頁文件',
           ]
        }
      ] */
    }
  }