
module.exports = {
    title: 'BT内部业务UI库',
    dest: 'dist',
    plugins: ['@vuepress/nprogress'],
    scss: {
        includePaths: ['./public/styles/index.scss']
    },
    locales: {
        '/zh/': {
            lang: 'zh-CN',
            title: 'UI库',
            logo: './l.png',
            description: 'Vue.js 官方的路由管理器。'
        },

    },
    themeConfig: {
        locales: {
            '/zh/': {
                nav: [
                    {
                        text: '指南',
                        link: '/zh/guide/'
                    },
                    {
                        text: '组件',
                        link: '/zh/component'
                    }
                ],
                sidebar: [
                    '/zh/updateLog.md',
                    {
                        title: '开发指南',
                        collapsable: false,// 默认展开
                        children: [
                            '/zh/guide/',
                            '/zh/guide/quickStart.md'
                        ]
                    },
                    {
                        title: '组件',
                        collapsable: false,//默认展开
                        children: [
                            {
                                title: 'country',
                                collapsable: false,
                                path: '/zh/component/country.md'
                            }
                        ]
                    }
                ]
            }
        },

    }
}