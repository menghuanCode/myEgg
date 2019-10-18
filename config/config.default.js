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
           defaultViewEngine: 'nunjucks',
           defaultExtension: '.tpl'
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
