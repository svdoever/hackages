# hackages-cli
Yet another JavaScript fatigue tool but this one let's you focus only on what's important: your application!

## Getting started

Hackages depends on [Node.js](http://nodejs.org/) and [npm](http://npmjs.org/). Also make sure that [git](http://git-scm.com/) is installed as some hackages packages require it to be fetched and installed.

Create a directory for your project, als place the following files in this directory:

File **package.json**:

```json
{
  "name": "name-of-your-site",
  "version": "0.0.1",
  "main": "index.js",
  "scripts": {
    "test": "jest",
    "run:browser": "hackages live",
    "run:watch": "hackages watch",
    "prestart": "npm i",
    "start": "npm-run-all --parallel run:watch run:browser"
  },
  "author": "your-name",
  "license": "MIT",
  "dependencies": {
    "react": "^15.0.2",
    "react-dom": "^15.0.2"
  },
  "devDependencies": {
    "hackages": "^0.0.8",
    "npm-run-all": "^2.1.1"
  }
}
```

File **index.html**:

```html
<html>
  <body>
    <div id="app"></div>
    <script src="dist/index.js"></script>
  </body>
</html>
```

File **index.js**:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <h1>Hello hackages!</h1>;
ReactDOM.render(<App/>, document.getElementById('app'));
```

Now execute the following command to get started:

```sh
$ npm start
```

## Usage

If you need more options, the **hackages** command has the following command-line parameters:

```sh
Usage: hackages <command> [options]
hackages not hackage like Haskell

Options:
[--help, -?]        Display help about this program
[--version, -V]     Display the version of this program

Available Commands:
help                display help about this program
build               Build all your static assets using Webpack
lint                Lint JS file following airBnB coding guidelines by default
watch               Watch files using webpack, babel, eslint
ci                  Generate mocha.json and report for continuous integration
test                Running unit tests with Karma
live                Starting local server on port 8000
deploy              Deploy static assets quickly for immediate feedback
```

## License

(The MIT License)

Copyright (c) 2016 Hackages <007@hackages.io>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the 'Software'), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
