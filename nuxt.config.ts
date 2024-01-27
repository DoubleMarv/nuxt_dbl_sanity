//update this for deploy!
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  target: 'static',
  ssr: true,
generate:{
  fallback:true, 
  interval: 500
},
app:{
  baseURL: '/build/dblmvlls/',
  //baseURL: '/',
      head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
},
//ignore below
// runtimeConfig: {
//     public: {
//       site: {
//       }
//     },
//     app: {
//       baseURL: '/build/dblmvlls/'
//     }
//   },
    modules: ['@nuxtjs/sanity', 'nuxt-aos'],
    buildModules: ['@nuxtjs/sanity'],
    pages: true,
    sanity: {
    projectId: '588x4upa'
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/global.scss";',
        },
      },
    },
  },
  css: [
    '@/assets/css/main.scss',
    ],
})


//update this!!