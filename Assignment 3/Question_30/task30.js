"use strict";
let userName = ['Admin', 'Usman', 'Zia Khan', 'Afaq', 'Ali'];
for (let username of userName) {
    if (username === 'Admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
