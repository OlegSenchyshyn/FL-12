let a = +prompt('Side A');
let b = +prompt('Side B');
let c = +prompt('Side C');

if (a === '' || b === '' || c === '') {
  alert('input values should be ONLY numbers');
} else if (isNaN(a) || isNaN(b) || isNaN(c)) {
  alert('input values should be ONLY numbers');
} else if (a <= 0 || b <= 0 || c <= 0) {
  alert('A triangle must have 3 sides with a positive definite length');
} else if (a === b && b === c) {
  console.log('Equilateral triangle');
} else if (a === b || a === c || b === c) {
  console.log('Isosceles triangle');
} else if (a !== b && a !== c && b !== c) {
  console.log('Scalene triangle');
} else {
  alert('Triangle doesn’t exist');
  console.log('Triangle doesn’t exist');
}
