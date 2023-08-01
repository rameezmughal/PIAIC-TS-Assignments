"use strict";
let guest1 = ["Hamid", "Raza", "Usman"];
guest1.splice(2, 1, "Ali");
for (let newGuest of guest1) {
    console.log(`Dear ${[newGuest]},
     we would be honored to have you at our dinner. Your genius and contributions to physics have inspired generations. Please join us for an evening of stimulating conversation and delightful company."

`);
}
console.log("Unfortunately, Afaq can't make it to dinner. I have invited Ali instead.");
console.log("-------------------------------------------------------------------------------");
console.log("\n Print a second set of invitation messages, one for each person who is still in your list.");
for (let newGuest of guest1) {
    console.log(`\n Dear ${[newGuest]},
     we would be honored to have you at our dinner. Your genius and contributions to physics have inspired generations. Please join us for an evening of stimulating conversation and delightful company." 

`);
}
