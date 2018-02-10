module.exports = {
  loading: { color: '#2e7d32', height:'10px' },
  modules: [ '@nuxtjs/pwa','@nuxtjs/component-cache', "nuxtent", "nuxt-netlify-cms"  ],
  manifest: {
    name: 'SM-Design.ro',
    lang: 'ro',   
    description: 'SoulMatters Design it\'s a company that offers web design services. ',
    display: "standalone",
    background_color: "#005005",

  },
  modifyUrlPrefix: {
    '/': '/_nuxt/'
  },
   nuxtent: {
    content: [
      ["posts", {
        page: '/_post',
        permalink: '/blog/:year/:month/:slug',
        generate: [
          // assets to generate static build
          "get",
          "getAll",
        ]
      }],
      ["pages", {
        page: '/_slug',
        permalink: ":slug",
        isPost: false,
        generate: [
          // assets to generate static build
          "get",
          "getAll"
          
        ]
      }],
      ["portfolio", {
        page: '/_portfolio',
        isPost: false,        
        permalink: "/portfolio/:slug",
        generate: [
          // assets to generate static build
          "get",
          "getAll",
          
        ]
      }],
         
    ]
  
  },
 cmsConfig:{
   media_folder: "/static/blog/img"
 },
  netlifyCms: {
    adminPath: "admin"
  },
  plugins: ['~plugins/vuetify.js','~plugins/axios.js','~plugins/lazy.js'],
  build: {
   
    vendor:['axios', 'vuetify'],
    extractCSS: false
    
  },
  css: [
    '~assets/css/app.styl'
  ],
  head: {
    title: 'Home | SM-DESIGN',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      {rel:'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'},
      {rel:'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'},
      {rel:'stylesheet', href: 'https://fonts.googleapis.com/css?family=Khula:400,800'},
      {rel:'stylesheet', href: 'https://unpkg.com/vuetify/dist/vuetify.min.css'},
      {rel:'stylesheet', href: '/css/variables.css'}
    ]
  },

  render: {
    static: {
      maxAge: '1y',
      setHeaders (res, path) {
        if (path.includes('sw.js')) {
          res.setHeader('Cache-Control', 'public, max-age=0')
        }
      }
    }
  }

};
