if (process.platform === 'win32') {
	module.exports = require('./build/win/umabcio.node');
} else {
	module.exports = require('./build/mac/umabcio.node');
}