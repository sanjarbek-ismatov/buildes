Buildes

with the help of this package, you can easily convert the source code into a bundle through esbuild

Usage

```javascript
// builder.js
const {builder} = require('buildes')
builder({
	input: 'index.js',
	bundle: true,
	packages: 'external',
	platform: 'node',
	minimized: true,
	output: 'dist/bundle.js'
})

// package.json

"scripts": {
	"build": "node builder.js"
}

```

API

input: string - this field for input file

bundle: boolean - for bundle

packages: string - to exclude external packages

platform: string - for which platform used

minimized: boolean - for minify code

output: string - path for after build
