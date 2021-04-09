const fs = require('fs');
var sass = require('node-sass');
var result = sass.renderSync({ file: 'src/scss/simple-accordion.scss', outputStyle: 'expanded', linefeed: "cr" });
fs.writeFileSync('dist/simple-accordion.css', result.css.toString().replace('*/', '*/\n\n'));