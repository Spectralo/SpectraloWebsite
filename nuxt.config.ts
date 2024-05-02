// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [[
    '@nuxtjs/google-fonts',
    {
      families: {
         'Rubik': [100,300,400,500,700],
         'Abril Fatface' : true,

      },
    },
  ], "@nuxt/image", "@nuxt/content",'nuxt-icon'],
})