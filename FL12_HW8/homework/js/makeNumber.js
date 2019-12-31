const makeNumber = string =>
  string
    .split('')
    .filter(i => !isNaN(i))
    .join('');

makeNumber('erer384jjjfd123');
makeNumber('123098h76gfdd'); 
makeNumber('ijifjgdj');
