const hilberCurve = require("./");

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
