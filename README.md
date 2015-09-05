# meteor

Test meteor simple app (auto lists)

## Possibility tu use technologies such as:

  - React
  - React Native
  - Babel
  - Angular

## Also:

+ Gulp.js task runner
+ testing tools: Mocha, Karma
+ Bootstrap 3.0

### Meteortie
(to get 3rg party libraries from atmosphere)
On windows use
http://stackoverflow.com/questions/20949780/how-to-install-meteorite-for-windows
or back to Node.js 0.8.22 by NVM

-> install Meteor 1.1 for Widows, and use only meteor

### Architecture
 - server - only use by backend
 - client - use on FE
 - lib - loaded as first
 - public - fonts, images etc.
 - main.* - loaded as last

### 3rd party libraries
bootstrap
sacha:spin
iron:router

bootstrap
remove autopublish
remove insecure (to safety collections)