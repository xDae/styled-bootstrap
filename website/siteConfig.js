/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  // {
  //   caption: 'User1',
  //   image: '/test-site/img/styled-logo.png',
  //   infoLink: 'https://github.com/xDae/styled-bootstrap',
  //   pinned: true
  // }
];

const siteConfig = {
  title: 'styled-bootstrap' /* title for your website */,
  tagline: 'A styled-component implementation of Bootstrap',
  url: 'http://josemiguel.org/styled-bootstrap' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  customDocsPath: 'docs-examples',
  projectName: 'styled-bootstrap',
  headerLinks: [
    { doc: 'installation', label: 'Docs' },
    { doc: 'doc4', label: 'API' },
    // { page: 'help', label: 'Help' }
    { search: true },
    { href: 'https://github.com/xDae/styled-bootstrap', label: 'GitHub' }
    // { blog: false, label: 'Blog' }
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/styled-logo.png',
  footerIcon: 'img/styled-logo.png',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#563d7c',
    secondaryColor: '#205C3B'
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} 💅🏻 styled-bootstrap`,
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default'
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/xDae/styled-bootstrap'
};

module.exports = siteConfig;
