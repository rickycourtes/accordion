const fs = require('fs');
const CleanCSS = require('clean-css');
let input = fs.readFileSync('dist/accordion.css', 'utf8');
let output = new CleanCSS().minify(input).styles.replace('*/', '*/\n');
fs.writeFileSync('dist/accordion.min.css', output);