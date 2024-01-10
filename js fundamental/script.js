////////// value and variable//////////////

//value
console.log("help me"); // we add value here
// variable
let names = "begining";
console.log(names);

let firstName = "natty";
console.log(firstName);

let myCountry = "ethiopia";
let continent = "africa";
let poplulation = 10000;

///////// data types///////

let isIsland = false;
let languages;

//bollean
true;
let jsIsFun = true;
console.log(true);
console.log(jsIsFun);

//typeof
console.log(typeof true);
console.log(typeof jsIsFun);
console.log(typeof 23);
console.log(typeof "jonas");
console.log(typeof isIsland);
console.log(typeof myCountry);
console.log(typeof continent);
console.log(typeof poplulation);
console.log(typeof languages);

//dynamic typing
let boat = true;
boat = "no";
console.log(typeof boat);

// undefined
let year;
console.log(year);
console.log(typeof year);

// null
console.log(typeof null); // js bug

//////////variable assigning or declaring//////

let age = 34;
age = 35;

let language = "amharic";
const height = 1.89;

const birthYear = 2000;
// birthYear = 2001;   // this is an error
// const job;    // error

var job = "programmer";
job = "student";

////math operators/////
const now = 2023;
const ageNaty = now - 2000;
const ageEdem = now - 1999;

console.log(ageNaty, ageEdem);

let x = 10 + 5;
x += 10;
x *= 10;
x++; ///add one

console.log(x);
console.log(now - 2000 > now - 1999);
console.log(now - 2000 < now - 1999);

//execrcise  finding bmi and ishigher bmi
const massMark = 78;
const heightMark = 1.69;
const massNatty = 92;
const heightNatty = 1.95;

let markBmi;
let nattyBmi;
markBmi = massMark / heightMark ** 2;
nattyBmi = massNatty / heightNatty ** 2;
console.log(markBmi, nattyBmi);

let markHigherBmi = markBmi > nattyBmi;
let nattyHigherBmi = nattyBmi > markBmi;
console.log(markHigherBmi, nattyHigherBmi);

//sting and templates lierals

const hisName = "michael";
const hisAge = 45;
const hisjob = "teacher";
const hisBd = 1980;

let opp;
opp = "i'm" + " " + hisName + " " + age + " " + hisjob + " " + hisBd;

console.log(opp);

//template literals

const cv = `i'm ${hisName}`;
console.log(cv);

console.log(`molla
natnael
tamirat`);

console.log(
  "hello \n\
how are you "
);

////if else/////

const birthDate = 56;

if (birthDate < 18) {
  console.log("too young");
} else {
  console.log("fits");
}

let century;
const birthdYear = 2005;

if (birthdYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

////// type conversion and coercison/////

// type conversion
const inputYear = "1992";
console.log(inputYear + 12); //// str and number
console.log(Number(inputYear) + 18); //// number and number

console.log(Number("jonas")); ///// NaN  its kind of number but its invalid
console.log(String(23)); /// change to string

/// type coercion

console.log("im " + 23 + " years old"); //23 was number but js changed to string its hidden
console.log("2" + "3" - 5); //// 23-5=18
console.log("2" + "3" + 5); //// 235
console.log("2" - "3" + "5"); //// -15

//////truthy and falsy///////

console.log(Boolean(0)); ///falsy values 0, '', undefined,null,NaN
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean(""));

const birr = 100; // true value
if (birr) {
  console.log("i have birr");
} else {
  console.log("im broke");
}

//equality operator

const dollar = "23"; // the == is a loose equality  // while the === is a strict equality
if (dollar == 23) {
  console.log("equal");
} else {
  console.log("not equal");
}

//// prompt//////

// const eat = prompt("whawt is your name? ");
// console.log(eat);

// const eaat = Number(prompt("what is your age?"));
// console.log(eaat);

///////// elseif/////

// if (){

// }else if
// (){

// }

//////////boolean logic//////////

const hasDriverLicense = true;
const hasGoodVision = true;

// && and    || or  !  not

if (hasDriverLicense && hasGoodVision === true) {
  console.log("good driver");
} else {
  console.log("not good driver");
}

/// switch statment/////

const day = "monday";
switch (day) {
  case "monday":
    console.log("plan to eat bbq");
    break;
  case "tuesday":
    console.log("its free");
    break;
  case "wendnesday": /// no break here so it will use the case of the next one
  case "thursday":
    console.log("work day");
    break;
}

//// statement and expressions/////

// expression
6 + 79;
56 + 8;
4566;
// statement
//if  else statement

///the conditional(ternary) operator/////

const herAge = 34;

age >= 28 ? console.log("she is valid") : console.log("she is young");

const drink = herAge >= 18 ? "can drink alcohol" : " drink water";
console.log(drink);

/////////exercise////////
// tip calculator
// const bill = Number(prompt("the  bill is? "));
// let total;
// if (50 < bill < 300) {
//   total = bill + bill * 0.15;
//   console.log(total);
// } else {
//   total = bill + bill * 0.2;
//   console.log(total);
// }

const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];
for (let i = 0; i < bill.length; i++) {
  let tip;
  let total;

  if (bill[i] <= 300 && bill[i] >= 50) {
    tip = bill[i] * 0.15;
    total = bill[i] + tip;
  } else {
    tip = bill[i] * 0.2;
    total = bill[i] + tip;
  }

  tips.push(tip);
  totals.push(total);
}
console.log(`tips: ${tips}`);
console.log(`totals: ${totals}`);

/////tenary way//////
const billl = 75;
const tipss = billl <= 300 && billl >= 50 ? billl * 0.15 : billl * 0.2;
console.log(tipss);
