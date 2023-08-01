"use strict";
let guest3 = ["Sarmad", "Usman", "Afaq", "Ali", "Ahmad", "Umer"];
console.log("\nI can only invite two people for dinner.");
while (guest3.length > 2) {
    let removeGuest = guest3.pop();
    console.log(`\nSorry, ${removeGuest}, we can't invite you to dinner.`);
}
console.log("\n------------------------------------------------");
console.log(`Dear ${guest3[0]}, you're still invited to dinner.\n`);
console.log(`Dear ${guest3[1]}, you're still invited to dinner.\n`);
guest3.pop();
guest3.pop();
console.log("My guest list is now empty.\n");
console.log("Final guest list", guest3);
