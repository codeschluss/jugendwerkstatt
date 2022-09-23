
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-downloader.download",
          "file": "plugins/cordova-plugin-downloader/www/download.js",
          "pluginId": "cordova-plugin-downloader",
        "clobbers": [
          "download"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-downloader": "0.0.4"
    };
    // BOTTOM OF METADATA
    });
    