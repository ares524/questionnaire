const withImages = require('next-images')
const withNextCircularDeps = require('next-circular-dependency')
const { i18n } = require('./next-i18next.config');

// module.exports = {
  
// };

module.exports = withImages({
    i18n,
    // webpack: (config, { isServer }) => {
    //     config.externals = ["webpack", "readable-stream", "d3-interpolate", "next"]
    //     return config
    // }
})
