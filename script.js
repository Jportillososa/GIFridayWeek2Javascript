//VERY EASY: Write a function named min that takes two arguments and returns their minimum.


/*
function min(x = 245, y = 345) {
    if (x < y) {
        return x;
    }
    else
        return y;
}

console.log(min());




// EASY: Create an array of students holding their last name, first name, and age with 3 students. To
// validate, please log a greeting with the first name, last name and age of the 2nd student. The output
// should look like "Hello, my name is John Doe and I'm 19 years old."


let student1 = ["Jose", "Portillo", 23];
let student2 = ["Kevin", "Parker", 26];
let student3 = ["Chad", "Smith", 50];

console.log(`Hello my name is ${student2[0]} ${student2[1]} and im ${student2[2]}`)






// MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number
// and its corresponding month. For example: if the user enters the number 3, then it should return the
// month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).



let userInput = prompt("Please enter your birth month number");

if (userInput == 1) {
    console.log("January")
}
else if (userInput == 2) {
    console.log("February")
}
else if (userInput == 3) {
    console.log("March")
}
else if (userInput == 4) {
    console.log("April")
}
else if (userInput == 5) {
    console.log("May")
}
else if (userInput == 6) {
    console.log("June")
}
else if (userInput == 7) {
    console.log("July")
}
else if (userInput == 8) {
    console.log("August")
}
else if (userInput == 9) {
    console.log("September")
}
else if (userInput == 10) {
    console.log("October")
}
else if (userInput == 11) {
    console.log("November")
}
else if (userInput == 12) {
    console.log("December")
}
else {
    alert("You have entered an invalid number. Please enter any month number from 1-12")
}


*/

// HARD: Given the information below for Tom and Jerry.
// ● Tom - height:  9in mass: 8 g
// ● Jerry - height: 10in mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
// BMI = mass / height ^2 = mass / (height * height)
// Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean
// variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the
// console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).


const massTom = 8;
const heightTom = 9;
const massJerry = 45;
const heightJerry = 10;

const tomHigherBMI = massTom / heightTom ** 2 > massJerry / heightJerry ** 2

console.log(massTom / heightTom ** 2);
console.log(massJerry / heightJerry ** 2);
console.log(`Is Tom's BMI higher than Jerrys? ${tomHigherBMI}`);

