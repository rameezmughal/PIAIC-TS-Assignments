

interface Car{
    manufacturer: string;
    model:string;
    [key: string]:string | number;
}

function createCar(manufacturer: string, model: string, options?: { [key: string]: string | number }): Car {
    let car: Car = {manufacturer, model};
if(options){
    for(let key in options){
        car[key] = options[key];
    }
}
    return car;
}
let Car = createCar("Toyota", "Honda", {color: "white", year: 2020,  optionalFeature: "sunroof"});
console.log(Car);
