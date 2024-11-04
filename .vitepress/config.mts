import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'vLeap Docs',
  description: 'Documentation for vLeap products & services.',
  lastUpdated: false,
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: 'vLeap', link: 'https://vleap.io' }],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/introduction/getting-started.md' },
        ],
      },
      {
        text: 'Warps',
        items: [
          { text: 'General', link: '/warps/intro.md' },
          { text: 'SDKs', link: '/warps/sdks.md' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://x.com/vLeapGroup' },
      { icon: 'github', link: 'https://github.com/vLeapGroup' },
    ],
  },
})