import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Ottawa Hackathon 3.0 Ideas',
  tagline: 'Build to Convert - 12+ Winning Project Ideas',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://hackathon-ideas.ciprianrarau.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'crarau', // Usually your GitHub org/user name.
  projectName: 'hackathon-ideas', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  
  // Open Graph and social card metadata
  metadata: [
    {name: 'description', content: '🚀 Ottawa Hackathon 3.0 - September 6-7, 2025 | 12+ Battle-Tested Project Ideas to Win Big! Build to Convert with proven B2B/B2C ideas ready for rapid sales.'},
    {name: 'og:title', content: '🔥 Ottawa Hackathon 3.0 Ideas - Win Big with Proven Projects!'},
    {name: 'og:description', content: '12+ Battle-Tested Project Ideas | Sept 6-7, 2025 | Build to Convert | Win prizes for Most Revenue, Fastest Sales, Most Signups & Creative GTM!'},
    {name: 'og:image', content: 'https://hackathon-ideas.ciprianrarau.com/img/social-preview.jpg'},
    {name: 'og:type', content: 'website'},
    {name: 'twitter:card', content: 'summary_large_image'},
    {name: 'twitter:title', content: '🔥 Ottawa Hackathon 3.0 Ideas'},
    {name: 'twitter:description', content: '12+ Battle-Tested Project Ideas to dominate the hackathon! Build to Convert 🚀'},
    {name: 'twitter:image', content: 'https://hackathon-ideas.ciprianrarau.com/img/social-preview.jpg'},
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Hackathon Ideas',
      logo: {
        alt: 'Ottawa Hackathon',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Project Ideas',
        },
        {to: '/docs/evaluation', label: 'Evaluation', position: 'left'},
        {to: '/docs/prizes', label: 'Prizes', position: 'left'},
        {
          href: 'https://github.com/crarau/hackathon-ideas',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Hackathon',
          items: [
            {
              label: 'Project Ideas',
              to: '/docs/intro',
            },
            {
              label: 'Register on Luma',
              href: 'https://luma.com/9k96tg5z?tk=EqpUKv',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Ciprian Rarau Blog',
              href: 'https://www.ciprianrarau.com/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/crarau/hackathon-ideas',
            },
          ],
        },
      ],
      copyright: `Ottawa AI Tinkerers Hackathon 3.0 - Sept 6-7, 2025`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
