import { VehicleFactory, VehicleType } from "./factory";

describe("VehicleFactory", () => {
  it("should create a car", () => {
    const vehicle = VehicleFactory.createVehicle(VehicleType.Car);
    expect(vehicle.move).toBeDefined();
    expect(vehicle.move()).toEqual("Driving a car...");
  });

  it("should create a bike", () => {
    const vehicle = VehicleFactory.createVehicle(VehicleType.Bike);
    expect(vehicle.move).toBeDefined();
    expect(vehicle.move()).toEqual("Riding a bike...");
  });
});
