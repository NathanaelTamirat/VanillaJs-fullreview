//// exercises////////// trying assign const value///
const entree = "Enchiladas";
console.log(entree);
entree = "tacos"; ////error

//// mathematical excersise////
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;
console.log("The value of levelUp:", levelUp);
console.log("The value of powerLevel:", powerLevel);
console.log("The value of multiplyMe:", multiplyMe);
console.log("The value of quarterMe:", quarterMe);

/////incrememnt and decrement//////
let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++;
lostDollar--;

///////stirng concatenation with variable/////

const favouriteAnimal = "dog";
console.log(`my favourite animal: ${favouriteAnimal}`);

///////string interpolation///////template literals
let myName = "Natty";
let myCity = "wuhan";

console.log(`My name is ${myName}. My favorite city is ${myCity}`);

//////type of operator////////
let newVariable = "Playing around with typeof.";
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);

///////kelvin to celicus then to fahranite/////

/////c=k-273.15

const kelvin = 293;
const celicuss = kelvin - 273.15;
console.log(celicuss);
const fahraenheits = celicuss * (9 / 5) + 32;
console.log(Math.floor(fahraenheits));

/////////dog year/////////
/////human year to dog year

const theFirstTwoYearsEach = 10.5;
const theFollowingYear = 4;
const myAge = 23;

const earlyTwo = theFirstTwoYearsEach * 2;
const remiaingAge = (23 - 2) * 4;

const HumanToDog = earlyTwo + remiaingAge;

console.log(HumanToDog);
//////conditional///////

let mood = "sleepy";
let tirednessLevel = 6;
if (mood === "sleepy" && tirednessLevel > 8) {
  console.log("Time to sleep");
} else {
  console.log("not bed time yet");
}

///////truthy and falsy//////

let wordCount = true; /// or wec can ues 0 and 1 as true and flase

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log("Better get to work!");
}

let favoritePhrases = "Hello World!";

if (favoritePhrases) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log("This string is definitely empty.");
}

/////truthy and falsy continued//////

//////Say you have a website and want to take a user’s username to make a personalized greeting. Sometimes, the user does not have an account,
////// making the username variable falsy. The code below checks if username is defined and assigns a default string if it is not:

let username = "";
let defaultName;

if (username) {
  defaultName = username;
} else {
  defaultName = "Stranger";
}

console.log(defaultName); // Prints: Stranger

/////truthy and falsy continued//////

let tool = "";

let writingUtensil = tool || "pen"; /// we can replace the tool value if it is falsy

console.log(`The ${writingUtensil} is mightier than the sword.`);

////// what is we assign it

let tools = "";
tools = "marker";
let writingUtensils = tools || "pen"; /// we are using the assigned value

console.log(`The ${writingUtensils} is mightier than the sword.`);

///////ternary operator///////refactor it to ternary

let isLocked = false;

if (isLocked) {
  console.log("You will need a key to open the door.");
} else {
  console.log("You will not need a key to open the door.");
}

isLocked
  ? console.log("You will need a key to open the door.")
  : console.log("You will not need a key to open the door.");

/////////esle if ////////
let season = "summer";

if (season === "spring") {
  console.log("It's spring! The trees are budding!");
} else if (season === "winter") {
  console.log("It's winter! Everything is covered in snow.");
} else if (season === "fall") {
  console.log("It's fall! Leaves are falling!");
} else if (season === "summer") {
  console.log("It's sunny and warm because it's summer!");
} else {
  console.log("Invalid season.");
}

///////switch///////

let athleteFinalPosition = "first place";
switch (athleteFinalPosition) {
  case "first place":
    console.log("You get the gold medal!");
    break;
  case "second place":
    console.log("You get the silver medal!");
    break;
  case "third place":
    console.log("You get the bronze medal!");
    break;
  default:
    console.log("No medal awarded.");
    break;
}

/////// magic eight ball//////

let userName = "";
userName ? console.log(`Hello, ${userName}!`) : console.log("hello");
let userQuestion = "is lebron lair? ";
console.log(userQuestion);
const randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

switch (randomNumber) {
  case 0:
    console.log("it is certain");
    break;
  case 1:
    console.log("it is decidedly so");
    break;
  case 2:
    console.log("replay hazy try again");
    break;
  case 3:
    console.log("cant predict now");
    break;
  case 4:
    console.log("dont count on it");
    break;
  case 5:
    console.log("my sources say no");
    break;
  case 6:
    console.log("outlook no so good");
    break;
  case 7:
    console.log("signs point to yes");
    break;
}

eightBall = randomNumber;
console.log(eightBall);

///////Race Day//////

const runnerAge = 20;
let registration = "Early";
const raceNumberForLate = Math.floor(Math.random() * 1000);
const raceNumberForEarly = Math.floor(
  Math.random() * (Number.MAX_SAFE_INTEGER + 1000)
);
const adultEarlyTime = "run at 9:30 AM";
const adultLateTime = "run at 11:00 AM";
const youthLateTime = "run at 12:30 AM";

runnerAge > 18 && registration
  ? console.log(`Race Number is ${raceNumberForEarly}`)
  : console.log(`Race Number is ${raceNumberForLate}`);

switch (true) {
  case runnerAge > 18 && registration:
    console.log(adultEarlyTime);
    break;
  case runnerAge > 18 && registration === "Late":
    console.log(adultLateTime);
    break;
  case runnerAge < 18:
    console.log(youthLateTime);
    break;
}

/////////functions //////////
//////defult parameter///////

function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

//// an=othere example////

function moniterCount(rows, column) {
  return rows * column;
}
function costOfMoniters(rows, column) {
  return rows * column;
}
