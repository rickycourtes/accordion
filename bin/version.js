const fs = require('fs');
const version = require('../package.json').version;
['src/js/accordion.js', 'src/scss/accordion.scss'].forEach(function(file) {
  let src = fs.readFileSync(file, 'utf8');
  src = src.replace(/Accordion v\d+\.\d+\.\d+/, `Accordion v${version}`);
  fs.writeFileSync(file, src, 'utf8' );
});