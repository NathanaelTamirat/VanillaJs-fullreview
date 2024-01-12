//////// activating restict mode//////
"use strict";

let haveDriverLicense = false;
const passTest = true;

if (passTest) haveDriverLicense = false; /// detect error
if (haveDriverLicense) console.log("can drive");
// const interface = "ee"; //reserved word

//////functions//////

function logger() {
  console.log("hello logger"); /// just show the result in console doesnt return
}
logger(); // calling running invoking

/// another example
function friutProcessor(a, b) {
  const juice = `juice has ${a} oranges and ${b} apples`;
  return juice;
}
console.log(friutProcessor(2, 3));

const juicy = friutProcessor(2, 3);
console.log(juicy);

////// wehave to save it in other const in order to call it

///// constructor
const sum = new Function("a", "b", "return a+b");
console.log(sum(2, 3));

////// function is anonymous but assigned to a variable
const multiply = function (x, y) {
  return x * y;
};

/////exercise   function has its own name
function toCelicus(fahraenheit) {
  const value = (5 / 9) * (fahraenheit - 32);
  return value;
}
console.log(toCelicus(56));

//////exercise
let x = myFunction(4, 3);
function myFunction(a, b) {
  return a * b;
}
console.log(x);

//// function declaration//////

function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(23);
console.log(age1);

///////function expression/////
/////// assigning it to a constant that const is a function
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(45);
console.log(age2);

////////Arrow function////////
const calcAge3 = (birthYear) => 2034 - birthYear;
const age3 = calcAge3(1983);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age4 = 2023 - birthYear;
  const retirementYear = 65 - age4;
  return ` ${firstName} remain ${retirementYear} years to retire`;
};
const age5 = yearsUntilRetirement(1987, "bob");
console.log(age5);

///////////Concise Body Arrow Functions/////////////

const functionName = () => {}; ////takes zero parameter
const functionNames = (paramone) => {}; ////takes one parameter  doesnt need parentesis
const functionNamess = (param1, param2) => {}; ////takes single parameter

const sumNumbers = (number) => number + number; /////single line block  doesnt need curly braces
//The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return

const sumnNumberss = (number) => {
  const sum = number + number;
  return sum;
};

//////funtion calling another function///////
function cutFruitToPieces(firut) {
  return firut * 4;
}

function foodProccessors(apples, grapes) {
  const applee = cutFruitToPieces(apples);
  const grape = cutFruitToPieces(grapes);
  return ` juice with ${applee} pieces apple and ${grape} pieces of grape `;
}
const newJuice = foodProccessors(3, 4);
console.log(newJuice);

///////scope/////////
//////block and scope////////
//////block
const colorIs = () => {
  let colors = "blue";
  console.log("colors");
};

if (true) {
  let pi = "green";
  console.log(pi);
}

///////function accessing from outside/////scope

const city = "New York City";
function logCitySkyline() {
  let skyscraper = "Empire State Building";
  return "The stars over the " + skyscraper + " in " + city;
}

console.log(logCitySkyline());

////////global scope////////

const color = "blue";

const returnSkyColor = () => {
  return color; // blue
};

console.log(returnSkyColor()); // blue

//////////block scope/////////
const logSkyColor = () => {
  let color = "blue";
  console.log(color); // Prints "blue"
};

logSkyColor(); // Prints "blue"
console.log(color); // throws a ReferenceError //Variables that are declared with block scope are known as local variables because they are only available to the code that is part of the same block.

////scope pollution//////
///// having too many global variables can cause problems in a program.
let num = 50;

const logNum = () => {
  num = 100; // Take note of this line of code
  console.log(num);
};

logNum(); // Prints 100
console.log(num); // Prints 100

///////////Good Scoping////////////
/////////  A better practice would be to rename the variable inside the block.

const logVisibleLightWaves = () => {
  let lightWaves = "Moonlight";
  let region = "The Arctic";
  // Add if statement here:
  if (region === "The Arctic") {
    let lightWaves = "Northern Lights";
    console.log(lightWaves);
  }
  console.log(lightWaves);
};

logVisibleLightWaves();

/////////Arrays///////

const friends = ["natty", "bros"];
console.log(friends);

const friend = new Array("nattty", "bross");
console.log(friend);
console.log(friend[0]);
console.log(friend.length);

friends[1] = "bbeddd";
console.log(friends); //////we can mutate the const array funtion because its not primitive data
///////adding element in array

friends.push("jay"); ////// addd atthe end
friends.unshift("jhon"); /////add at the beginning
console.log(friends);

/////////remove element

friends.pop(); ///last
console.log(friends);

friends.shift(); ////begining
console.log(friends);

//////indexof and includes

console.log(friends.indexOf("natty")); /////[0]
console.log(friends.includes("natty")); ///// true

/////// challenges
const bills = [125, 555, 44];
let tips = [];
let totals = [];
function calcTips() {
  let tip;
  let total;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] >= 50 && bills[i] <= 300) {
      tip = bills[i] * 0.15;
      total = bills[i] + tip;
    } else {
      tip = bills[i] * 0.2;
      total = bills[i] + tip;
    }
    tips.push(tip);
    totals.push(total);
  }
}
calcTips();
console.log(tips);
console.log(totals);

////////objects//////

const objOne = {
  firstNames: "natty",
  lastNames: "tamirat",
  age: 2023 - 2000,
  job: "teacher",
  friends: ["natty", "him", "himself"],
};
console.log(objOne);
///// dot and bracket expression
///dot
console.log(objOne["lastNames"]);
console.log(objOne.lastNames);

/// bracket

const namee = "Names";
console.log(objOne["first" + namee]);

objOne.location = "brazil";
objOne["instagram"] = "leomessi";
console.log(objOne);

////////Method   ///// function attached with object

const Nathanael = {
  firstNames: "natnael",
  lastNames: "tamirat",
  birthYear: 2000,
  job: "student",
  friends: ["natty", "him", "himself"],
  hasDriverLicence: false,
  // calcAge5: function (birthYears) {
  //   return 2023 - birthYears;
  // },
  calcAge5: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getSummery: function () {
    return `${this.firstNames} is a ${this.calcAge5()} his job is ${
      this.job
    } he has ${this.friends.length} friends. he got ${
      this.hasDriverLicence ? "a" : "no"
    } driver licence `;
  },
};

// console.log(Nathanael.calcAge5(2000));
// console.log(Nathanael["calcAge5"](2000));

console.log(Nathanael.calcAge5());
console.log(Nathanael.age); ////more efficent than the first one
console.log(Nathanael.getSummery());

/////////challenge////////

const markBMI = {
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.weight / this.height ** 2;
    return this.BMI;
  },
};

const johnBMI = {
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.weight / this.height ** 2;
    return this.BMI;
  },
};
johnBMI.calcBMI();
markBMI.calcBMI();
console.log(markBMI.BMI);
console.log(johnBMI.BMI);

//////iteration for looping///////
for (let rep = 1; rep <= 5; rep++) {
  console.log(`help ${rep}`);
}
for (let rep = 1; rep <= 5; rep++) {
  console.log(`help`);
}

//////// break and continue ///////

////break      ////// stop

for (let i = 0; i < 10; i++) {
  if (i === 3) break;
  console.log(i);
}

////continue    ////// jumps
for (let i = 0; i < 10; i++) {
  if (i === 3) continue;
  console.log(i);
}

////////looping backward and loop in loop/////////

////////looping backward
const natty = [
  "natnael",
  "tamirat",
  2023 - 2000,
  "student",
  ["natty", "him", "himself"],
];

for (let i = natty.length - 1; i >= 0; i--) {
  console.log(natty[i]);
}

//////loop in loop////
for (let ex = 1; ex < 4; ex++) {
  console.log(`exercise ${ex}`);
  for (let i = 0; i < 6; i++) {
    console.log(`home exercise ${i}`);
  }
}

/////// while loop

let rep = 1;
while (rep <= 10) {
  console.log(`liftign day ${rep}`);
  rep++;
}
