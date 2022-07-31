const assert = require('assert');
const utils = require('..');

assert.strictEqual(utils.capitalize('abc'), 'Abc');

console.log('\u001B[32m✓\u001B[39m Tests passed');
