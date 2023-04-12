import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'


module.exports = defineConfig({
    title: 'LCL-UI',
    description: 'LCL-UI 组件库',
    plugins: [
        require('@vitejs/plugin-vue')
    ],
    base:'/lcl-ui/',
    // head,
    // markdown,
    markdown: {
        // headers: {
        //     level: [0, 0]
        // },
        // // options for markdown-it-anchor
        // anchor: { permalink: false },
        // // options for markdown-it-toc
        // toc: { includeLevel: [1, 2] },
        // // light: #f9fafb, dark: --vp-code-block-bg
        // theme: { light: 'github-light' },
        config: (md) => {
            md.use(demoBlockPlugin, {
                cssPreprocessor: 'scss'
            })
        }
    },
    locales: {
        '/': {
            lang: 'zh-CN',
            label: '简体中文'
        },
        '/en-US': {
            lang: 'en-US',
            label: 'English'
        }
    },
    themeConfig: {
        sidebar: [
            {
                text: "Button 按钮",    //标签名字
                link: "/components/button",         //链接
                // collapsible: true,    //是不是可以动态展开
                // collapsed: true,      //默认是不是展开
                // items: [],
            },
            {
                text: "Input 输入框",    //标签名字
                link: "/components/input",
            },
            {
                text: "Message 消息提示",    //标签名字
                link: "/components/message",
            },
            // {
            //     text: "ConfirmDialog 删除确认框",    //确认删除框
            //     link: "/components/confirmDialog",
            // },
        ],
        nav: [
            { text: '首页', link: '/' },
            { text: '指南', link: '/components/guide' },
            { text: '组件', link: '/components/index' },
        ],
        socialLinks: [{ icon: "github", link: "https://github.com/codernmx/lcl-ui" }], //右上角guthib 
        // demoblock: lang,
        logo: 'home.jpg',
        locales: {
            '/': {
                lang: 'zh-CN',
                label: '简体中文'
            },
            '/en-US': {
                lang: 'en-US',
                label: 'English'
            }
        },
        algolia: {
            appId: 'HOQD3NUZNM',
            apiKey: '07456b4a262e8c84eb892088e5cc3791',
            indexName: 'vue-devui'
        }
    }
})
