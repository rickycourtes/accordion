const fs = require('fs');
var sass = require('node-sass');
var result = sass.renderSync({ file: 'src/scss/accordion.scss', outputStyle: 'expanded', linefeed: "cr" });
fs.writeFileSync('dist/accordion.css', result.css.toString().replace('*/', '*/\n\n'));