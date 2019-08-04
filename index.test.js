const hilberCurve = require("./");

test("[truth] n=4, index=0", () => {
  expect(hilberCurve.indexToPoint(0, 4)).toEqual({ x: 0, y: 0 });
});

test("[truth] n=4, index=1", () => {
  expect(hilberCurve.indexToPoint(1, 4)).toEqual({ x: 1, y: 0 });
});

test("[truth] n=4, index=2", () => {
  expect(hilberCurve.indexToPoint(2, 4)).toEqual({ x: 1, y: 1 });
});

test("[truth] n=4, index=3", () => {
  expect(hilberCurve.indexToPoint(3, 4)).toEqual({ x: 0, y: 1 });
});

test("[truth] n=4, index=4", () => {
  expect(hilberCurve.indexToPoint(4, 4)).toEqual({ x: 0, y: 2 });
});

test("[truth] n=4, index=5", () => {
  expect(hilberCurve.indexToPoint(5, 4)).toEqual({ x: 0, y: 3 });
});

test("[truth] n=4, index=6", () => {
  expect(hilberCurve.indexToPoint(6, 4)).toEqual({ x: 1, y: 3 });
});

test("[truth] n=4, index=7", () => {
  expect(hilberCurve.indexToPoint(7, 4)).toEqual({ x: 1, y: 2 });
});

test("[truth] n=4, index=8", () => {
  expect(hilberCurve.indexToPoint(8, 4)).toEqual({ x: 2, y: 2 });
});

test("[truth] n=4, index=9", () => {
  expect(hilberCurve.indexToPoint(9, 4)).toEqual({ x: 2, y: 3 });
});

test("[truth] n=4, index=10", () => {
  expect(hilberCurve.indexToPoint(10, 4)).toEqual({ x: 3, y: 3 });
});

test("[truth] n=4, index=11", () => {
  expect(hilberCurve.indexToPoint(11, 4)).toEqual({ x: 3, y: 2 });
});

test("[truth] n=4, index=12", () => {
  expect(hilberCurve.indexToPoint(12, 4)).toEqual({ x: 3, y: 1 });
});

test("[truth] n=4, index=13", () => {
  expect(hilberCurve.indexToPoint(13, 4)).toEqual({ x: 2, y: 1 });
});

test("[truth] n=4, index=14", () => {
  expect(hilberCurve.indexToPoint(14, 4)).toEqual({ x: 2, y: 0 });
});

test("[truth] n=4, index=15", () => {
  expect(hilberCurve.indexToPoint(15, 4)).toEqual({ x: 3, y: 0 });
});

for (i = 0; i <= 5; i += 1) {
  const n = 2 ** i;
  for (let index = 0; index < n * n; index += 1) {
    test(`[inversion] n=${n}, index=${index}`, () => {
      expect(
        hilberCurve.pointToIndex(hilberCurve.indexToPoint(index, n), n)
      ).toBe(index);
    });
  }
}
