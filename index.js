// https://en.wikipedia.org/wiki/Hilbert_curve#Applications_and_mapping_algorithms

(function() {
  if (typeof module === "object" && module.exports) {
    module.exports = { indexToPoint, pointToIndex };
  } else if (typeof window === "object" && window.hilbertCurve === undefined) {
    window.hilbertCurve = { indexToPoint, pointToIndex };
  }

  function indexToPoint(index, n) {
    const point = { x: 0, y: 0 };
    let rx, ry, s;
    for (let s = 1, t = index; s < n; s *= 2) {
      rx = 1 & (t / 2);
      ry = 1 & (t ^ rx);
      rotate(point, rx, ry, s);
      point.x += s * rx;
      point.y += s * ry;
      t /= 4;
    }
    return point;
  }

  function pointToIndex(point, n) {
    let rx,
      ry,
      index = 0;
    for (let s = n / 2; s > 0; s /= 2) {
      rx = (point.x & s) > 0;
      ry = (point.y & s) > 0;
      index += s * s * ((3 * rx) ^ ry);
      rotate(point, rx, ry, n);
    }
    return index;
  }

  function rotate(point, rx, ry, n) {
    if (ry !== 0) {
      return;
    }
    if (rx === 1) {
      point.x = n - 1 - point.x;
      point.y = n - 1 - point.y;
    }
    [point.x, point.y] = [point.y, point.x];
  }
})();
