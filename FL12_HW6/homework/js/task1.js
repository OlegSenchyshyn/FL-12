// Your code goes here
// Implement app for solve Quadratic equation.
// 	App workflow:
// 1.	User input 3 values (a, b, c) for quadratic equation (ax2 + bx + c = 0).
// 2.	If input data not valid show message in console (‘Invalid input data’).
// 3.	If possible, find Discriminant.
// 4.	Use console.log to show result, variants:
// -	x = 0;
// -	x1 = ‘value1’ and x2 = ‘value2’;
// -	no solution (when Discriminant < 0);

let a = parseFloat(
    prompt('please enter "a" to solve quadratic equation (ax2 + bx + c = 0)')
);
if (a === "" || isNaN(a)) {
    alert("‘Invalid input data’");
}
console.log(a);

let b = parseFloat(
    prompt('please enter "b" to solve quadratic equation (ax2 + bx + c = 0)')
);
if (b === "" || isNaN(b)) {
    alert("‘Invalid input data’");
}
console.log(b);

let c = parseFloat(
    prompt('please enter "c" to solve quadratic equation (ax2 + bx + c = 0)')
);
if (c === "" || isNaN(c)) {
    alert("‘Invalid input data’");
}
console.log(c);

let dis = b * b - 4 * a * c;
console.log(dis);
