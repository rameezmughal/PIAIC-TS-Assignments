

let guest2: string[] = ["Zia Khan", "Usman", "Afaq"];

console.log("\nI found a bigger dinner table!");



guest2.unshift("Ali");

guest2.splice(2,0,"Ahmad");


guest2.push("Akbar");


for(let newGuest of guest2){
    console.log(`\nDear ${[newGuest]},\nYou are cordially invited to dinner at my place. The dinner will be an opportunity to have engaging conversations and celebrate your remarkable contributions to the world.\nLooking forward to your presence!\nBest regards,\n`);

}



