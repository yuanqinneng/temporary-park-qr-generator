module.exports = {
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            },
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 37.5
                    })
                ]
            }
        }
    }
}