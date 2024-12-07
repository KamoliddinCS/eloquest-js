class Car {
    constructor(brand, model, topSpeed) {
        this.brand = brand;
        this.model = model;
        this.topSpeed = topSpeed;
    }

    getCarInfo() {
        return `This machine is ${this.brand} ${this.model}, and its top speed is ${this.topSpeed}.`;
    }
}

