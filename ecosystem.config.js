module.exports = {
    apps: [
        {
            name: 'postsapi_test-app',
            script: './src/index.js',
            env_production: {
                NODE_ENV: 'production'
            }
        }
    ]
};