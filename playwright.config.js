const config = {
    use: {
        browserName: 'chromium',
        headless: true,
        baseURL: 'https://www.saucedemo.com',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
    retries: 1,
    timeout: 30000,
};

module.exports = config;