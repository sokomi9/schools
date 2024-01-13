const school = require("./schools");
const uni = require("./universities");
const college = require("./colleges");
const primary = require("./primary");

const national = new school("Alliance");
console.log(national.getName());
national.setName("Starehe");
console.log(national.getName());

const county = new school("Madende");
console.log(county.getName());
county.setName("Mukhuyu");
console.log(county.getName());

const campus = new uni("Multimedia");
console.log(campus.getName());
campus.setName('Nairobi');
console.log(campus.getName());

const colle = new college("Kisumu");
console.log(colle.getName());
colle.setName("Mungatsi");
console.log(colle.getName());

const pri = new primary("Shitoto");
console.log(pri.getName());
pri.setName("Mukambi");
console.log(pri.getName());