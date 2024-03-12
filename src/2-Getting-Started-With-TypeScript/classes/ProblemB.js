"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.problemB = void 0;
var problemB = /** @class */ (function () {
    function problemB() {
    }
    problemB.prototype.getConvertedUnits = function (inputString) {
        var unitRels = new Map();
        var str = "42 ft in inch";
        unitRels.set('in', 1000);
        unitRels.set('ft', 12 * 1000);
        unitRels.set('foot', 12 * 1000);
        unitRels.set('feet', 12 * 1000);
        unitRels.set('yd', 3 * 12 * 1000);
        unitRels.set('yard', 3 * 12 * 1000);
        unitRels.set('ch', 22 * 3 * 12 * 1000);
        unitRels.set('chain', 22 * 3 * 12 * 1000);
        unitRels.set('fur', 10 * 22 * 3 * 12 * 1000);
        unitRels.set('furlong', 10 * 22 * 3 * 12 * 1000);
        unitRels.set('mi', 8 * 10 * 22 * 3 * 12 * 1000);
        unitRels.set('miles', 8 * 10 * 22 * 3 * 12 * 1000);
        unitRels.set('lea', 3 * 8 * 10 * 22 * 3 * 12 * 1000);
        unitRels.set('league', 3 * 8 * 10 * 22 * 3 * 12 * 1000);
        var arr = str.split(" ");
        var noOfUnitsToConvert = parseInt(arr[0].trim());
        var unitsToConvertFrom = arr[1].trim();
        var unitsToConvertTo = arr[3].trim();
        console.log("Pasred string", noOfUnitsToConvert, unitsToConvertFrom, unitsToConvertTo);
        var totalThous = noOfUnitsToConvert * unitRels.get(unitsToConvertFrom);
        console.log(totalThous);
        var targetConvertedUnits = totalThous / unitRels.get(unitsToConvertTo);
        console.log(totalThous);
        return targetConvertedUnits;
    };
    return problemB;
}());
exports.problemB = problemB;
