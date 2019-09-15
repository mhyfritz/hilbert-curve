const hilberCurve = require("../");

test("[truth] order=2, index=0", () => {
  expect(hilberCurve.indexToPoint(0, 2)).toEqual({ x: 0, y: 0 });
});

test("[truth] order=2, index=1", () => {
  expect(hilberCurve.indexToPoint(1, 2)).toEqual({ x: 1, y: 0 });
});

test("[truth] order=2, index=2", () => {
  expect(hilberCurve.indexToPoint(2, 2)).toEqual({ x: 1, y: 1 });
});

test("[truth] order=2, index=3", () => {
  expect(hilberCurve.indexToPoint(3, 2)).toEqual({ x: 0, y: 1 });
});

test("[truth] order=2, index=4", () => {
  expect(hilberCurve.indexToPoint(4, 2)).toEqual({ x: 0, y: 2 });
});

test("[truth] order=2, index=5", () => {
  expect(hilberCurve.indexToPoint(5, 2)).toEqual({ x: 0, y: 3 });
});

test("[truth] order=2, index=6", () => {
  expect(hilberCurve.indexToPoint(6, 2)).toEqual({ x: 1, y: 3 });
});

test("[truth] order=2, index=7", () => {
  expect(hilberCurve.indexToPoint(7, 2)).toEqual({ x: 1, y: 2 });
});

test("[truth] order=2, index=8", () => {
  expect(hilberCurve.indexToPoint(8, 2)).toEqual({ x: 2, y: 2 });
});

test("[truth] order=2, index=9", () => {
  expect(hilberCurve.indexToPoint(9, 2)).toEqual({ x: 2, y: 3 });
});

test("[truth] order=2, index=10", () => {
  expect(hilberCurve.indexToPoint(10, 2)).toEqual({ x: 3, y: 3 });
});

test("[truth] order=2, index=11", () => {
  expect(hilberCurve.indexToPoint(11, 2)).toEqual({ x: 3, y: 2 });
});

test("[truth] order=2, index=12", () => {
  expect(hilberCurve.indexToPoint(12, 2)).toEqual({ x: 3, y: 1 });
});

test("[truth] order=2, index=13", () => {
  expect(hilberCurve.indexToPoint(13, 2)).toEqual({ x: 2, y: 1 });
});

test("[truth] order=2, index=14", () => {
  expect(hilberCurve.indexToPoint(14, 2)).toEqual({ x: 2, y: 0 });
});

test("[truth] order=2, index=15", () => {
  expect(hilberCurve.indexToPoint(15, 2)).toEqual({ x: 3, y: 0 });
});

test("[truth] order=2", () => {
  const data = Array.from({ length: 4 * 4 }, (_, i) => i + 1);
  expect(hilberCurve.construct(data, 2)).toEqual([
    1,
    2,
    15,
    16,
    4,
    3,
    14,
    13,
    5,
    8,
    9,
    12,
    6,
    7,
    10,
    11
  ]);
});

for (order = 0; order <= 5; order += 1) {
  const n = Math.pow(2, order);
  for (let index = 0; index < n * n; index += 1) {
    test(`[inversion] order=${order}, index=${index}`, () => {
      expect(
        hilberCurve.pointToIndex(hilberCurve.indexToPoint(index, order), order)
      ).toBe(index);
    });
  }
}
