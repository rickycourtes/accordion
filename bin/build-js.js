const fs = require('fs');
let output = fs.readFileSync('src/js/simple-accordion.js', 'utf8');
fs.writeFileSync('dist/simple-accordion.js', output);