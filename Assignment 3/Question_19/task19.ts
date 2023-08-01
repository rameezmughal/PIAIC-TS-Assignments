
let guest: string[] = ["Usman", "Zia khan", "Afaq"];

console.log("\nI am inviting " + guest.length + " number of people.\n");
console.log("\n" + [guest] +"\n");


guest.splice(0, 1, "Ali");
console.log(`\nI am sorry, Usman can't make it to dinner.\n`);
console.log(`\nI am now inviting in Ali on dinner.\n`);
console.log(`\nI am now inviting ${guest.length} people to dinner.\n`);
console.log("\n" +[guest] +"\n");






let newGuest: string[] = ["Ahmad", "Akbar", "Amjad"];

guest.unshift(newGuest[0]);
guest.splice(3, 0, newGuest[1]);
guest.push(newGuest[2]);

console.log(`I found a bigger dinner table, so I am inviting ${guest.length} people to dinner.);
`);

console.log(`\n${[guest]}\n`);


console.log("\nI can only invite two people to dinner.\n");


while(guest.length > 2){
    console.log(`\nSorry, ${guest.pop()}, I can't invite you to dinner.\n`);
    
}

console.log(`\nI am inviting ${guest.length} people to dinner.\n`);

console.log(`\nI am still inviting ${guest[0]} and ${guest[1]} to dinner party\n`);


guest.pop(); guest.pop();

console.log(`\nI am inviting ${guest.length} people to dinner.\n`);


console.log(`\nI am not invite any people in dinner.\n`);

console.log(guest);

