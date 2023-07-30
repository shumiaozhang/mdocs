// .vitepress/config.js
export default {
    // site-level options
    title: 'VitePress',
    description: 'Just playing around.',
    srcDir: 'src',
    lastUpdated: true,

    themeConfig: {
        // theme-level options
        // siteTitle: 'My Custom Title',
        nav: [
            {
                text: 'a文件夹',
                link: '/a/'
            }
        ],
        // sidebar: [
        //     {
        //         text: '',
        //         items: [
        //             {
        //                 text: '阿斯蒂芬',
        //                 link: '/b/a'
        //             }
        //         ]
        //     }
        // ],
        sidebar: {
            '/a/': [
                {
                    text: 'a文件夹',
                    items: [
                        { text: '首页', link: '/a/' },
                        { text: 'a文件', link: '/a/a' }
                    ]
                }
            ]
        },

    },
}