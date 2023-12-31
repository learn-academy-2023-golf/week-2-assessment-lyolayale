// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10];
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36];
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("isDivisibleByThree", () => {
  it("Returns a boolean that signifies if a number is evenly divisible by 3. ", () => {
    expect(isDivisibleByThree(object1)).toEqual(true);
    expect(isDivisibleByThree(object2)).toEqual(true);
    expect(isDivisibleByThree(object3)).toEqual(false);
  });
});

// 1st Run: ReferenceError: describer is not defined

const object1 = { number: 15 };
// Expected output: "15 is divisible by three"
const object2 = { number: 0 };
// Expected output: "0 is divisible by three"
const object3 = { number: -7 };
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

const isDivisibleByThree = (obj) => obj.number % 3 === 0;

// Pseudo code:
/*
Prompt: function that takes a object as an argument and decides if the number ("key") inside it is evenly divisible by three or not.
    - Input: object
    - Output: boolean
        - *** Steps ***
            - Create a ES6 arrow function -> "isDivisibleByThree"
            - Take in 1 parameter -> object
            - Use implicit return for readability
            - Apply dot notation to parameter to access the key "number"
            - Apply modulo operator with strict equals sign to evaluate the value of the key "number"
*/

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("allCaps", () => {
  it("Returns an array with all the words capitalized", () => {
    expect(allCaps(randomNouns1)).toEqual([
      "Streetlamp",
      "Potato",
      "Teeth",
      "Conclusion",
      "Nephew",
    ]);
    expect(allCaps(randomNouns2)).toEqual([
      "Temperature",
      "Database",
      "Chopsticks",
      "Mango",
    ]);
  });
});

// 1st Run: ReferenceError: allCaps is not defined

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"];
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"];
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

const allCaps = (array) =>
  array.map((item) => item[0].toUpperCase() + item.slice(1));

// Pseudo code:
/*
Prompt: Function that takes in an array of words and returns an array with all the words capitalized.
    - Input: array
    - Output: A new array
        *** Steps ***
        - Construct a ES6 arrow function -> "allCaps"
        - Take in a parameter -> array
        - Apply .map() method to iterate through all indexs of the parameter (array)
        - * Target the 0 index of each element and capitialize the letter
        - * Target every index except index 0
        - Combine the two above * Targets with concatenation.
        - Return the function implicitly
*/
