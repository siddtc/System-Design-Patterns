abstract class Vehicle{
     abstract startEngine():void
    
}

// class Car extends Vehicle{
//     startEngine(): void {
//         console.log("Starting car engine...");
//     }
// }

class Truck extends Vehicle{
    startEngine(): void {
        console.log("Starting truck engine...");
    }
}

class Bike extends Vehicle{
    startEngine(): void {
        console.log("Starting Bike engine...");
    }
}

enum EVehicleType{
    Car = "Car",
    Truck = "Truck",
    Bike = "Bike",
}

class FactoryClass {
    public getVehicle(vehicleType:EVehicleType):Vehicle{
        switch(vehicleType){
            case EVehicleType.Car:{
                // return new Car();
            }
            case EVehicleType.Truck:{
                return new Truck();
            }
            case EVehicleType.Bike:{
                return new Bike();
            }
            default:{
                throw new Error(`Invalid vehicle type: ${vehicleType}`);
            }
        }
    }
};


const temp = new FactoryClass();

temp.getVehicle(EVehicleType.Car).startEngine()