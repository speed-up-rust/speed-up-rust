import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Rust 速成',
  description: 'Just playing around.',
  themeConfig: {
    siteTitle: 'Rust 速成',
    nav: [
      { text: '《Rust 程序设计语言》', link: '/basics/1.猜数字游戏.md' },
      { text: '高级进阶', link: '/advance' },
      {
        text: '项目分析',
        items: [
          { text: 'ripgrep', link: '/projects/ripgrep' },
        ],
      },
    ],
    sidebar: {
      '/basics/': [
        { text: '猜数字小游戏', link: '/basics/1.猜数字游戏.md' },
        { text: '常见编程概念', link: '/basics/2.常见编程概念.md' },
        { text: '所有权', link: '/basics/3.所有权.md' },
        { text: '结构体', link: '/basics/4.结构体.md' },
        { text: '枚举和模式匹配', link: '/basics/5.枚举和模式匹配.md' },
        { text: '包、Crate 和模块', link: '/basics/6.包、Crate 和模块.md' },
        { text: '常见集合', link: '/basics/7.常见集合.md' },
        { text: '错误处理', link: '/basics/8.错误处理.md' },
        { text: '泛型、Trait 和生命周期', link: '/basics/9.泛型、Trait 和生命周期.md' },
        { text: '使用自动化测试', link: '/basics/10.使用自动化测试.md' },
        { text: '构建命令行程序', link: '/basics/11.构建命令行程序.md' },
        { text: '迭代器与闭包', link: '/basics/12.迭代器与闭包.md' },
        { text: 'Cargo 与 Cargo.io', link: '/basics/13.Cargo 与 Cargo.io.md' },
        { text: '智能指针', link: '/basics/14.智能指针.md' },
        { text: '无畏并发', link: '/basics/15.无畏并发.md' },
        { text: '面向对象编程特性', link: '/basics/16.面向对象编程特性.md' },
        { text: '模式与模式匹配', link: '/basics/17.模式与模式匹配.md' },
        { text: '高级特性', link: '/basics/18.高级特性.md' },
        { text: '构建多线程 web server', link: '/basics/19.构建多线程 web server.md' },
      ],
    },
  },
  lastUpdated: true,
});
