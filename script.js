/* Data Types:
undefined, null, boolean, string, symbol, number, and object
*/


// Declarations

var studlyCapVar;
var properCamelCase;
var titleCaseOver;


//Assignments

studlyCapVar = 10;
properCamelCase = "A String.";
titleCaseOver = 9000;

//Adding Operator
var sum = 10 + 0;

//incromenting numbers

var myVar = 87;

myVar = myVar + 1;
myVar++; /* Cleaner Way */

//decrementing numbers

myVar2 = 11;

myVar2 = myVar2 - 1;
myVar2--; /* Cleaner Way  */

//Decimal Numbers
//Also called "FLOATS" or "Floating point numbers"

var ourDecimal = 5.7;

var myDecimal = 0.009;

//Multiplying Decimals
//Same as Integers

var product = 2.0 * 2.5;

//Finding Remainder

var remainder;

remainder = 11 % 3;

//Compound Assignment with Augmented Addition/Subtraction/Multiplication/Division

var a = 17;
var b = 3;
var c = 12;
var d = 15;

a = a + 12;
a += 12; /* same thing as above */

b = b - 9;
b -= 9; /* same thing as above */

c = 7 * c;
c*= 7; /* same thing as above */

d = d / 5;
d /= 5; /* same thing as above */

//String Variables

var myFirstName = "Tyrell";
var myLastName = "Mercolino";

//Quotes inside a Sting

var myStr = "I am a "double quoted" string inside "double quotes"";

//Adding \ makes JS see the line as 1 full quote
var myStr = "I am a \"double quoted\" string inside \"double quotes\""; 

//Quoting Strings with Single Quotes
var myStr2 = "<a href=\"https://www.youtube.com\" target=\"_blank\">Link</a>";

//Using single quotes around the outside allows the use of double quotes on the inside of the string without \
var myStr2 = '<a href="https://www.youtube.com" target="_blank">Link</a>';

//Combining Strings

var ourStr = "I come first. " + "I come second.";
var myStr3 = "This is the start. " + "This is the end.";

//Integrading Variables with Strings

var myName = "Tyrell";
//Add Variable Name inbetween Quotes
var myStr4 = "Hello, my name is " + myName + ", nice to meet you."; /* Output: Hello, my name is Tyrell, nice to meet you.*/

// Appending Variables to Strings
var anAdjective = "awesome!";
var ourString = "Tyrell Mercolino is ";
ourString += anAdjective; /* Output: Tyrell Mercolino is awesome! */

//Finding Length of String

var firstNameLength = 0;
var firstName2 = "Bob";

firstNameLength = firstName2.length /* Output: 3. Because there are 3 letters in the name "Bob" */

//Bracket Notation to FInd First Character in String

var firstLetterIfFirstName = "";
var firstName3 = "Tyrell";

firstLetterOfFirstName = firstName3[0] /* Output: "T". Because "T" is the FIRST letter of the name */
firstLetterOfFirstName = firstName3[3] /* Output: "e". Because "e" is the FOURTH letter of the name */

// String Immutability (Cannot be altered once created)

var myStr = "Jello World";

myStr[0] = "H"; /*Cannot change and individual letter */
myStr = "Hello World"; /*Must rewrite entire string to change */

//Bracket Notation to find Last Character in String

var lastName = "Mercolino";
var lastLetterOfLastName = lastName[lastName.length -1]; /* We use "-1" because the int starts at 0. There are 9 letters total - 1 means the 8th integer */

//Bracket Notation to find Nth-to-Last Character in String

var lastName = "Mercolino";
var lastLetterOfLastName = lastName[lastName.length -3];

//Word Blanks

function wordBlanks (myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + "."; /* Output: The big dog ran to the store quickly. */

    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));

//Store Multiple Values with Arrays

var ourArray = ["John", 23]; /* Elements inside an array can be any data type */

//Nested Arrays

var ourArray = [["the univers", 42], ["everything", 2022]];

//Access Array Data with Indexes

var ourArray = [50,60,70];

var ourData = ourArray[0]; //equals 50
var ourData = ourArray[2]; //equals 70

////Modify Array Data with Indexes

var ourArray = [12,64,99];
ourArray[1] = 45;  //ourArray now equals [18,45,99].

// Access Multi-Dimensional Arrays wtih Indexes

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12],13, 14]]; //This Array contains 4 arrays inside it and in the 4th array is another array. This makes the whole Array 3 layers deep

var myData = myArray [0][0]; //This is calling the 1st index array(1,2,3) and going deeper to call the first index in that array(1).

//Manipulate Arrays with push()

var ourArray = ["Stimpson", "J", "cat"];

    //Pushes new said array into the end of the already existing array.
ourArray.push(["happy", "joy"]); //ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]].

//Manipulate Arrays with pop()
var ourArray = [1,2,3];

    //Removes the last index of the array(ourArray) and moves it into new variable(removedFromOurArray).
var removedFromOurArray = ourArray.pop(); //removedFromOurArray now equals 3, and ourArray now equals [1,2]

//Shopping List
var myList = [["ceareal", 3], ["milk", 2], ["bannanas", 3], ["juice", 2],["eggs", 12]]; 

//Write Reusable Code with Functions

function ourReusableFunction() {
    console.log("Heyya, World")
}



















console.log()
//video: https://www.youtube.com/watch?v=PkZNo7MFNFg&t=376s
// time: 14:50