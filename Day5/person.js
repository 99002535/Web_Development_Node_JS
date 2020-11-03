function Person(name,city){
    this.name = name;
    this.city = city;
    this.printDetails = function(){
        console.log(name +" "+city);
    }
}
Person.prototype.greetMessage = function(message){
    console.log(message + this.name);
}
Person.prototype.mobile = 8885994995;
module.exports = Person;