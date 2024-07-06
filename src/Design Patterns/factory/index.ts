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

class FactoryClass {

    public getVehicle(vehicleType:string):Vehicle{
        switch(vehicleType){
            case "Car":{
                // return new Car();
            }
            case "Truck":{
                return new Truck();
            }
            case "Bike":{
                return new Bike();
            }
            default:{
                throw new Error(`Invalid vehicle type: ${vehicleType}`);
            }
        }
    }
};


const temp = new FactoryClass();

temp.getVehicle("Car").startEngine()