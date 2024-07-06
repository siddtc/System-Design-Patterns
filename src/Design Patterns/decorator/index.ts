interface IPizza {
  cost(): number;
  description(): string;
}
class Pizaa implements IPizza {
  desc: string;

  constructor() {
    this.desc = 'Normal Coffe';
  }

  cost() {
    return 5;
  }

  description(): string {
    return this.desc;
  }
}


class PizaaToppingDecorator implements IPizza{
    public basePizza: IPizza;

    constructor(basePizza: IPizza){
        this.basePizza = basePizza;
    }


    cost(){
        return this.basePizza.cost();
    }

    description(): string {
        return this.basePizza.description();
    }
}


class MushRoomToppings extends PizaaToppingDecorator{

    cost(){
        return this.basePizza.cost() + 10;
    }

    description(): string {
        return this.basePizza.description()+", Musroom";
    }
}

class OreganoTopping extends PizaaToppingDecorator{

    cost(){
        return this.basePizza.cost() + 10;
    }

    description(): string {
        return this.basePizza.description()+", Oregano";
    }
}


let pizza:IPizza = new Pizaa();
console.log(pizza.description());


pizza = new MushRoomToppings(pizza);
console.log(pizza.description());

pizza = new OreganoTopping(pizza);
console.log(pizza.description());