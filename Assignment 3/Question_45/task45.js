"use strict";
function createCar(manufacturer, model, options) {
    let car = { manufacturer, model };
    if (options) {
        for (let key in options) {
            car[key] = options[key];
        }
    }
    return car;
}
let Car = createCar("Toyota", "Honda", { color: "white", year: 2020, optionalFeature: "sunroof" });
console.log(Car);
