# Hilbert curve mapping

## Installation

```bash
npm install hilbert-curve
```

## Usage

```javascript
const hilbertCurve = require("hilbert-curve");
```

For direct use in the browser, you can simply pull in `index.js` with a `<script>` tag

```html
<script src="node_modules/hilbert-curve/index.js"></script>
<!-- or via unpkg -->
<script src="unpkg.com/hilbert-curve"></script>
```

![](./hilbert-curve-numbering.png)

### `hilbertCurve.indexToPoint(i, n)`

Given an index `i`, return the point on the Hilbert curve of order `n`
(`n` by `n` square, with `n` being a power of 2), e.g.

```javascript
hilbertCurve.indexToPoint(17, 8);
// { x: 1, y: 4 }
```

### `hilbertCurve.pointToIndex({x, y}, n)`

Inverse: given a point `{x,y}` on the Hilbert curve of order `n`, return the index, e.g.

```javascript
hilbertCurve.pointToIndex({ x: 5, y: 2 }, 8);
// 55
```
