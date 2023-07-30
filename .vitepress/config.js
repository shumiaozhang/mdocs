// .vitepress/config.js

import { nav } from './nav';
import { sidebar } from './sidebar';
export default {
    // site-level options
    title: 'Sapling',
    description: 'Just playing around.',
    srcDir: 'src',
    lastUpdated: true,
    cleanUrls: true,
    themeConfig: {
        nav,
        sidebar,
    },
}