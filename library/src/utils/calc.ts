import { connect, counter, frozen, ini, Logger, test, confirm, prefix01 } from './../decorators/common';

/** Calculator with basic operations */
@frozen
@ini
@Logger('Hola mundo')
export class Calculator {
  @prefix01("-> -> -> ")
  total = 0; //?
  constructor() {
    // console.log('Calculator has been loaded...');
  }

  @confirm(true)
  /** Sum any quantity of values */
  sum(...values: number[]): number {
    return values.reduce((previous, current) => {
      return previous + current;
    });
  }

  // (f ∘ g)(x) es equivalente f(g(x)).
  // (connect ∘ counter)(diff) es equivalente connect(counter(diff)).
  @connect()
  @counter() 
  @test()
  /** Substract any quantity of values */
  diff(...values: number[]): number {
    return values.reduce((previous, current) => previous - current); //?
  }
}


const calc = new Calculator();
console.log(calc.total);
// //console.log(calc.description);

// for (let key in calc) {
//   console.log(`Key: ${key}`);
// }

//class Sc01 extends Calculator{}

const result = calc.sum(1,2,3); //?