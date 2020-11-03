class Vehicle{
    constructor(brand,price){
        this.brand = brand;
        this.price = price;
    }
    set details(discount){
        this.brand = this.brand.toUpperCase();
        this.price = this.price - discount;
    }
    get details(){
        return this.brand+" "+this.price;
    }
}
gaadi = new Vehicle('Audi','2000000');
console.log(gaadi);
gaadi.details = '100000';
console.log(gaadi.details);