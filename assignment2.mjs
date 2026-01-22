import prompt from 'prompt-sync';
const input = prompt();

/* 1. Sum, Average and Grade of Marks */
let m1 = 70;
let m2 = 80;
let m3 = 75;

let sum = m1 + m2 + m3;
let avg = sum / 3;

let grade;
if (avg >= 75) {
    grade = "A";
} else if (avg >= 60) {
    grade = "B";
} else if (avg >= 40) {
    grade = "C";
} else {
    grade = "Fail";
}

console.log("\n1) Marks Result");
console.log("Sum:", sum);
console.log("Average:", avg);
console.log("Grade:", grade);


/* 2. Number Guessing Game */
let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess = Number(input("\n2) Guess a number between 1 and 10: "));

if (guess === randomNumber) {
    console.log("Correct Guess!");
} else {
    console.log("Wrong! Number was:", randomNumber);
}


/* 3. Palindrome Check */
let str = input("\n3) Enter a string: ");
let rev = str.split("").reverse().join("");

if (str === rev) {
    console.log("Palindrome");
} else {
    console.log("Not a Palindrome");
}


/* 4. Basic Calculator */
let num1 = Number(input("\n4) Enter first number: "));
let num2 = Number(input("Enter second number: "));
let op = input("Enter operator (+, -, *, /): ");

let result;

switch (op) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    default:
        result = "Invalid Operator";
}

console.log("Result:", result);


/* 5. Login Validation */
let username = input("\n5) Enter username: ");
let password = input("Enter password: ");

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}
