// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-11-01',
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxtjs/seo',
    '@nuxt/icon',
    '@vee-validate/nuxt',
    '@nuxt/image',
    'shadcn-nuxt',
  ],
  shadcn: {
    prefix: 'Cbc',
    componentDir: './components/ui'
  },
  robots: {
    blockNonSeoBots: true
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
})