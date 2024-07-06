class Car{
    public seats: number;
    public color: string;
    public engine: string;
    public type: string;


    constructor(){
    }

    public display(){
        console.log(this);
    }
}

interface ICarBuilder{
    setColor(color:string):void;
    setSeats(seats:number):void;
    buildCar():Car;
}

class CompanyBuilder implements ICarBuilder{

    private car:Car

    constructor(){
        this.car = new Car();
    }

    setColor(color:string){
        this.car.color = color;
    };

    setSeats(seats:number){
        this.car.seats = seats;
    }

    public buildCar():Car{
        return this.car;
    }
}


class CustomCarBuilder implements ICarBuilder{
    private car:Car;

    constructor(){
        this.car = new Car();
    }

    public setColor(color:string){
        this.car.color = color;
    };

    public setSeats(seats:number){
        this.car.seats = seats;
    }

    public buildCar():Car{
        return this.car;
    }
}

class Salesperson{

    private builder:any;

    Salesperson(builder:any){
        this.builder = builder;
    }

    public getSportsCar():Car{

        return this.builder.setColor().setSeats().buildCar();
    }

    public getFamilyCar(): Car{
        return this.builder.setColor().setSeats().buildCar();
    }
}