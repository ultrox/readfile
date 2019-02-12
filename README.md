## What is this?

This is my first scoped npm package. Read more about scoped packages [here](https://docs.npmjs.com/creating-and-publishing-an-org-scoped-package)

Promise based fs.readFile with default encoding set to `utf-8`.

It's literally one function

```javascript
const readfile = require('@markovujanic/readfile')
// this is comment ϵ

readfile(__filename).then(content => console.log(content))
```

```javascript

const readfile = require('@markovujanic/readfile')
// this is comment ϵ <- pay attention

readfile(__filename, 'ASCII').then(content => console.log(content))
```
