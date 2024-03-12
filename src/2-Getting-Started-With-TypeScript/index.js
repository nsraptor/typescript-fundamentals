"use strict";
// The Net ninja: https://www.youtube.com/watch?v=fPYbNXzXP6M&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=21
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Invoices_js_1 = require("./classes/Invoices.js");
var Payment_js_1 = require("./classes/Payment.js");
var AlphabetEncryption_js_1 = require("./classes/AlphabetEncryption.js");
var IngetstionQuestion_js_1 = require("./classes/IngetstionQuestion.js");
var ToweringProblem_js_1 = require("./classes/ToweringProblem.js");
// import * as readline from 'readline';
// import { WriteStream, createWriteStream } from "fs";
var TwoZeroFourEightGame_js_1 = require("./classes/TwoZeroFourEightGame.js");
var ProblemA_js_1 = require("./classes/ProblemA.js");
// import * as promptSync from 'prompt-sync';
//=============================================INTERFACE & Class
var docOne;
var docTwo;
docOne = new Invoices_js_1.Invoice('nitin', 'automation', 7777777);
docTwo = new Payment_js_1.Payment('sanju', 'sales', 7777777);
// Variables
var x = 7;
var y = 11;
var user = "nitin";
var z = true;
//================================
// Arrays
var names = ["nitin", "Saini", " Sanju", "Saini"];
names.push("Mahi");
var numbers = [1, 2, 3, 4, 5];
numbers.push(10);
numbers[1] = 67;
var mixed = ["nitin", 10, true];
mixed.push(2);
mixed[0] = 3;
mixed[0] = true;
//================================
//Objects
var ninja = {
    fname: "nitin",
    lname: "saini",
    age: 35
};
ninja.fname = "sanju";
ninja.lname = "saini";
ninja.age = 32;
//=========================
//Explicit types
var character; // explicitly typed
var age1; // explicitly typed
var isLoggedIn; // explicitly typed
character = "ninja"; // assignement later
age1 = 34; // assignement later
isLoggedIn = true; // assignement later
//Arrays
var ninjas = []; // explicitly typed
ninjas.push("nitin");
//Union types
var mixed_uninon_defined = []; // explicitly union typed
mixed_uninon_defined.push("nitin");
mixed_uninon_defined.push(35);
mixed_uninon_defined.push(true);
console.log(mixed_uninon_defined);
var uid;
uid = "sample";
uid = 7;
//uid = true;   this will throw an errror
//Objects
var ninjaOne;
ninjaOne = {
    fname: "Nitin",
    lname: "saini",
    age: 34
};
var ninjaTwo;
ninjaTwo = {
    fname: "Sanju",
    lname: "Saini",
    age: 32
};
console.log(ninjaTwo);
//===========================================
//Dynamic types
var age2;
age2 = 24;
console.log(age2);
age2 = true;
console.log(age2);
age2 = "random string";
console.log(age2);
var sampleMixedArray = [];
sampleMixedArray.push("random name");
sampleMixedArray.push(true);
sampleMixedArray.push(45);
console.log(sampleMixedArray);
var ninjaObject;
ninjaObject = { fname: "Nitin", age: 25 };
console.log(ninjaObject);
ninjaObject = { fname: 25, age: "Nitin" };
console.log(ninjaObject);
//=========================================================
//Function and their basics
var greet = function () {
    console.log("Hello!!!");
};
var greetAgain;
greetAgain = function () {
    console.log("Hello Again from Function");
};
var add = function (a, b) {
    console.log(a + b);
};
add(2, 4);
var addAnother = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
addAnother(2, 5, 10); // with c=10 function works
addAnother(2, 5, "stringadata"); // c="stringadata" function still works
var addDefault = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
addDefault(2, 5); // function works with default value
addDefault(2, 5, "stringadata"); // c="stringadata" function still works
var addOptional = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
addOptional(2, 5); // function works with not passing options value
addOptional(2, 5, "stringadata"); // working with optional parameter c="stringadata" function still works
var minus = function (a, b) {
    return a - b;
};
var res = minus(7, 2); // TS compiler automaticall infers the data type for res as number.
var logDetails = function (uid, item) {
    console.log("".concat(item, " has a uid of ").concat(uid));
};
logDetails("UID_STRING", "ITEM");
var greetUser = function (user) {
    console.log("".concat(user.name, " says hello"));
};
greetUser({ name: "nitin", uid: "StringORNumebr" });
var greetUserAgain = function (user) {
    console.log("".concat(user.name, " says hello agian!!!!"));
};
greetUserAgain({ name: "nanju", uid: "StringORNumebr" });
//==============================================================
//Function Signatures
//e.g.1
var userGreet;
userGreet = function (name, greetings) {
    console.log("".concat(name, " sends ").concat(greetings));
};
userGreet("nitin", "hi");
//e.g.2
var calc;
calc = function (n1, n2, action) {
    if (action === "add") {
        return n1 + n2;
    }
    else {
        return n1 - n2;
    }
};
calc(5, 4, "add");
//e.g.3
var logDetails1;
logDetails1 = function (ninja) {
    console.log("".concat(ninja.name, " is ").concat(ninja.age, " years old!!!!!!!"));
};
logDetails1({ name: "OLD NINJA", age: 89 });
//==================================================================
// DOM interaction and Type Casting
// const anchor = document.querySelector("a")!;
// const image = document.querySelector("img") as HTMLImageElement;  // Casting happening here, this can be done at any level.
// console.log(anchor.href);
// console.log(image.src);
//=====================================================================
var invOne = new Invoices_js_1.Invoice("Mario", "shopping", 10);
var invTwo = new Invoices_js_1.Invoice("Luigi", "fitness", 10);
console.log(invOne.format());
console.log(invTwo.format());
//invOne.client = "Hog"; // changing private instance member value outside the class, will throw an error.
console.log("Adding Invoce objects into Array and print.");
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
//====================================================================
// Public : Instanace member is accessible anywhere and is modifiable 
// Private : Instanace member is only accessible insid eteh class and can only be modified inside the or via any public method(i.e. accessible from teh outside.)
// Readonly : Instanace member is accessible outsid eteh class but cannot be midified anywhere or by any means.
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format()); // inv.details cannot be access due to reoadonly access modifier
});
// If we append access modifiers for the constructir parameters then we don't need to define them separately.
//e.g.
var InvoiceAcMf = /** @class */ (function () {
    function InvoiceAcMf(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    InvoiceAcMf.prototype.format = function () {
        return "".concat(this.client, " owes \u00A3").concat(this.amount, " for ").concat(this.details);
    };
    return InvoiceAcMf;
}());
var invOneAM = new Invoices_js_1.Invoice("Tom", "shopping", 10);
var invTwoAM = new Invoices_js_1.Invoice("Jerry", "fitness", 10);
console.log(invOneAM.format());
console.log(invTwoAM.format());
//invOne.client = "Hog"; // changing private instance member value outside the class, will throw an error.
console.log("Adding Invoce objects into Array and print.");
var invoicesAM = [];
invoicesAM.push(invOneAM);
invoicesAM.push(invTwoAM);
console.log(invoicesAM);
var me = {
    name: "nitin",
    age: 30,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log('I spent', amount);
        return amount;
    }
};
var greetPerson = function (person) {
    console.log("Hello!! ", person.name);
};
greetPerson(me);
//==========================================================
// Interfaces with Classes
//Go to the top of the page 
console.log(docOne);
console.log(docTwo);
var docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log('Printing from HasFormatter type array', docs);
//==================================================================
//GNEREICS
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var documentOne = addUID({ name: 'nitin', age: 35 });
//console.log(documentOne.name);  this thorws error as documentOne doesn't know about name property
// this is where teh generics comes in teh picture
var addUIDNew = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var documentOneNew = addUIDNew({ name: 'nitin', age: 35 });
console.log(documentOneNew.name);
// we have a problem here that we are not specifying that T should be an object and hence below invalid statement gets accepted and copiles successfully
var documentTwo = addUIDNew("Hello"); // Makes no sense right. to solve this problem we need to make sure to tell type script type of T
var addUIDLatest = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var documentLatest = addUIDNew({ name: 'nitin', age: 35 });
console.log(documentOneNew.name);
var dc1 = {
    uid: 1,
    resourceName: "nitin",
    data: { age: 30 }
};
//another e.g.
var dc2 = {
    uid: 1,
    resourceName: "nitin",
    data: "example"
};
//another e.g.
var dc3 = {
    uid: 1,
    resourceName: "nitin",
    data: ["example"]
};
console.log(dc1, dc2, dc3);
//================================================================
//ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 2] = "BOOK";
    ResourceType[ResourceType["MOVIE"] = 5] = "MOVIE";
    ResourceType[ResourceType["DRECTOR"] = 6] = "DRECTOR";
    ResourceType[ResourceType["PERSON"] = 7] = "PERSON";
})(ResourceType || (ResourceType = {}));
;
var dc4 = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { name: "Book Of Mormon" }
};
var dc5 = {
    uid: 1,
    resourceType: ResourceType.PERSON,
    data: "sample string"
};
console.log(dc4, dc5);
//================================================================
// TUPLES
// almost like an array but fixed size and type and order
var arr = ['ryu', 25, true];
arr[0] = false;
arr[2] = 'tom';
var tup = ['ryu', 25, true];
tup[0] = 'nitin';
// tup[0] = 25; this line will throw an error due to tuple type condition
var student;
student = ['nitin', 10];
console.log(tup, student);
var tupAr = [];
tupAr.push(['nitin', 10]);
tupAr.push(['sanju', 23]);
tupAr.push(['jerry', 43]);
console.log(tupAr);
//======================================================================
var LatticeMultiplication = /** @class */ (function () {
    function LatticeMultiplication() {
    }
    LatticeMultiplication.multiply = function (a, b) {
        var aDigits = this.getNumberDigits(a);
        var bDigits = this.getNumberDigits(b);
        var productGrid = this.buildProductGrid(aDigits, bDigits);
        var diagonalSums = this.computeDiagonalSums(productGrid);
        productGrid.forEach(function (pgArr) {
            console.log(pgArr);
        });
        var result = this.buildResult(diagonalSums);
        return result;
    };
    LatticeMultiplication.getNumberDigits = function (num) {
        return num.toString().split('').map(Number).reverse();
    };
    LatticeMultiplication.buildProductGrid = function (aDigits, bDigits) {
        var numRows = bDigits.length + 1;
        var numCols = aDigits.length + 1;
        var productGrid = Array.from({ length: numRows }, function () { return Array(numCols).fill(' '); });
        for (var i = 0; i < bDigits.length; i++) {
            for (var j = 0; j < aDigits.length; j++) {
                var product = bDigits[i] * aDigits[j];
                productGrid[i][j + 1] = product.toString();
            }
            productGrid[i][0] = bDigits[i].toString();
        }
        for (var i = 0; i < aDigits.length; i++) {
            productGrid[numRows - 1][i + 1] = aDigits[i].toString();
        }
        return productGrid;
    };
    LatticeMultiplication.computeDiagonalSums = function (productGrid) {
        var numRows = productGrid.length;
        var numCols = productGrid[0].length;
        var diagonalSums = Array(numRows + numCols - 1).fill(0);
        for (var i = 0; i < numRows; i++) {
            for (var j = 0; j < numCols; j++) {
                var diagonalIndex = i + j;
                diagonalSums[diagonalIndex] += parseInt(productGrid[i][j]);
            }
        }
        return diagonalSums;
    };
    LatticeMultiplication.buildResult = function (diagonalSums) {
        var result = '';
        for (var i = 0; i < diagonalSums.length; i++) {
            var carry = Math.floor(diagonalSums[i] / 10);
            var digit = diagonalSums[i] % 10;
            result = digit.toString() + result;
            if (carry > 0) {
                diagonalSums[i + 1] += carry;
            }
        }
        return result;
    };
    return LatticeMultiplication;
}());
// Example usage:
var result1 = LatticeMultiplication.multiply(345, 56);
console.log(result1);
console.log("CALLING  printEncryptedMessage");
var encodedMsg = new AlphabetEncryption_js_1.AlphabetEncryption().printEncryptedMessage("This is New");
console.log("CALLED  printEncryptedMessage", encodedMsg);
var arr1 = Array(4);
var move = 'up';
arr1[0] = "2 0 0 2".replace(/\s+$/g, '').split(' ').map(function (arrTemp) { return parseInt(arrTemp, 10); });
arr1[1] = "4 16 8 2".replace(/\s+$/g, '').split(' ').map(function (arrTemp) { return parseInt(arrTemp, 10); });
arr1[2] = "2 64 32 4".replace(/\s+$/g, '').split(' ').map(function (arrTemp) { return parseInt(arrTemp, 10); });
arr1[3] = "1024 1024 64 0".replace(/\s+$/g, '').split(' ').map(function (arrTemp) { return parseInt(arrTemp, 10); });
var result12 = new TwoZeroFourEightGame_js_1.TwoZeroFourEightGame().shuffleArray(arr1, move);
result12.forEach(function (a) {
    console.log(a);
});
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
console.log('Enter inputArrayString:');
// let arr12: number[][] = Array(4);
// let i=0;
// let move1 = "up";
// const prompt = promptSync();
// for (let i: number = 0; i < 4; i++) {
//   let line: string = prompt();
//   arr12[i] = line.replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
//   prompt
// }
// console.log("print Arr12: ",arr12);
// rl.on("line", (line) => {
//   if(i > 2) {
//     console.log("I is greater than 2");
//     rl.close();
//   }
//     arr12[i] = line.replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
//     i++;
// });
// const result123: number[][] = new TwoZeroFourEightGame().shuffleArray(arr12, move);
//   result123.forEach((a) => {
//     console.log(a);
// });
var calArr = [800, 700, 400, 300, 200];
var maxConsumedCals = new IngetstionQuestion_js_1.IngetstionQuestion().getmaxCalsConsumed(calArr, 900);
console.log("MAX CALS: ", Math.floor(maxConsumedCals));
var classList = new ToweringProblem_js_1.ToweringProblem().getTowerArray();
console.log("CLASS LIST :", classList);
var nums = [
    [1, -2, 3],
    [2, 24, 12],
    [5, 3, 1],
    [9, 15, 7],
    [7, 2, 14],
    [12, 4, 2]
];
var arrNum = [];
nums.forEach(function (x) {
    var isPossible = new ProblemA_js_1.problemA().isPossible(x);
    console.log(isPossible);
});
var sum = x + y;
// const result: string = `The sum of ${x} and ${y} is ${sum}`;
// let s:string = "A B C D";
// const sArr: string[] = s.split(" ");
// const result  = s;
// console.log(s);
// const output = document.querySelector('#output');
// if (output) {
//   output.innerHTML = s;
// }
