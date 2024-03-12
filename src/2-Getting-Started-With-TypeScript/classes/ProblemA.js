"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.problemA = void 0;
var problemA = /** @class */ (function () {
    function problemA() {
    }
    problemA.prototype.isPossible = function (arr) {
        //let arr: number[] = [];
        if (arr.length == 1) {
            return 'Possible';
        }
        if (arr.length == 0) {
            return 'Impossible';
        }
        var a = arr[0];
        var b = arr[1];
        var c = arr[2];
        if (b == 0 && a == c) {
            return 'Possible';
        }
        else if (a == 0 && b == c) {
            return 'Possible';
        }
        else {
            if (a + b == c || Math.abs(a - b) == c || a * b == c || a / b == c || b / a == c) {
                return 'Possible';
            }
            else {
                return 'Impossible';
            }
        }
    };
    return problemA;
}());
exports.problemA = problemA;
