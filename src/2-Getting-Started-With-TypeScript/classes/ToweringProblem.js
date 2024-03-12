"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToweringProblem = void 0;
var ToweringProblem = /** @class */ (function () {
    function ToweringProblem() {
    }
    ToweringProblem.prototype.getTowerArray = function () {
        // let arr = [12,8,2,4,10,3,25,14]
        var arr = [12, 17, 36, 37, 51, 63, 92, 124];
        var towers = new Map();
        var pegsList = [];
        var len = arr.length;
        var t1Height = arr[len - 2];
        var t2Height = arr[len - 1];
        for (var i = 0; i < 6; i++) {
            pegsList.push(arr[i]);
        }
        for (var i = 0; i < len - 5; i++) {
            for (var j = 1; j < len - 3; j++) {
                console.log(arr[i], arr[j], arr[j + 1]);
                var height = arr[i] + arr[j] + arr[j + 1];
                console.log(height);
                if (height == t1Height) {
                    towers.set("t1", [arr[i], arr[j], arr[j + 1]]);
                    break;
                }
                if (height == t2Height) {
                    towers.set("t2", [arr[i], arr[j], arr[j + 1]]);
                    break;
                }
            }
        }
        return [towers.get("t1"), towers.get("t2")];
    };
    return ToweringProblem;
}());
exports.ToweringProblem = ToweringProblem;
