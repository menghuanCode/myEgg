'use strict'

module.exports = appInfo => {
    
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/

   const config = exports = {}

   // use for cookie sign key, should change to your own and keep security
   config.keys = appInfo.name + '_123'

   // add your middleware config here
   config.middleware = []

   // add your user config here
   const userConfig = {
       view: {
        //    mapping: {
        //        '.tpl': 'nujucks'
        //    },
           defaultViewEngine: 'vue',
           defaultExtension: '.vue'
       },
       vue: {
           renderOptions: {
            template: '<!DOCTYPE html><html lang="en"><body><!--vue-ssr-outlet--></body></html>',
            // webpack vue ssr plugin build manifest file
            // clientManifest: require(path.join(app.baseDir,'public/vue-ssr-client-manifest.json')),
           }
       },
       news: {
           pageSize: 5,
           serverUrl: 'https://hacker-news.firebaseio.com/v0'
       },
       middleware: [
           'robot'
       ],
       robot: {
           ua: [ 
               /curl/i,
               /Baiduspider/i 
            ]
       }
   }

   return {
       ...config,
       ...userConfig
   }
}
