// docusaurus.config.js

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'inovaea web',
  tagline: 'Documentation for inovaea projects',
  url: 'https://inovaea.com',
  baseUrl: '/',
  baseUrlIssueBanner: false,
  trailingSlash: false,

  favicon: 'inovaea_logo/favicon.svg',

  organizationName: 'inovaea',
  projectName: 'ino_docs_V1',
  deploymentBranch: 'gh-pages',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'sk'],
    localeConfigs: {
      en: { label: 'English' },
      sk: { label: 'Slovenčina' },
    },
  },

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexDocs: true,
        indexPages: true,
        indexBlog: false,
        hashed: true,
        language: ['en'],
      },
    ],
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-XXXXXXXXXX',
        anonymizeIP: true,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          { tagName: 'link', rel: 'icon', href: '/inovaea_logo/favicon.svg' },
          { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
          { tagName: 'meta', name: 'theme-color', content: '#e2001a' },
        ],
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/inovaea/ino_docs_V1/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      },
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: 'keywords',
        content:
          'inovaea, IoT, embedded systems, automation, ESP32, firmware, hardware, documentation',
      },
      { name: 'author', content: 'inovaea s.r.o.' },
      { name: 'robots', content: 'index,follow' },
    ],

    image: 'inovaea_logo/og-image.png',

    navbar: {
      title: '',
      logo: {
        alt: 'inovaea logo',
        src: 'inovaea_logo/inovaea_logo.svg',
        srcDark: 'inovaea_logo/inovaea_logo_white.svg',
      },
      hideOnScroll: false,

      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Home',
        },

        /* =====================================================
           HARDWARE – HTML MEGA MENU (FIXED & CLEAN)
        ====================================================== */
        {
          type: 'html',
          position: 'left',
          className: 'hw-mega-item',
          value: `
<div class="hw-mega">
  <a class="navbar__link hw-mega-toggle" href="/Hardware/overview">Hardware</a>

  <div class="hw-mega-panel">

    <!-- 🧠 inoCORE -->
    <div class="hw-col">
      <!-- ✅ FIX: link to an existing doc page -->
      <a class="hw-col-title hw-col-title-link" href="/Hardware/inoCORE">🧠 inoCORE</a>
      <a class="hw-col-link" href="/Hardware/inoCORE/inoCORE5.1">inoCORE5.1</a>
      <a class="hw-col-link" href="/Hardware/inoCORE/inoCORE5.2">inoCORE5.2</a>
      <a class="hw-col-link" href="/Hardware/inoCORE/inoCORE5.3">inoCORE5.3</a>
    </div>

    <!-- 🌐 inoNET -->
    <div class="hw-col">
      <a class="hw-col-title hw-col-title-link" href="/Hardware/inoNET">🌐 inoNET</a>
      <a class="hw-col-link" href="/Hardware/inoNET/inoNET8.0">inoNET8.0</a>
      <a class="hw-col-link" href="/Hardware/inoNET/inoNET8.4">inoNET8.4</a>
      <a class="hw-col-link" href="/Hardware/inoNET/inoNET8.8">inoNET8.8</a>
    </div>

    <!-- 💡 inoLED -->
    <div class="hw-col">
      <a class="hw-col-title hw-col-title-link" href="/Hardware/inoLED">💡 inoLED</a>
      <a class="hw-col-link" href="/Hardware/inoLED/inoLED-micro">inoLED micro</a>
    </div>

    <!-- 📟 inoBOARD -->
    <div class="hw-col">
      <a class="hw-col-title hw-col-title-link" href="/Hardware/inoBOARD">📟 inoBOARD</a>
      <a class="hw-col-link" href="/Hardware/inoBOARD/inoBOARD8.8">inoBOARD8.8</a>
      <a class="hw-col-link" href="/Hardware/inoBOARD/inoBOARD16.0">inoBOARD16.0</a>
      <a class="hw-col-link" href="/Hardware/inoBOARD/inoBOARD0.16">inoBOARD0.16</a>
    </div>

    <!-- 🔌 inoSWITCH -->
    <div class="hw-col">
      <a class="hw-col-title hw-col-title-link" href="/Hardware/inoSWITCH">🔌 inoSWITCH</a>
      <a class="hw-col-link" href="/Hardware/inoSWITCH/inoSWITCH-poe">PoE switches</a>
      <a class="hw-col-link" href="/Hardware/inoSWITCH/inoSWITCH-industrial">Industrial switches</a>
      <a class="hw-col-link" href="/Hardware/inoSWITCH/inoSWITCH-modules">Switching modules</a>
    </div>

    <!-- 🧩 Firmware & Examples -->
    <div class="hw-col">
      <div class="hw-col-title">🧩 Firmware & Examples</div>
      <a class="hw-col-link" href="/Firmware/overview">Firmware overview</a>
      <a class="hw-col-link" href="/Firmware/firmware-api">Firmware API</a>
      <a class="hw-col-link" href="/examples/examples-index">Examples & reference designs</a>
      <a class="hw-col-link" href="/faq">FAQ</a>
    </div>

  </div>
</div>
          `,
        },

        // Integrations
        {
          label: 'Integrations',
          position: 'left',
          items: [
            {
              type: 'doc',
              docId: 'Integrations/Overviews',
              label: 'Overview',
            },
          ],
        },

        { type: 'localeDropdown', position: 'right' },
        { href: 'https://inovaea.com', label: 'inovaea.com', position: 'right' },
        { href: 'https://github.com/inovaea', label: 'GitHub', position: 'right' },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Home', to: '/' },
            { label: 'Hardware', to: '/Hardware/overview' },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'Examples', to: '/examples/examples-index' },
            { label: 'FAQ', to: '/faq' },
          ],
        },
        {
          title: 'Company',
          items: [
            { label: 'inovaea.com', href: 'https://inovaea.com' },
            { label: 'GitHub', href: 'https://github.com/inovaea' },
            { label: 'Support', href: 'mailto:support@inovaea.com' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} ❤️ inovaea. All rights reserved.`,
    },

    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
      disableSwitch: false,
    },
  },
};

module.exports = config;
