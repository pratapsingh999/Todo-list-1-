
module.exports = {
    testEnvironment: 'jsdom', // Use a browser-like environment
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest', // Use Babel for JavaScript/JSX files
    },
};