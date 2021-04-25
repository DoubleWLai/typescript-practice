class Vehicle {
  constructor(public color: string) {}
}

const car = new Vehicle('red');
console.log(car.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
}