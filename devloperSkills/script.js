'use strict';
const age = 45;

if ('broke') {
  console.log('help help');
}

console.log('you are broke');

///// debugging
console.log();
console.table();
console.warn();
console.error();

const measureKelvin = function () {
  const measure = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('imput value:')),
  };
  const kel = measure.value + 273;
  return kel;
};
console.log(measureKelvin());
