const config = {
    use: {
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
    reporter: [
        ['list'],
        ['playwright-qase-reporter',
            {
                apiToken: 'b45e559f1709f1c61454cd43caacef762a27b278f73f79b059ed7a1d9a12bafc`',
                projectCode: 'CDS',
                runComplete: true,
                basePath: 'https://api.qase.io/v1',
                logging: true,
                uploadAttachments: true,
            }],
    ],
};
module.exports = config;