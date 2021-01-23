import { StringValidator } from './interfaces/Validation';
import { Calculator } from './utils/calc';
import { LettersOnlyValidator } from './validators/LettersOnlyValidator';
import { ZipCodeValidator } from './validators/ZipCodeValidator';

// Some samples to try
let strings = ['Hello', '98052', '101'];

// Validators to use
let validators: { [s: string]: StringValidator } = {};
validators['ZIP code'] = new ZipCodeValidator();
validators['Letters only'] = new LettersOnlyValidator();

// Show whether each string passed each validator
strings.forEach((s) => {
  for (let name in validators) {
    console.log(
      `"${s}" - ${
        validators[name].isAcceptable(s) ? 'matches' : 'does not match'
      } ${name}`
    );
  }
});

console.log('Hola mundo: Maty');


const calc = new Calculator();
console.log(calc.sum(1,2,3,4,5,6,7,8))