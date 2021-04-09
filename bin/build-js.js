const fs = require('fs');
let output = fs.readFileSync('src/js/accordion.js', 'utf8');
fs.writeFileSync('dist/accordion.js', output);