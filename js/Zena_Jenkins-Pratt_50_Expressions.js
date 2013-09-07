//Expression #1
function sayHi(name, message) {
    alert("Hello " + name + ", " + message);
}

sayHi("Class", "what's up?");

//Expression #2
window.alert("Welcome to my site!")

//Expression #3
var result1 = 10 + 20 + 30; //three numbers
alert(result1); //60
var result2 = 10 + "50"; //a number and a string
alert(result2); //"1050"

//Expression #4
var num1 = 8;
var num2 = 24;
var message = "The sum of 8 and 24 is " + (num1 + num2);
alert(message); //"The sum of 8 and 24 is 32"

//Expression #5 - I wanted to see what would happen if I changed one of the #s in result1
var result1 = ("45" == 55); //true – equal because of conversion
var result2 = ("55" === 55); //false – not equal because different data types
alert(result1);
alert(result2);

//Expression #6
var result1 = ("55" == 55); //true – equal because of conversion
var result2 = ("55" === 55); //false – not equal because different data types
alert(result1);
alert(result2);

//Expression #7
var z = 50;

if (z > 53) alert("Greater than 53."); //one-line statement
else {
    alert("Less than or equal to 53."); //block statement
}
//Expression #9
var guess = prompt("Please guess a number between 1 and 10", "");
if (guess == 5) {
    alert('Correct! I was thinking of 5');
} else {
    alert('Wrong! I was thinking of 5');
}

//Expression #10
var x; //declaraing variable
x = 15.8976; // assigning value to variable

alert(x);

//Expression #11
var x = "Carolina Panthers ";
var y = "are going to the Super Bowl in ";
var z = 2013;

alert(x + y + z);
alert("We love the " + x);

//Expression #12
var x = 17;
var y = 5;

var sum = x + y;
var sub = x - y;
var mul = x * y;
var div = x / y;
var mod = x % y;

alert("addition is " + sum);
alert("subtraction is " + sub);
alert("multiplication is " + mul);
alert("division is " + div);
alert("remainder is " + mod);

//Expression #13
var x = 8;
var y = 8;

if (x == y) {
    alert("Both are equal");
}
//Expression #14

var number = 2;

while (number <= 10) {
    alert("The number is: " + number);
    number++;
}

//Expression #15
function add(x, y) {
    result = x + y;
    alert("addition is: " + result);
}

add(20, 55);
add(9, 53);

//Expression #16
alert(Math.round(14.5))

//Expression #17
var celeb = new Array();

celeb["Hot"] = "Denzel Washington";
celeb["Super Hot"] = "Dwayne Johnson aka The Rock";
alert(celeb["Super Hot"]);

//Expression #18
var quote = "Today is the first day of the rest of your life.";
var x = quote.length;
alert(x);

//Expression #19

var carModel = "S60";

switch (carModel) {
    case "Durango":
        alert("Manufactured by Dodge");
        break;

    case "Camry":
        alert("Manufactured by Toyota");
        break;

    case "Focus":
        alert("Manufactured by Ford");
        break;

    case "320i":
        alert("Manufactured by BMW");
        break;

    case "Civic":
        alert("Manufactured by Honda");
        break;

    default:
        alert("Unknown Car Model");
        break;
}


//Expression #20

var carModel = "Camry";

switch (carModel) {
    case "Durango":
        alert("Manufactured by Dodge");
        break;

    case "Camry":
        alert("Manufactured by Toyota");
        break;

    case "Focus":
        alert("Manufactured by Ford");
        break;

    case "320i":
        alert("Manufactured by BMW");
        break;

    case "Civic":
        alert("Manufactured by Honda");
        break;

    default:
        alert("Unknown Car Model");
        break;
}

//Expression #21

function areaRect(L, B) {
    var area = L * B;
    return area;
}

x = areaRect(7, 9);
alert(x);

//Expression #22 
var num = 0;

for (var i = 1; i < 9; i++) {
    if (i % 6 == 0) {
        break;
    }
    num++;
}

alert(num); //5


//Expression #23

var num = 0;

outermost: for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 10; j++) {
        if (i == 4 && j == 4) {
            break outermost;
        }
        num++;
    }
}

alert(num); //44

//Expression #24

var num1 = 15;
var num2 = 32;
var num3 = (num2 > num1) ? num2 : num1;
alert(num3); //32

//Expression #25
var num = 0;

for (var i = 1; i < 8; i++) {
    if (i % 3 == 0) {
        continue;
    }
    num++;
}

alert(num); //5

//Expression #26

var Cake = new Array();

Cake[0] = "Marble";
Cake[1] = "Red Velvet";
Cake[2] = "Chocolate Mocha";
Cake[3] = "German Chocolate";
Cake[4] = "Chocolate Raspberry";
alert(Cake[2]);

//Expression #27

var b = 'I am a Chocoholic.'
alert(b.toUpperCase())

//Expression #28

//charAt(x)
var myString = 'Javascript can be fun!!!';
console.log(myString.charAt(7));
//output: r

//Expression #29

//charAt(position)
var message = "javascript"
//alerts "a"
alert(message.charAt(1))

//Expression #30

//concat(v1, v2,..)
var message = "Zena"
var final = message.concat(" is a", " serious chocoholic.")
alert(final)

//Expression #31

//indexOf(char/substring)
var sentence = "Hi, my name is Zena!"
if (sentence.indexOf("Zena") != -1) alert("Zena is in there!")

//Expression #32

var b = 'JAVASCRIPT ROCKS'
alert(b.toLowerCase())

//Expression #33

var myString = "SupersBowl";

var mySplitResult = myString.split("s");

alert("The first element is " + mySplitResult[0]);
alert("The second element is  " + mySplitResult[1]);

//Expression #34

var myString = "chocolate mocha cocoa coffee mahogany";

var mySplitResult = myString.split(" ");

for (i = 0; i < mySplitResult.length; i++) {
    alert("Element " + i + " = " + mySplitResult[i]);
}

//Expression #35 - Generate a number between 1 and 100

var seed = Math.random();
var n = seed * 100 + 5;
n = Math.floor(n);
alert(n);

//Expression #36 - Generate a number between 10 and 100

var seed = Math.random();
var n = seed * 70 + 10;
n = Math.floor(n);
alert(n);

//Expression #37 - Generate a number between 33 and 53

var seed = Math.random();
var n = seed * (53 - 33) + 33;
n = Math.floor(n);
alert(n);


//Expression #38

var d = new Date();
alert(d.toDateString()); //current date

//Expression #39
var d = new Date();
alert(d.getDate()); //day of the month
d.setDate(24);
alert(d.toDateString());

//Expression #40

var d = new Date();
alert(d.getDay()); //week day of today

//Expression #41

var d = new Date();
alert(d.getFullYear()); //this year
d.setFullYear(2010);
alert(d.toDateString()); //this day in 2010

//Expression #42

function doAdd(num1, num2) {
    //if(arguments.length == 1) {
    arguments[1] = 10;
    //}
    alert(arguments[0] + num2);
}

doAdd(10, 30); //20
doAdd(30, 10); //40

//Expression #43

alert(2 * 6); //12


//Expression #44

alert(2 * NaN); //NaN


//Expression #45

alert(Infinity * 0); //NaN


//Expression #46

alert(Infinity * 2); //Infinity

//Expression #47

alert("4" * 4); //16


//Expression #48

alert(true * 10); //10


//Expression #48

alert("This page created by Zena Pratt, Last update:" + document.lastModified);

//Expression #49
var y = window.prompt("Please enter your name")
window.alert(y)

//Expression #50
var x = window.confirm("Are you sure you want to quit")

if (x) window.alert("Thank you.")
else window.alert("Good choice.")