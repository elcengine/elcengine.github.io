import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'Elemental',
  tagline: "The Golang ODM for MongoDB you've been waiting for",
  favicon: 'img/favicon.ico',

  url: 'https://elcengine.github.io',

  baseUrl: '/',

  organizationName: 'elcengine',
  projectName: 'elcengine.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/elcengine/elcengine.github.io/tree/main/docs'
        },
        blog: {
          showReadingTime: true,
          path: './release-notes',
          routeBasePath: 'release-notes',
          editUrl: 'https://github.com/elcengine/elcengine.github.io/tree/main/blog'
        },
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    navbar: {
      title: 'Elemental',
      logo: {
        alt: 'Elemental Logo',
        src: 'img/logo.png'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docSidebar',
          position: 'left',
          label: 'Docs'
        },
        { to: '/release-notes', label: 'Release Notes', position: 'left' },
        {
          href: 'https://github.com/elcengine/elemental',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Elemental, Inc. Built with Docusaurus.`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    },
    colorMode: {
      disableSwitch: true
    }
  } satisfies Preset.ThemeConfig
};

export default config;
