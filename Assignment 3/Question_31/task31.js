"use strict";
let usernames = ["John", "Jane", "Mike", "Anna"];
usernames.pop();
usernames.pop();
usernames.pop();
usernames.pop();
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    console.log("Nothing!");
}
