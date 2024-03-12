"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassyProblem = void 0;
var readline = require("readline");
var ClassyProblem = /** @class */ (function () {
    function ClassyProblem() {
    }
    // getClassOrderedList(/*peopleDetails: number[], n: number*/) {
    //     let arrdetails = [
    //         'mom: upper-upper-lower-middle class', 
    //         'dad: middle-middle-middle-lower-middle class',
    //         'queenelizabeth: upper-upper-upper class',
    //         'chair: lower-lower class',
    //         'unclebob: middle-middle-lower-middle class']
    //     let classMap = new Map<string, string[]>();
    //     arrdetails.forEach((entry)=> {
    //         let arr = entry.split(" ");
    //         let name = arr[0].replace(":", "");
    //         let classArr = arr[1].split("-");
    //         classMap.set(name, classArr);
    //     })
    //     console.log(classMap);
    //     return ["sample list"]
    // }
    // getHighestClassMember(cMap: Map<string, string[]>) {
    //     let name = "";
    //     for(let i=0; i<cMap.size; i++) {
    //         cMap.forEach((entry)=> {
    //             entry.
    //         })
    //     }
    // }
    // Function to sort people based on their class and name
    ClassyProblem.prototype.sortPeople = function (people) {
        return people.sort(function (a, b) {
            if (a.class !== b.class) {
                return a.class.localeCompare(b.class);
            }
            else {
                return a.name.localeCompare(b.name);
            }
        });
    };
    // Function to read input and process each case
    ClassyProblem.prototype.processCases = function (numCases, rl) {
        var _this = this;
        for (var i = 0; i < numCases; i++) {
            rl.question('', function (numPeopleStr) {
                var numPeople = parseInt(numPeopleStr);
                var people = [];
                for (var j = 0; j < numPeople; j++) {
                    rl.question('', function (personStr) {
                        var _a = personStr.split(': '), name = _a[0], classStr = _a[1];
                        people.push({ name: name, class: classStr });
                        if (people.length === numPeople) {
                            var sortedPeople = _this.sortPeople(people);
                            sortedPeople.forEach(function (person) { return console.log(person.name); });
                            console.log('==============================');
                        }
                    });
                }
            });
        }
    };
    return ClassyProblem;
}());
exports.ClassyProblem = ClassyProblem;
// Reading input from stdin
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('', function (numCasesStr) {
    var numCases = parseInt(numCasesStr);
    new ClassyProblem().processCases(numCases, rl);
});
