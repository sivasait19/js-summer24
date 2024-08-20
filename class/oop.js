const car1 = {
    brand:"Ford",
    year:"1998",
    color:"red",
    model:"mustang",
};

const car2 ={
    brand:"Toyota",
    year:"1998",
    color:"white",
    model:"camry",
};

function generateCar(brand, year, color, model){
    return{
        brand: brand,
        year: year,
        color,
        model,
    };
}
const car3 = generateCar("tesla", "2020", "white", "model y");

//OOP: we use constructot function to create objects
//difference vs normal functions: capitalize function name for the object, no "return" keyword is used and dont create object to return
function Car(brand, year, color, model){
    this.brand = brand;
    this.year = year;
    this.color = color;
    this.model = model;
}
car1.prototype.honk = function(){
    console.log("beep beep");
};


Car.prototype.setAC = function(fahrTemp) {
    this.fahrTemp = fahrTemp;
    console.log("AC is set to:",this.fahrTemp);

};
f (fahrTemp){
    this.fahrTemp = fahrTemp;
    console.log("ac is set to:" ,this.fahrTemp);
};
const car4 = new Car("tesla", "2020", "white", "model y");


car4.setAC(70);

const car5 = new Car()