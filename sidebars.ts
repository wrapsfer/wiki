import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'API',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'API Documentation',
        description: 'Reference for API consumers: overview, local setup, endpoints, business rules, error contract, and the OpenAPI document.',
        slug: '/category/api',
      },
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
      link: {
        type: 'generated-index',
        title: 'Maintainer Documentation',
        description: 'Reference for backend developers and future maintainers: architecture, configuration, testing, development workflow, and deployment.',
        slug: '/category/maintainers',
      },
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
