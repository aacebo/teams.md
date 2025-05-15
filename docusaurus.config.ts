import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as DocsPlugin from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Teams AI Library (v2)',
  favicon: 'img/msft-logo-48x48.png',

  // Set the production url of your site here
  url: 'https://aacebo.github.io/teams.md/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'microsoft', // Usually your GitHub org/user name.
  projectName: 'teams-ai', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'zh-Hans'],
  },

  markdown: {
    mermaid: true,
  },

  scripts: [
    {
      src: '/scripts/clarity.js',
      async: false
    }
  ],

  presets: [
    [
      'classic',
      {
        blog: false,
        docs: {
          routeBasePath: '/',
          path: 'docs/main',
          sidebarPath: './sidebars.ts',
          sidebarCollapsed: false,
          editUrl: 'https://github.com/microsoft/teams-ai/tree/v2-preview/teams.md/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'typescript',
        path: 'docs/typescript',
        routeBasePath: '/typescript',
        sidebarPath: './sidebars.ts',
        sidebarCollapsed: true,
        editUrl: 'https://github.com/microsoft/teams-ai/tree/v2-preview/teams.md/',
      } satisfies Partial<DocsPlugin.PluginOptions>,
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'csharp',
        path: 'docs/csharp',
        routeBasePath: '/csharp',
        sidebarPath: './sidebars.ts',
        sidebarCollapsed: true,
        editUrl: 'https://github.com/microsoft/teams-ai/tree/v2-preview/teams.md/',
      } satisfies Partial<DocsPlugin.PluginOptions>,
    ],
  ],

  themes: [
    '@docusaurus/theme-mermaid'
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true
    },
    announcementBar: {
      backgroundColor: '#515cc6',
      isCloseable: true,
      textColor: '#fff',
      content: '🎉️ Teams AI v2.0.0-preview is out! 🥳️'
    },
    navbar: {
      title: 'Teams AI (v2)',
      hideOnScroll: true,
      logo: {
        alt: 'Teams AI (v2)',
        src: 'img/teams.png',
      },
      items: [
        {
          to: 'typescript/getting-started',
          position: 'left',
          label: 'Typescript',
        },
        {
          to: 'csharp/getting-started',
          position: 'left',
          label: 'C#',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/microsoft/teams-ai/tree/v2-preview',
          position: 'right',
          className: 'header-github-link'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://devblogs.microsoft.com/microsoft365dev/announcing-the-updated-teams-ai-library-and-mcp-support/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/microsoft/teams-ai/tree/v2-preview',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Microsoft Corporation. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: [
        'typescript', 'javascript',
        'csharp', 'python', 'bash',
        'markdown', 'json'
      ]
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
