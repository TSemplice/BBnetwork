export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  server: {
    port: 8000, // default: 3000
    host: "0.0.0.0", // default: localhost
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "BB Network",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/lax.js", ssr: false },
    { src: "~/plugins/aos.js", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/postcss8", "@nuxt/image"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@nuxtjs/prismic",
    "@nuxtjs/sitemap",
    [
      "@nuxtjs/robots",
      {
        UserAgent: "*",
        Allow: "/",
        Sitemap: "https://bb.network/sitemap.xml",
      },
    ],
    [
      "@nuxtjs/i18n",
      {
        locales: [
          {
            name: "Italiano",
            code: "it",
            iso: "it-IT",
            file: "it-IT.js",
          },
          {
            name: "English",
            code: "en",
            iso: "en-US",
            file: "en-US.js",
          },
        ],
        parsePages: false,
        pages: {
          "about-us/index": {
            it: "/su-di-noi",
            en: "/about-us",
          },
          "apartments/index": {
            it: "/appartamenti",
            en: "/apartments",
          },
          "for-university/index": {
            it: "/per-universita",
            en: "/for-university",
          },
          "for-landlords/index": {
            it: "/per-proprietari",
            en: "/for-landlords",
          },
          "for-students/index": {
            it: "/per-studenti",
            en: "/for-students",
          },
          "contacts/index": {
            it: "/contatti",
            en: "/contacts",
          },
        },
        baseUrl: "https://bb.network",
        strategy: "prefix",
        langDir: "lang/",
        defaultLocale: "it",
        detectBrowserLanguage: false,
        lazy: true,
      },
    ],
    'iubenda-module'
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      fileName: `favicon.png`,
    },
    manifest: {
      name: "BB Network, leaders in European student housing.",
      short_name: "BB Network",
      description: "BB Network, leaders in European student housing.",
      background_color: "#F0FF3D",
      theme_color: "#30279A",
    },
    workbox: {
      enabled: false,
    },
  },

  iubenda: {
    i18n: {
      en: {
        cookiePolicyId: 84203216
      },
      it: {
        cookiePolicyId: 84203216
      }
    },
    // Defaults:
    dev: true, // Activate module in dev environment.
    consentMode: true, // Use Google's consent mode.
    links: {
      enable: true, // Add script to include links to policy pages.
      style: 'nostyle', // Add styling to links. (nostyle, white or black)
      whiteLabel: true, // White label links.
      embed: true // Open links in embedded popup.
    },

    // Entire iubenda configuration
    config: {
      siteId: 2898021, // Required
      cookiePolicyId: 84203216, // Required

      // ...all other config options. (See Iubenda cookie banner script)
      // Example defaults:
      lang: 'it',
      gdprAppliesGlobally: false,
      cookiePolicyInOtherWindow: false,
      consentOnContinuedBrowsing: false,
      perPurposeConsent: true,
      banner: {
        acceptButtonDisplay: true,
        customizeButtonDisplay: true,
        rejectButtonDisplay: true,
        acceptButtonColor: '#30279A',
        acceptButtonCaptionColor: '#E8EDED',
        customizeButtonColor: '#191717',
        customizeButtonCaptionColor: '#E8EDED',
        rejectButtonColor: '#30279A',
        rejectButtonCaptionColor: '#E8EDED',
        closeButtonDisplay: false,
        position: 'float-bottom-right',
        textColor: '#252424',
        backgroundColor: '#E8EDED',
        backgroundOverlay: true
      }
    }
  },

  sitemap: {
    hostname: "https://bb.network",
    i18n: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        "postcss-import": {},
        "tailwindcss/nesting": {},
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
