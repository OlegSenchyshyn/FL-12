function pipe(number) {
  for (let i = 1; i < arguments.length; i++) {
    number = arguments[i](number);
  }
  return number;
}

const addOne = x => x + 1;

pipe(1, addOne);
pipe(1, addOne, addOne);
