"use strict";
function describe_city(city, country = 'Pakistan') {
    console.log(`${city} is in ${country}.`);
}
describe_city('karachi');
describe_city('Lahore');
describe_city('Islamabad', 'India');
