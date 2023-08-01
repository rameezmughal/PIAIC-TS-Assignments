"use strict";
let currentUsers = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eric'];
let newUsers = ['Frank', 'George', 'Henry', 'Alice', 'BOB'];
for (let new_users of newUsers) {
    if (currentUsers.map(user => user.toLocaleLowerCase()).includes(new_users.toLocaleLowerCase())) {
        console.log(`The ${new_users} will need to enter a new username`);
    }
    else {
        console.log(`The ${new_users} is available.`);
    }
}
