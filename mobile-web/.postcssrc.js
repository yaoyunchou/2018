// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-cssnext":{},
    "cssnano":{},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-salad":{
      browsers:['ie > 8', 'last 2 version']
    },
    "postcss-plugin-px2rem":{
      rootValue:15
    }
  }
}
