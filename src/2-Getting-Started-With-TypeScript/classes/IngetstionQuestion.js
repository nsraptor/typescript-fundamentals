"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngetstionQuestion = void 0;
var IngetstionQuestion = /** @class */ (function () {
    function IngetstionQuestion() {
        this.consumableCals = 0;
        this.initCals = 0;
        this.totalCals = 0;
        this.skippedMealsCounter = 0;
    }
    IngetstionQuestion.prototype.getmaxCalsConsumed = function (calsArr, initCal) {
        this.initCals = initCal;
        this.consumableCals = initCal;
        for (var i = 0; i < calsArr.length - 1; i++) {
            if (calsArr[i] == calsArr[i + 1] && calsArr[i] + calsArr[i + 1] < calsArr[i + 2]) {
                this.consumableCals = initCal;
                i++;
            }
            this.consumeCals(calsArr[i], calsArr[i + 1]);
        }
        this.consumeCals(calsArr[calsArr.length - 1], 0);
        return this.totalCals;
    };
    IngetstionQuestion.prototype.consumeCals = function (firstMealcals, secondMealCals) {
        console.log("Comparing Calories", firstMealcals, secondMealCals);
        var cal = this.totalCals;
        if (firstMealcals >= secondMealCals) {
            if (firstMealcals >= this.consumableCals) {
                this.totalCals += this.consumableCals;
            }
            else {
                this.totalCals += firstMealcals;
            }
            this.consumableCals = Math.floor(this.consumableCals * 2 / 3);
        }
        else {
            this.totalCals += 0;
            this.skippedMealsCounter++;
            if (this.skippedMealsCounter == 2) {
                this.consumableCals = this.initCals;
            }
        }
        console.log("Tota Calories consumed in this comparision:", Math.round(this.totalCals - cal));
    };
    return IngetstionQuestion;
}());
exports.IngetstionQuestion = IngetstionQuestion;
