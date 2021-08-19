const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Consolas y manuales instalaciones',
  tagline: '',
  url: 'https://consolasinelcom-github.io',
  baseUrl: '/consolasinelcom/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logop.png',
  organizationName: 'consolasinelcom', // Usually your GitHub org/user name.
  projectName: 'consolasinelcom', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Empresas',
      logo: {
        alt: 'Logo',
        src: 'img/logop.jpg',
      },
      items: [
        {
          to: '/proyectostelefonica',
          label: 'Telefónica',
          position: 'left'
        },
        {
          to: '/proyectosree',
          label: 'REE',
          position: 'left'
        },
        {
          to: '/proyectosadif',
          label: 'ADIF',
          position: 'left'
        },
        {
          to: '/lintya',
          label: 'Lintya',
          position: 'left'
        },
        {
          to: '/telxius',
          label: 'Telxius',
          position: 'left'
        },
        {
          to: '/utilidades',
          label: 'Utilidades',
          position: 'left'
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} by Kstro.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
