Package.describe({
  name: 'lucidpaper:connectsdk',
  version: '0.0.1',
  summary: 'A meteor wrapper of the Connect SDK',
  git: 'https://github.com/Lucidpaper/meteor-connect-sdk',
  documentation: 'README.md'
});

// add phonegap depends here
Cordova.depends({
  // "org.apache.cordova.camera":"0.3.2"
  'com.connectsdk.plugins.connectsdk':'https://github.com/ConnectSDK/Connect-SDK-Cordova-Plugin/tarball/01daa03aca52f06803ab954d592e241da6cb238c'
});

Package.onUse(function(api) {
  api.export('ConnectSDK');
  api.use(["templating"]);
  api.versionsFrom('1.1.0.2');
  api.addFiles('connectsdk.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('lucidpaper:connectsdk');
  api.addFiles('connectsdk-tests.js');
});
