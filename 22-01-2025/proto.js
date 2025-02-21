// Parent class (Vehicle)
class Vehicle {
    constructor(brand) {
      this.brand = brand;
    }
  
    start() {
      console.log(`${this.brand} vehicle is starting.`);
    }
  }
  
  // Child class (Car) that inherits from Vehicle
  class Car extends Vehicle {
    constructor(brand, model) {
      super(brand);  // Call the parent class constructor
      this.model = model;
    }
  
    // Override start method
    start() {
      console.log(`${this.brand} ${this.model} is starting with a roar!`);
    }
  }
  
  // Create instances
  const vehicle = new Vehicle('Generic');
  const car = new Car('Toyota', 'Corolla');
  
  vehicle.start();  // Outputs: "Generic vehicle is starting."
  car.start();      // Outputs: "Toyota Corolla is starting with a roar!"
  