// Component
interface CarComponent {
    getDetails(): string;
}

// Leaf
class Cars implements CarComponent {
    private make: string;
    private model: string;
    private price: number;

    constructor(make: string, model: string, price: number) {
        this.make = make;
        this.model = model;
        this.price = price;
    }

    public getDetails(): string {
        return `${this.make} ${this.model} ($${this.price})`;
    }
}

// Composite
class CarGroup implements CarComponent {
    private name: string;
    private cars: CarComponent[] = [];

    constructor(name: string) {
        this.name = name;
    }

    public add(car: CarComponent): void {
        this.cars.push(car);
    }

    public remove(car: CarComponent): void {
        const index = this.cars.indexOf(car);
        if (index !== -1) {
            this.cars.splice(index, 1);
        }
    }

    public getDetails(): string {
        const details = this.cars.map(car => car.getDetails()).join(", ");
        return `${this.name}: [${details}]`;
    }
}


// Client code
const car1 = new Cars("Toyota", "Camry", 24000);
const car2 = new Cars("Honda", "Civic", 22000);
const car3 = new Cars("Ford", "Mustang", 26000);
const car4 = new Cars("Tesla", "Model 3", 35000);

const lot1 = new CarGroup("Lot 1");
lot1.add(car1);
lot1.add(car2);

const lot2 = new CarGroup("Lot 2");
lot2.add(car3);
lot2.add(car4);

const dealership = new CarGroup("Dealership");
dealership.add(lot1);
dealership.add(lot2);

console.log(dealership.getDetails());
