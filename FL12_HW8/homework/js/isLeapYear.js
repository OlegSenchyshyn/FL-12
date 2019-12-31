function isLeapYear(val) {
  let year = new Date(val).getFullYear();
  if (isNaN(year)) {
    return 'Invalid Date';
  }
  if (new Date(year, 1, 29).getDate() === 29) {
    return year + ' is a leap year';
  }
  return year + ' is not a leap year';
}

isLeapYear('2020-01-01 00:00:00');
