
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix != null && matrix[0] != null ? matrix.reduce((acc, cv, index) => {
    return (index + 1) % 2 == 0 ? acc.concat(cv.reverse()) : acc.concat(cv);
  }) : [];
}
