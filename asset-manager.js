var FS = require('fs');
var AssetMan = require('bb-asset-manager');

var CORE_JS = [
  "bower/jquery/dist/jquery.min.js",
  "bower/bootstrap/dist/js/bootstrap.min.js",
  "bower/angular/angular.min.js",
]
var CORE_CSS = [
  "less/styles.css",
  "bower/fontawesome/css/font-awesome.min.css",
]

module.exports = function(options) {
  options = options || {};
  var assetManager = new AssetMan({
    useOriginalAssets: options.development,
    staticDirectory: __dirname + '/static',
    basePath: options.basePath,
    js: {
      outputDirectory: 'minified/js',
    },
    css: {
      outputDirectory: 'minified/css',
    }
  });

  assetManager.addCSS('gallery', {
    files: CORE_CSS.concat([
      "css/gallery.css",
    ]),
  })
  assetManager.addJS('gallery', {
    files: CORE_JS.concat([
      "js/ng/gallery.js",
    ]),
  })

  assetManager.addJS('console', {
    files: CORE_JS.concat([
      "bower/highlightjs/highlight.pack.js",
      "bower/zeroclipboard/dist/ZeroClipboard.min.js",
      "bower/marked/lib/marked.js",
      "bower/swagger-parser/dist/swagger-parser.min.js",
      "bower/WebCodeBeauty/dist/WebCodeBeauty.min.js",
      "js/smooth-scroll.js",
      "js/examples.js",
      "js/lucy.js",
      "bower/angular-zeroclipboard/src/angular-zeroclipboard.js",
      "bower/angular-highlightjs/angular-highlightjs.min.js",
      "bower/angular-marked/angular-marked.js",
      "js/ng/app.js",
      "js/ng/portal.js",
      "js/ng/documentation.js",
      "js/ng/console.js",
      "js/ng/oauth2.js",
      "js/sort-routes.js",
      "js/ng/parameter.js",
    ]),
  });

  assetManager.addCSS('console', {
    files: CORE_CSS.concat([
      "bower/fontawesome/css/font-awesome.min.css",
      "bower/highlightjs/styles/github.css",
      "bower/highlightjs/styles/atelier-forest.light.css",
      "css/portal.css",
      "css/spec-url.css",
      "css/data-colors.css",
      "css/documentation.css",
      "css/console.css",
      "css/markdown.css",
    ]),
  });

  assetManager.compile();
  return assetManager;
}