// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Golf 2023";
console.log(cohort.split(" "));

// a) Your answer: ["Golf", "2023"]
// b) Verify and explain: Verification: [ 'Golf', '2023' ]
/*
*** Explain: ***
- .split(" ") -> splits a string at every empty space 
  - due to the space in between the quotations.
 */

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`;
};
console.log(greeter("LEARN Student"));

// a) Your answer: Nothing -> there is no return within the function.
// b) Verify and explain: Verification: undefined
/*
***b Explain: *** 
- Undefined is returned because the function is not returning a value.
 - Hence the value is undefined.
*/

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0);
console.log(onlyOdds);

// a) Your answer: [11, 13, 15]
// b) Verify and explain: Verification: [ 11, 13, 15 ]
/*
*** Explain: ***
- .filter() method is iteratating through every index of the array
  - Evaluating if the element has a remainder when divided by 2 -> utilized by the modulo operator. 
- Then the .filter() method returns the subset of the filtered array.
*/

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub",
};
console.log(myCodingSkills.languages[0]);

// a) Your answer: "JavaScript"
// b) Verify and explain: Verification: JavaScript

/*
  *** Explain: *** 
  - By calling "myCodingSkills" with dot notation combined with "languages"
    - Gains access to the 1st key/value pair in the "myCodingSkills" object. 
  - By applying the bracket notation with the number zero 
      - Gains access to the 1st index of the value 
        -Which is an array ["JavaScript", "Ruby"]
          - 1st index === "JavaScript"

*/

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name;
    this.cohort = "Golf";
    this.year = 2023;
  }
}
const learnStudent = new Learn("George");
console.log(learnStudent);

// a) Your answer: {name: "George", cohort: "Golf", year: 2023};
// b) Verify and explain: Verification: Learn { student: 'George', cohort: 'Golf', year: 2023 }

/*
  *** Explain: *** 
    - Const "learnStudent" is creating a new varible. 
    - By adding the "new" keyword and the class Learn
      - Instantiates a new object with all the attributes and methods linked to the class Learn. 
      - It is also passing reference of the "this" key word to the new object "learnStudent". 
      - "learnStudent" is a blueprint of the class "Learn".
*/
