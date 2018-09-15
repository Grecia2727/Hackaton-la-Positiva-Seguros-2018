global.window = global;
global.assert = require('chai').assert;
require('../src/validations');
require('./social.spec.js');
