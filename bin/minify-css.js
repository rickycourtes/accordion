const fs = require('fs');
const CleanCSS = require('clean-css');
let input = fs.readFileSync('dist/simple-accordion.css', 'utf8');
let output = new CleanCSS().minify(input).styles.replace('*/', '*/\n');
fs.writeFileSync('dist/simple-accordion.min.css', output);