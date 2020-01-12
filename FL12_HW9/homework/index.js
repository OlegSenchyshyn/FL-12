const number30 = 30,
  year2019 = 2019,
  number2 = 2,
  msInDay = 86400000;

// 1.
function convert(...args) {
  let arr = [];
  for (let i in args) {
    if (typeof args[i] === 'string') {
      args[i] = parseInt(args[i]);
      arr.push(args[i]);
    } else if (typeof args[i] === 'number') {
      args[i] = '' + args[i];
      arr.push(args[i]);
    }
  }
  return arr;
}

// 2.
function executeforEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

// 3.
function mapArray(arr, callback) {
  let newArr = [];
  executeforEach(arr, function(el) {
    newArr.push(callback(+el));
  });
  return newArr;
}

// 4.
function filterArray(arr, callback) {
  let newArr = [];
  executeforEach(arr, function(el) {
    if (callback(el)) {
      newArr.push(el);
    }
  });
  return newArr;
}

// 5.
function flipOver(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

// 6.
function makeListFromRange(arr) {
  let newArr = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    newArr.push(i);
  }
  return newArr;
}

// 7.
const actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
];

function getArrayOfKeys(actors, name) {
  let nameArr = [];
  executeforEach(actors, function(actorsName) {
    nameArr.push(actorsName[name]);
  });
  return nameArr;
}

// 8.
function substitute(arr) {
  return mapArray(arr, el => el < number30 ? '*' : el);
}

// 9.
const date = new Date(year2019, 0, number2);

function getPastDay(date, daysAgo) {
  return new Date(date.getTime() - daysAgo * msInDay).getDate();
}

// 10.
function formatDate(date) {
  let year = date.getFullYear(),
    month = 1 + date.getMonth(),
    day = date.getDate(),
    hours = date.getHours(),
    minutes = date.getMinutes();
  return `${year}/${month}/${day} ${hours}:${minutes}`;
}
