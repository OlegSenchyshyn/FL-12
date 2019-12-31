const getMin = (...args) => args.reduce((min, val) => (min < val ? min : val));
getMin(3, 0, -3);