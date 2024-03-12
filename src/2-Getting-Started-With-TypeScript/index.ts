// The Net ninja: https://www.youtube.com/watch?v=fPYbNXzXP6M&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=21

import {Invoice} from './classes/Invoices.js';
import { Payment } from './classes/Payment.js';
import { AlphabetEncryption } from './classes/AlphabetEncryption.js';
import { IngetstionQuestion } from './classes/IngetstionQuestion.js';
import { ToweringProblem } from './classes/ToweringProblem.js';
// import { problemA } from './classes/problemA.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import * as Collections from 'typescript-collections';
// import * as readline from 'readline';
// import { WriteStream, createWriteStream } from "fs";
import { TwoZeroFourEightGame } from './classes/TwoZeroFourEightGame.js';
import { ProblemA } from './classes/ProblemA.js';
import { problemB } from './classes/ProblemB.js';
// import * as promptSync from 'prompt-sync';

//=============================================INTERFACE & Class
let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('nitin', 'automation', 7777777);
docTwo = new Payment('sanju', 'sales', 7777777);






// Variables
let x  = 7;
let y = 11;
let user  = "nitin";
let z = true;

//================================
// Arrays

let names = ["nitin", "Saini", " Sanju", "Saini"];

names.push("Mahi");


let numbers = [1,2,3,4,5]
numbers.push(10);
numbers[1] = 67;

let mixed = ["nitin", 10, true];
mixed.push(2);
mixed[0] = 3;
mixed[0] = true;

//================================

//Objects
let ninja = {
  fname: "nitin",
  lname: "saini",
  age: 35
}

ninja.fname = "sanju";
ninja.lname = "saini";
ninja.age = 32;

//=========================

//Explicit types
let character: string;  // explicitly typed
let age1:number;        // explicitly typed
let isLoggedIn:boolean; // explicitly typed

character = "ninja"     // assignement later
age1 = 34;              // assignement later
isLoggedIn = true;      // assignement later


//Arrays

let ninjas: string[] = [];  // explicitly typed
ninjas.push("nitin");

//Union types
let mixed_uninon_defined: (string|number|boolean)[] = [];  // explicitly union typed
mixed_uninon_defined.push("nitin");
mixed_uninon_defined.push(35);
mixed_uninon_defined.push(true);

console.log(mixed_uninon_defined);

let uid: string|number;
uid = "sample";
uid = 7;
//uid = true;   this will throw an errror


//Objects
let ninjaOne: object;
ninjaOne = {
  fname: "Nitin",
  lname: "saini",
  age: 34
}

let ninjaTwo : {
  fname: string,
  lname: string,
  age: number
}

ninjaTwo = {
  fname: "Sanju",
  lname: "Saini",
  age: 32
}
console.log(ninjaTwo);
//===========================================
//Dynamic types

let age2: any;
age2 = 24;
console.log(age2);
age2 = true;
console.log(age2);
age2 = "random string";
console.log(age2);

let sampleMixedArray: any[] = [];

sampleMixedArray.push("random name");
sampleMixedArray.push(true);
sampleMixedArray.push(45);
console.log(sampleMixedArray);

let ninjaObject: {
  fname: any,
  age: any
}

ninjaObject = {fname: "Nitin", age : 25};
console.log(ninjaObject);
ninjaObject = {fname: 25, age : "Nitin"};
console.log(ninjaObject);

//=========================================================

//Function and their basics

let greet = () => {
  console.log("Hello!!!");
}

let greetAgain: Function;
greetAgain = () => {
  console.log("Hello Again from Function");
}

const add = (a: number, b: number) => {
  console.log(a+b);
}

add(2,4);

const addAnother = (a: number, b: number, c: number | string) => { // union type params
  console.log(a+b);
  console.log(c);
}

addAnother(2,5, 10);            // with c=10 function works
addAnother(2,5, "stringadata"); // c="stringadata" function still works


const addDefault = (a: number, b: number, c: number | string = 10) => { // any param can have a default value e.g. here c= 10
  console.log(a+b);
  console.log(c);
}

addDefault(2,5);            // function works with default value
addDefault(2,5, "stringadata"); // c="stringadata" function still works

const addOptional = (a: number, b: number, c?: number | string) => { // any param can have a default value e.g. here c= 10
  console.log(a+b);
  console.log(c);
}

addOptional(2,5);            // function works with not passing options value
addOptional(2,5, "stringadata"); // working with optional parameter c="stringadata" function still works


const minus= (a: number, b:number) => { // no return type defined, TS autmaticallcally infers the return type.
  return a-b;
}

let res = minus(7,2); // TS compiler automaticall infers the data type for res as number.

//=====================================
// Type Aliases in TypeScript

type StringOrNum = string | number;
type UserObjWithName = {name: string, uid: StringOrNum};

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
}

logDetails("UID_STRING", "ITEM");

const greetUser = (user: UserObjWithName) => {
  console.log(`${user.name} says hello`);
}

greetUser({name: "nitin", uid: "StringORNumebr"})

const greetUserAgain = (user: UserObjWithName) => {
  console.log(`${user.name} says hello agian!!!!`);
}

greetUserAgain({name: "nanju", uid: "StringORNumebr"})

//==============================================================

//Function Signatures

//e.g.1
let userGreet: (a: string, b: string) => void;

userGreet = (name: string, greetings: string ) => {
  console.log(`${name} sends ${greetings}`);
}
userGreet("nitin", "hi");

//e.g.2
let calc: (a: number, b: number, c: string) => number;

calc = (n1: number, n2: number, action: string ) => {
  if(action === "add") {
    return n1 + n2;
  } else {
    return n1 - n2;
  }
}
calc(5, 4, "add");

//e.g.3
let logDetails1:( obj: {name: string, age: number}) => void;

logDetails1 = (ninja: {name: string, age: number}) => {
  console.log(`${ninja.name} is ${ninja.age} years old!!!!!!!`)
}

logDetails1({name: "OLD NINJA", age: 89});

//==================================================================

// DOM interaction and Type Casting
// const anchor = document.querySelector("a")!;
// const image = document.querySelector("img") as HTMLImageElement;  // Casting happening here, this can be done at any level.
// console.log(anchor.href);
// console.log(image.src);


//=====================================================================


const invOne = new Invoice("Mario", "shopping", 10);
const invTwo = new Invoice("Luigi", "fitness", 10);
console.log(invOne.format());
console.log(invTwo.format());
//invOne.client = "Hog"; // changing private instance member value outside the class, will throw an error.

console.log("Adding Invoce objects into Array and print.");
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);

//====================================================================
// Public : Instanace member is accessible anywhere and is modifiable 
// Private : Instanace member is only accessible insid eteh class and can only be modified inside the or via any public method(i.e. accessible from teh outside.)
// Readonly : Instanace member is accessible outsid eteh class but cannot be midified anywhere or by any means.
invoices.forEach((inv)=> {
    console.log(inv.client, inv.amount, inv.format());// inv.details cannot be access due to reoadonly access modifier
})

// If we append access modifiers for the constructir parameters then we don't need to define them separately.
//e.g.

class InvoiceAcMf {

  constructor(  
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`
  }
}

const invOneAM = new Invoice("Tom", "shopping", 10);
const invTwoAM = new Invoice("Jerry", "fitness", 10);
console.log(invOneAM.format());
console.log(invTwoAM.format());
//invOne.client = "Hog"; // changing private instance member value outside the class, will throw an error.

console.log("Adding Invoce objects into Array and print.");
let invoicesAM: Invoice[] = [];
invoicesAM.push(invOneAM);
invoicesAM.push(invTwoAM);
console.log(invoicesAM);

//============================================================================
// Modules: Created a separate module i.e. Invoice and imported it in this file. Please refer to teh top of teh file

//==============================================================================
// Interfaces

interface IsPerson {
  name: string;
  age: number;
  speak(a: string) : void;
  spend(amt: number): number;
}

const me: IsPerson = {
  name: "nitin",
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spent', amount);
    return amount;
  }
}

const greetPerson = (person: IsPerson) => {
  console.log("Hello!! ", person.name);
}

greetPerson(me);

//==========================================================
// Interfaces with Classes

//Go to the top of the page 

console.log(docOne);
console.log(docTwo);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log('Printing from HasFormatter type array', docs);

//==================================================================

//GNEREICS

const addUID = (obj: object) => {
  let uid = Math.floor(Math.random()*100);
  return {...obj, uid};
}


let documentOne = addUID({name: 'nitin', age: 35}); 
//console.log(documentOne.name);  this thorws error as documentOne doesn't know about name property
// this is where teh generics comes in teh picture

const addUIDNew = <T>(obj: T) => {  // T will aqcuire teh details of the object passed into teh function and allows the returning object to access the properties
  let uid = Math.floor(Math.random()*100);
  return {...obj, uid};
}


let documentOneNew = addUIDNew({name: 'nitin', age: 35}); 
console.log(documentOneNew.name);

// we have a problem here that we are not specifying that T should be an object and hence below invalid statement gets accepted and copiles successfully
let documentTwo = addUIDNew("Hello"); // Makes no sense right. to solve this problem we need to make sure to tell type script type of T

const addUIDLatest = <T extends{name: string, age: number}>(obj: T) => {  // T will aqcuire the details of the object passed into the function and allows the returning object to access the properties
  let uid = Math.floor(Math.random()*100);
  return {...obj, uid};
}


let documentLatest = addUIDNew({name: 'nitin', age: 35}); 
console.log(documentOneNew.name);
//let documentThree = addUIDLatest("Hello"); // This line will throw an error now.

//with Interfaces
interface Resource<T> {
  uid: number;
  resourceName : string;
  data: T
}

const dc1: Resource<object>  = {
  uid: 1,
  resourceName : "nitin",
  data: {age: 30}
}

//another e.g.
const dc2: Resource<string>  = {
  uid: 1,
  resourceName : "nitin",
  data: "example"
}

//another e.g.
const dc3: Resource<string[]>  = {
  uid: 1,
  resourceName : "nitin",
  data: ["example"]
}

console.log(dc1, dc2, dc3);

//================================================================

//ENUMS

enum ResourceType {BOOK=2, MOVIE=5, DRECTOR=6, PERSON=7};

interface ResourceNew<T> {
  uid: number;
  resourceType: ResourceType;
  data: T
}


const dc4: ResourceNew<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { name : "Book Of Mormon" }
}

const dc5: ResourceNew<string> = {
  uid: 1,
  resourceType: ResourceType.PERSON,
  data: "sample string"
}

console.log(dc4, dc5);

//================================================================

// TUPLES
// almost like an array but fixed size and type and order

let arr = ['ryu', 25, true];
arr[0] = false;
arr[2] = 'tom';

let tup: [string, number, boolean] = ['ryu', 25, true];
tup[0] = 'nitin';
// tup[0] = 25; this line will throw an error due to tuple type condition

let student: [string, number];
student = ['nitin', 10];


console.log(tup, student);

let tupAr: typeof student[] = [];
tupAr.push(['nitin', 10]);
tupAr.push(['sanju', 23]);
tupAr.push(['jerry', 43]);
console.log(tupAr);

//======================================================================
 
class LatticeMultiplication {
  static multiply(a: number, b: number): string {
      const aDigits: number[] = this.getNumberDigits(a);
      const bDigits: number[] = this.getNumberDigits(b);
      const productGrid: string[][] = this.buildProductGrid(aDigits, bDigits);
      const diagonalSums: number[] = this.computeDiagonalSums(productGrid);
      productGrid.forEach((pgArr)=> {
        console.log(pgArr);
      });
      const result: string = this.buildResult(diagonalSums);
      
      return result;
  }

  private static getNumberDigits(num: number): number[] {
      return num.toString().split('').map(Number).reverse();
  }

  private static buildProductGrid(aDigits: number[], bDigits: number[]): string[][] {
      const numRows: number = bDigits.length + 1;
      const numCols: number = aDigits.length + 1;
      const productGrid: string[][] = Array.from({ length: numRows }, () => Array(numCols).fill(' '));

      for (let i = 0; i < bDigits.length; i++) {
          for (let j = 0; j < aDigits.length; j++) {
              const product: number = bDigits[i] * aDigits[j];
              productGrid[i][j + 1] = product.toString();
          }
          productGrid[i][0] = bDigits[i].toString();
      }

      for (let i = 0; i < aDigits.length; i++) {
          productGrid[numRows - 1][i + 1] = aDigits[i].toString();
      }

      return productGrid;
  }

  private static computeDiagonalSums(productGrid: string[][]): number[] {
      const numRows: number = productGrid.length;
      const numCols: number = productGrid[0].length;
      const diagonalSums: number[] = Array(numRows + numCols - 1).fill(0);

      for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++) {
              const diagonalIndex: number = i + j;
              diagonalSums[diagonalIndex] += parseInt(productGrid[i][j]);
          }
      }

      return diagonalSums;
  }

  private static buildResult(diagonalSums: number[]): string {
      let result: string = '';

      for (let i = 0; i < diagonalSums.length; i++) {
          const carry: number = Math.floor(diagonalSums[i] / 10);
          const digit: number = diagonalSums[i] % 10;

          result = digit.toString() + result;

          if (carry > 0) {
              diagonalSums[i + 1] += carry;
          }
      }

      return result;
  }
}

// Example usage:
const result1: string = LatticeMultiplication.multiply(345, 56);
console.log(result1);



console.log("CALLING  printEncryptedMessage");
const encodedMsg = new AlphabetEncryption().printEncryptedMessage("This is New");
console.log("CALLED  printEncryptedMessage", encodedMsg);


  let arr1: number[][] = Array(4);
  let move = 'up';

  arr1[0] = "2 0 0 2".replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
  arr1[1] = "4 16 8 2".replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
  arr1[2] = "2 64 32 4".replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
  arr1[3] = "1024 1024 64 0".replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
  
const result12: number[][] = new TwoZeroFourEightGame().shuffleArray(arr1, move);
result12.forEach((a) => {
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
let calArr = [800, 700, 400, 300, 200];

const maxConsumedCals = new IngetstionQuestion().getmaxCalsConsumed(calArr, 900);
console.log("MAX CALS: ", Math.floor(maxConsumedCals));


const classList = new ToweringProblem().getTowerArray();
console.log("CLASS LIST :", classList);
// let nums: number[][] = [ 
//   [1, 2, 3],
//   [2, 24, 12],
//   [5, 3, 1],
//   [9, 15, 7],
//   [7, 2, 14],
//   [12, 4, 2]];
// let arrNum: number[] = [];
// nums.forEach((x) => {
//   const isPossible = new problemA().isPossible(x);
//   console.log(isPossible);
// });

let inputString = "42 ft in inch";
const units = new problemB().getConvertedUnits(inputString);
console.log("Converted Units: ",units);


const sum: number = x + y;
// const result: string = `The sum of ${x} and ${y} is ${sum}`;


// let s:string = "A B C D";
// const sArr: string[] = s.split(" ");
// const result  = s;

// console.log(s);



// const output = document.querySelector('#output');

// if (output) {
//   output.innerHTML = s;
// }
