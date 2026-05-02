import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'API',
      collapsed: false,
      items: [
        'api/overview',
        'api/getting-started',
        'api/endpoint-reference',
        'api/business-rules',
        'api/errors-validation',
        'api/openapi',
      ],
    },
    {
      type: 'category',
      label: 'Maintainers',
      collapsed: false,
      items: [
        'maintainers/architecture',
        'maintainers/configuration',
        'maintainers/testing',
        'maintainers/development-workflow',
        'maintainers/deployment',
      ],
    },
  ],
};

export default sidebars;
