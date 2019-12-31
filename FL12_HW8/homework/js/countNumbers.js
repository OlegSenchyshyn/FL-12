const makeNumber = string =>
  string
    .split('')
    .filter(i => !isNaN(i))
    .join('');

function countNumbers(string) {
  let arr = makeNumber(string);
  let result = {};
  for (let i of arr) {
    result[i] ? (result[i] += 1) : (result[i] = 1);
  }
  return result;
}

countNumbers('erer384jj4444666888jfd123');
