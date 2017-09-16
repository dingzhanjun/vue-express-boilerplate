const { __DEV__, __PROD__, __TEST__ } = require('./config/project.config').globals

module.exports = (() => {
    if (__DEV__) {
        return require('./config/webpack.dev.conf');
    } else if (__PROD__) {
        return require('./config/webpack.prod.conf');
    } else {
        throw new Error('Please check environment config')
    }
})()