// .vitePress/config.js

import { nav } from './nav';
import { sidebar } from './sidebar';
export default {
    // site-level options
    title: 'Sapling',
    description: '前端、前端分享、js、ts、vitePress、vitepress、node、es6、ES6、js数组、echarts',
    // srcDir: 'src',
    lastUpdated: true, // 更新时间
    cleanUrls: true,
    // base: '/mdocs/',
    lang: 'zh',
    ignoreDeadLinks: true,
    head: [
        [
            'link', { rel: 'icon', href: '/little-tree.ico', crossorigin: '' }
        ],
    ],
    themeConfig: {
        logo: '/little-tree.png',
        nav,
        sidebar,
        lastUpdatedText: '上次更新',
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        outline: {
            level: "deep", // 右侧大纲标题层级
            label: "目录", // 右侧大纲标题文本配置
        },
        returnToTopLabel: '返回顶部',
    },
}