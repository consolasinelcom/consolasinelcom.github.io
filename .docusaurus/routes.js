
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/acrel',
    component: ComponentCreator('/acrel','c75'),
    exact: true
  },
  {
    path: '/adif',
    component: ComponentCreator('/adif','87f'),
    exact: true
  },
  {
    path: '/adifssfo',
    component: ComponentCreator('/adifssfo','f96'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','569'),
    exact: true
  },
  {
    path: '/blog/hello-world',
    component: ComponentCreator('/blog/hello-world','07a'),
    exact: true
  },
  {
    path: '/blog/hola',
    component: ComponentCreator('/blog/hola','6e6'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','738'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','2fe'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','263'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','8b3'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','015'),
    exact: true
  },
  {
    path: '/caudal',
    component: ComponentCreator('/caudal','d21'),
    exact: true
  },
  {
    path: '/controldeaccesos',
    component: ComponentCreator('/controldeaccesos','e51'),
    exact: true
  },
  {
    path: '/intro',
    component: ComponentCreator('/intro','eb3'),
    exact: true
  },
  {
    path: '/lintya',
    component: ComponentCreator('/lintya','912'),
    exact: true
  },
  {
    path: '/listatelefonos',
    component: ComponentCreator('/listatelefonos','14a'),
    exact: true
  },
  {
    path: '/multiplexores',
    component: ComponentCreator('/multiplexores','0f5'),
    exact: true
  },
  {
    path: '/proyectosadif',
    component: ComponentCreator('/proyectosadif','2cd'),
    exact: true
  },
  {
    path: '/proyectosree',
    component: ComponentCreator('/proyectosree','4ea'),
    exact: true
  },
  {
    path: '/proyectostelefonica',
    component: ComponentCreator('/proyectostelefonica','756'),
    exact: true
  },
  {
    path: '/ree',
    component: ComponentCreator('/ree','032'),
    exact: true
  },
  {
    path: '/reesstg',
    component: ComponentCreator('/reesstg','637'),
    exact: true
  },
  {
    path: '/riego',
    component: ComponentCreator('/riego','9d6'),
    exact: true
  },
  {
    path: '/sondas',
    component: ComponentCreator('/sondas','25f'),
    exact: true
  },
  {
    path: '/telefonica',
    component: ComponentCreator('/telefonica','183'),
    exact: true
  },
  {
    path: '/telxius',
    component: ComponentCreator('/telxius','246'),
    exact: true
  },
  {
    path: '/tpfo',
    component: ComponentCreator('/tpfo','f6f'),
    exact: true
  },
  {
    path: '/urtt',
    component: ComponentCreator('/urtt','a99'),
    exact: true
  },
  {
    path: '/usc5g',
    component: ComponentCreator('/usc5g','b02'),
    exact: true
  },
  {
    path: '/uscfusibles',
    component: ComponentCreator('/uscfusibles','bb5'),
    exact: true
  },
  {
    path: '/usetesa',
    component: ComponentCreator('/usetesa','b35'),
    exact: true
  },
  {
    path: '/utilidades',
    component: ComponentCreator('/utilidades','07e'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','87d'),
    routes: [
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations','793'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post','68e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document','c2d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page','f44'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site','e46'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features','4b7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions','fdd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site','2d7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
