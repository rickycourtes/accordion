const fs = require('fs');
const version = require('../package.json').version;
['src/js/simple-accordion.js', 'src/scss/simple-accordion.scss'].forEach(function(file) {
  let src = fs.readFileSync(file, 'utf8');
  src = src.replace(/Simple Accordion v\d+\.\d+\.\d+/, `Simple Accordion v${version}`);
  fs.writeFileSync(file, src, 'utf8' );
});