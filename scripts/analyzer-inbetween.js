/* eslint-disable import/no-extraneous-dependencies */
const tsNode = require('ts-node');

tsNode.register({
    transpileOnly: true,
    compilerOptions: require('../tsconfig.json').compilerOptions,
});

const Reporter = require('../src/analyzer/analyzer');

module.exports = Reporter;
