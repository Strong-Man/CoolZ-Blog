module.exports = {
    title: 'CoolZの技术博客',
    base:'/CoolZ-Blog/',
    description: 'CoolZの博客',
    port:8080,
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide',    items: [
                    { text: 'Chinese', link: 'https://baidu.com' },
                    { text: 'Japanese', link: 'https://java1234.com' }
                ] },
            { text: 'External', link: 'https://baidu.com' },
        ],
        sidebar: [
            {
                title: 'android',
                collapsable: false,
                children: [
                    ['/android/test1.md','test1'],
                    ['/android/','readme'],
                ]
            },
        ],
    }
}