require('babel-core/register')({
  ignore: /node_modules/,
  presets: ['es2015', 'stage-0'],
});
require('./src');
