let a = +prompt('Please enter value for "a" to solve Quadratic Equation (ax2 + bx + c = 0)');
let b = +prompt('Please enter value for "b" to solve Quadratic Equation (ax2 + bx + c = 0)');
let c = +prompt('Please enter value for "c" to solve Quadratic Equation (ax2 + bx + c = 0)');
const four = 4;
const two = 2;
if (a === 0 || isNaN(a) || isNaN(b) || isNaN(c)) {
  alert('Invalid input data');
} else {
  let discriminant = b * b - four * a * c;
  if (discriminant < 0) {
    console.log('no solution');
  } else if (discriminant === 0) {
    console.log('x = 0');
  } else {
    const x1 = Math.round((-b + Math.sqrt(discriminant)) / (two * a));
    const x2 = Math.round((-b - Math.sqrt(discriminant)) / (two * a));
    console.log('x1 = ' + x1 + ' and x2 = ' + x2);
  }
}
