var fs = require('fs');

var buildJS = function(){
    console.log('Building index.js');
    var indexjs = fs.createWriteStream('build/index.js');
    require('browserify')()
        .add('./src/js/main.js')
        .transform("babelify", {presets: ["@babel/preset-env", "@babel/preset-react"]})
        .transform('uglifyify', { global: true  })
        .bundle()
        .on('error', function (error) { console.error(error.toString()); })
        .pipe(indexjs);
    console.log('Done: Building index.js');
};

var buildCSS = function(){
    console.log('index.css: build and uglify');
    var uglified = require('uglifycss').processFiles(
        [ 'index.css' ],
        { maxLineLen: 500, expandVars: true }
    );
    fs.writeFile('build/index.css', uglified);
    console.log('Done: Building index.css');
}

console.log("using rimraf just to first we clean out the entire build dir");
require('rimraf')('build', function(){
    console.log("re-make the build folder from scratch");
    require('mkdirp')('build', function (err) {
        if (err) {
            console.error(err);
        } else {
            console.log("build the index.js");
            buildJS();
            console.log("build the index.css");            
            buildCSS();
        }
    });  
});
