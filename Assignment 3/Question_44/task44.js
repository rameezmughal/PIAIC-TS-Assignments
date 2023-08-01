"use strict";
function OrderSandwich(...items) {
    console.log("\nSandwich Order Summary: \n");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please add some items.");
    }
    else {
        console.log(`Making a sandwich with ${items.join(`, `)}`);
    }
    console.log("----------------------------------------");
}
OrderSandwich("Tomato", "Mayonnaise", "lettuce");
OrderSandwich("Ham", "Cheese");
OrderSandwich();
