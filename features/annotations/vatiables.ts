const apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = false;
let nothingMuch: null = null;
let nothing: undefined = undefined;
let now: Date = new Date();

let colors: string[] = ['red', 'blue', 'green'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false];

class Car {

}

let car: Car = new Car();

let point: { x: number; y: number } = {
  x: 10,
  y:20,
};

// Function
let logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json); // The type of coordinates is 'any' because TS can't predit the type return by JSON.parse
console.log(coordinates);


