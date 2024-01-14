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
