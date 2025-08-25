

const myArray: number[] = [1,2,3,4,5,6];

// const myArray2 = [...myArray];
const myArray2 = structuredClone(myArray);

myArray2.push(7);
// myArray2.push('hola mundo')

console.log({myArray, myArray2});

// for ( const myNumber of myArray) {
//     console.log(myNumber + 10);
// }