var oldEnv = process.env.NODE_ENV;
process.env.NODE_ENV = 'development';
module.exports = require('prop-types');
process.env.NODE_ENV = oldEnv;
