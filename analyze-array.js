export function analyzeArray(array) {
  const average = _averageValue(array);
  const min = _minValue(array);
  const max = _maxValue(array);
  const length = array.length;

  return { average, min, max, length };
}

function _averageValue(array) {
  const sum = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return sum / array.length;
}

function _minValue(array) {
  const minValue = array.reduce((min, currentValue) => {
    return currentValue < min ? currentValue : min;
  }, array[0]);

  return minValue;
}

function _maxValue(array) {
  const maxValue = array.reduce((max, currentValue) => {
    return currentValue > max ? currentValue : max;
  }, array[0]);

  return maxValue;
}
