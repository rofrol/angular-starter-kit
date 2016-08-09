```shell
npm init -y
npm i -S angular
npm i -D browserify
```

index.html:

```html
<!doctype html>
<div ng-app="myApp" ng-controller="myController">
    hello {{hello}}
</div>
<script src="bundle.js"></script>
```

index.js:

```javascript
var angular = require('angular');

var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
    $scope.hello = 'World';
});
```

bundle:

```shell
./node_modules/.bin/browserify index.js -o bundle.js
```

If you don't want to create all the files, you can reuse files from this repo. In this case just run

```shell
npm i
npm run js:build
```

Open `index.html` in the web browser.
