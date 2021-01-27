

function Logger(message: string) {
  console.log(`Hola ${message}`);

  return function (target: unknown) {
    console.log(`Clase decorada: ${target}`);
    console.log(target);
  }
}

// function Logger(message: string) {
//   console.log(`Mensaje: ${message}`);

//   return function (target: any) {
//     console.log(`Clase decorada: ${target}`);
//     console.log(target);
//   };
// }


//@Logger('Hola mundo')

/** Calculator with basic operations */
@Logger("Carlos Parra")
export class Calculator {
  constructor() {
    // console.log('Calculator has been loaded...');
  }

  /** Sum any quantity of values */
  sum(...values: number[]): number {
    return values.reduce((previous, current) => {
      return previous + current;
    });
  }

  /** Substract any quantity of values */
  diff(...values: number[]): number {
    return values.reduce((previous, current) => {
      return previous - current;
    });
  }
}
