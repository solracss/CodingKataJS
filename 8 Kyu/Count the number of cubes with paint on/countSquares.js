var countSquares = function (cuts) {
  if (cuts === 0) {
    return 1;
  }
  var notPainted = Math.pow(cuts - 1, 3);
  var totalPieces = Math.pow(cuts + 1, 3);
  return totalPieces - notPainted;
};

// Tests
describe('Random tests', function () {
  it('1000 Random Tests', function () {
    var n;
    for (i = 0; i < 1000; i++) {
      n = getRandomInt(1, 2000);
      Test.assertSimilar(countSquares(n), countSquaresTest(n));
    }
  });
});
