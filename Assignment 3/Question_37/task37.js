"use strict";
function Make_shirt(size = 'Large', message = 'I love TypeScript.') {
    console.log(`The ${size} size of the shirt and the message '${message}' printed on it.`);
}
Make_shirt();
Make_shirt('medium');
Make_shirt('small', 'I like shirt');
