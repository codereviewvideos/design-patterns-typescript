export enum VehicleType {
  Car = "car",
  Bike = "bike",
}

type Vehicle = {
  move(): string;
};

const car: Vehicle = {
  move: () => "Driving a car...",
};

const bike: Vehicle = {
  move: () => "Riding a bike...",
};

export class VehicleFactory {
  static createVehicle(type: VehicleType): Vehicle {
    switch (type) {
      case VehicleType.Car:
        return car;
      case VehicleType.Bike:
        return bike;
    }
  }
}
