class Vehicle{
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return "beep";
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}

let v1 = new Vehicle("toyota","camry","1995");

class Car extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 4;

    }
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);

class Motorcycle extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 2;
    }
    revEngine(){
        return "VROOM!!!";
    }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

class Garage {
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(newVehicle){
        if (!(newVehicle instanceof Vehicle)){
           return "Only vehicles allowed in here!";
        }
        if (this.vehicles.length >= this.capacity){
            return "Sorry we are full.";
        }
        else{
            this.vehicles.push(newVehicle)
            return "Vehicle added";
        };
    }

}

let garage = new Garage(2);