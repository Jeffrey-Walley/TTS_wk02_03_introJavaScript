let x = 5;
x = 5;

const my_fave_number = 7; // this variable cannot be changed

console.log(my_fave_number); // prints 7

let x = 10 + my_fave_number; // we can use the const
console.log(my_fave_number); // prints 17

my_fave_number = 9; // error, this cannot be changed

console.log('my name is Jeffrey')
    // console logging //

const MY_CONST = 7;

console.log(MY_CONST)

let a = "Hello, World!"; // <-- Had to get that one out of the way!
let b = 'This is JavaScript!'; // Can use single or double quotes
let c = "7"; //includes numbers, but not read as numbers 
let d = "It's Seven"; //To include quotation marks in a string, you must use a different quotation inside and outside
let e = 'It\'s Seven'; //alternatively, you can use backslashes to ignore special characters in strings

let a = 7;
let b = 7.8;
let c = 0.45;



// setting up variable y //
let y;
console.log("At this moment, y is undefined: " + y)

// boolean //
// boolean aligns neatly with the state of a bit either 0 or 1 //
let myBoolean = true;
let myOtherBoolean = false;

// find out what data is held in the variable //
let myVariable = 'abc';
console.log(typeof myVariable);

myVariable = 1
console.log(typeof myVariable);

let x = 7 + 7 + 7 = 21;
// Straight arithmetic resulting in a Number value.

x = 7 + 7 + "7";
// The first two 7's are calculated (14), the last 7
// is concatenated onto the 14 as a string.
// resulting in a string value
// "14" + "7" = "147"

x = "7" + 7 + 7;
// The entire expression is implicitly converted
// into a string and concatenated.
// "7" + 7 = "77"; "77" + 7 = "777"

// concatenated (use ` backticks and call using ${varName}) //
let coercedVariable = 7 + 7 + 7;
console.log(`the value of the coercedVariable is ${coercedVariable}`);

let amountRaisedSoFar = 1000;

let donation = prompt("How much would you like to donate?");

amountRaisedSoFar = Number(donation) + amountRaisedSoFar;

console.log("We have now raised: " + amountRaisedSoFar + "!");

let x = parseInt("10"); // 10
x = parseFloat("10.55"); // 10.55
x = toString(10.55); // "10.55"

// Typecasting //

let parsedInt = parseInt("10");
console.log(parsedInt);

// string concatenation //


let greeting = "Hello,";
let name = "World";
console.log(greeting + " " + name + "!"); //output "Hello, World!"" 


// template literals // //** Lionel prefers template literals **/

let name = "Shane";
let age = 25;

console.log(`Happy Birthday ${name}! How is ${age+1} treating you?`);

// Null and Undefined //

let something;
console.log(typeof something) // "undefined"

// foo does not exist, it is not defined and has never been initialized:
console.log(foo); // "ReferenceError: foo is not defined"

// foo is known to exist now but it has no type or value:
let foo = null;
console.log(foo); // "null"

// don't use null according to lionel //

console.log(typeof nothing); //undefined

let something;
console.log(typeof something); //undefined
console.log(something); //undefined

something = null;
console.log(typeof something); //"object"
console.log(something); //"null"

something = null; //null
something; // null

// if statement rely on boolean //

//Simple if statement
let x = true;
if (x) {
    console.log(true);
} else if (x == true) {
    console.log("this won't run");
} else {
    console.log(false);
}

// temp response example - give result based on 'if / else' statement //

let temp = 60;

if (temp > 45) {
    console.log("I'm going hiking!");
} else {
    console.log("It's too cold to go hiking);
    }

    //  <	Less than
    >
    Greater than <=
        Less than or equal to >=
        Great than or equal to ==
        Loose equality(compares values) ===
        Strict equality(compares values AND type) !=
        Values do not equal !==
            Same type, but different values //


    let x = 10;
    if (x == '10') { //Type coersion is happening here!
        console.log(true); //true
    }

    if (x === '10') {
        console.log(true); //false
    }

    // (0 ==  '0') // true
    (0 === '0') // false

    ('' == 0) // true, the string will implicitly be converted to an integer
    ('' === 0) // false, no implicit cast is being made //

    // coffee cup project //

    let cups = 1;

    if (cups < 3) {
        console.log("Yes. I'll take another cup of coffee!");
    } else {
        console.log("I think I'm okay for now.");
    }

    // truthy / falsey values //

    if ('abc') {
        // this block would run
    }

    if (10 && 'abc' && true) {
        // this block would run
    }

    // Truthy/Falsey Values

    Only falsey values(false, 0, null, Nan, "", or undefined) evaluate to false. //

    let whatever; //whatever is undefined
    if (whatever) {
        console.log(true);
    } else {
        console.log(false); //this would run
    }

    if (!whatever) {
        console.log(false); //this would run
    }

    if (false || 0 || null) {
        console.log(true); //since none of these evaluate to true, this will not run
    }

    // true && true 	// true
    true && false // false
    false && true // false
    false && false // false

    true || true // true
    true || false // true
    false || true // true
    false || false // false //

    // Short - Circuit Evaluation:  The combination symbols( || and && ) are also used to create short - circuit evaluations(which can be a shorthand
    for an
    if statement). //

somevar && myFunction() //equivalant to if(somevar)
somevar || myFunction() //equivalant to if(!somevar)

// 2nd challange set temp 'if / else if' statement

let temp = 85;
let precipitation = false;
let indoors = true;

console.log("The temperature is " + temp + " degrees");

if (temp > 80 && precipitation === false) {
    console.log("time to swim!");
} else if (indoors) {
    console.log("time to swim!");
}

// for loop

for (let i = 0; i <= 9; i++) {
    console.log(i);
}

// Within the parentheses, there are 3 key things happening: 
1. We are setting a variable 's initial value (in this case, i = 0)
2. We are comparing the variable 's value to the desired break-point (i <= 9)
3. we are incrementing the value of the variable on each iteration(i++)

The loop will stop when the breakpoint is met. //

// 99 bottles of beer challenge //

for(let bottle = 99; bottle >= 0; bottle--) {

    if (bottle === 0) {
        console.log("Hey! Go buy more root beer!");
    } else {
        console.log(bottle + " bottles of root beer on the wall");
    }
}

// while loop 

ex =
    let x = 0;
while (x < 10) {
    x = x + 1;
    // or x +=1
    // or x ++
} //

// While the condition is true, the loop will run //

// Iteration: "do-while" loop

let x = 0;
do {
    x = x + 1;
    // or x +=1
    // or x++
} while (x < 10); //

// a use for the above would be taking input and validating the input. This would ask for input, if invalid it would ask again //

// AVOID INFINITE LOOPS 

for (let i = 0, i < 20, i--) {
    //this loop will run forever
}

let x = 20;
while (x < 20) {
    if (x > 20) { //this condition cannot be met
        x--; //this will never happen
    }
    //this will run forever
} //

// break vs continue // 

// break statement jumps out of loop //

for (let i = 0; i < 10; i++) {
    console.log(i);
    console.log('before break'); // will only print once
    break; // exits the next loop
    console.log('after break'); //never happens
}

// continue statement jumps to next iteration

for (let i = 0; i < 10; i++) {
    console.log(i);
    console.log('before continue'); // will print 10 times
    continue; // continues to the next iteration
    console.log('after continue'); //never happens
} //

// Switch Statements
Switch statements are similar in many ways to an
if statement, but can be a little easier / cleaner to write //

let x = 1
switch (x) {
    case 3:
        console.log('three')
    case 1:
        console.log(1);
        //break;
    case 2:
        console.log(2);
        break;
    default:
        console.log('default')
}

// in programming we want to limit the scope of elements to improve code reduce errors. scope refers to the area of a program where the name of a resource (variable, function, etc) is valid. //

// The move from var to let in Javascript is an example of the concept of scope. 
The
var keyword defines a variable with global scope, regardless of what block it is declared in . //

console.log(test); //console: undefined
if (!test) { //true
    var test = true; //create and assign test
    console.log(test); //console: true
}
console.log(test); //this is dangerous! 

// global scope: Accessible to all other areas of the application.
code block: generally code within a loop, conditional, or

function( in {}). //

// "let" declares a variable only within the scope of its block. In most cases, this is more useful. //

let test = true;
if (test) {
    let test = false; //this is a completely new variable that only exists in this scope
    console.log(test); //console: false
}
console.log(test); //console: true

// If we wanted to change the value of global "test", we would not re-declare the variable. //

let test = true;
console.log(test); // true
if (test) {
    test = false;
    console.log(test); // false
}

// Var vs. Let Just to make sure you understand, here is another example of var vs. let, this time using a for loop. //

for (let i = 0; i < 10; i++) {
    console.log(i); // possible because i is within the scope
}
console.log(i); // undefined because i only existed in the loop

for (var i = 0; i < 10; i++) {
    console.log(i); //
}
console.log(i); // will log 9, the final value of i in the for loop, 
//because var declared it globally