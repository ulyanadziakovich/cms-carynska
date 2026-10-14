// Panel treści strony przystan.bieszczady.pl (repo ../carynska).
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  // Stały port — strona carynska szuka CMS właśnie tutaj (4321 zajmuje nb-cms).
  devServer: { port: 4322 },
  modules: ['pruvious'],

  // Adres strony, na którą prowadzi przycisk „Zobacz na stronie” w panelu.
  runtimeConfig: {
    public: { siteUrl: 'http://localhost:4000' },
  },

  // pruvious.jwt.secretKey czytany z NUXT_PRUVIOUS_JWT_SECRET_KEY (.env, poza repo).
  pruvious: {
    dashboard: {
      baseComponents: {
        misc: {
          MultiCollectionsOverview: './app/dashboard/MultiCollectionsOverview.vue',
          Base: './app/dashboard/Base.vue',
        },
      },
    },
    database: process.env.NUXT_PRUVIOUS_DATABASE ?? 'sqlite:./pruvious.db',
    uploads: {
      drive: { type: 'local', path: process.env.NUXT_PRUVIOUS_UPLOADS_DRIVE_PATH ?? './.uploads' },
      maxFileSize: '16 MB',
    },
    pageCache: { type: 'local', path: process.env.NUXT_PRUVIOUS_PAGE_CACHE_PATH ?? './.cache/pages' },
  },
})
