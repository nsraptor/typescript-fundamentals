'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoZeroFourEightGame = void 0;
var TwoZeroFourEightGame = /** @class */ (function () {
    function TwoZeroFourEightGame() {
    }
    /*
     * Complete the 'hourglassSum' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts 2D_INTEGER_ARRAY arr as parameter.
     */
    TwoZeroFourEightGame.prototype.shuffleArray = function (arr, move) {
        // Write your code here
        switch (move) {
            case "up":
                for (var i = 3; i > 0; i--) {
                    for (var i_1 = 3; i_1 > 0; i_1--) {
                        arr = this.rowCompare(i_1 - 1, i_1, arr, move);
                    }
                }
                break;
            case "down":
                for (var i = 0; i < 3; i++) {
                    for (var i_2 = 0; i_2 < 3; i_2++) {
                        arr = this.rowCompare(i_2, i_2 + 1, arr, move);
                    }
                }
                break;
            case "right":
                for (var j = 0; j < 3; j++) {
                    for (var j_1 = 0; j_1 < 3; j_1++) {
                        arr = this.colCompare(j_1, j_1 + 1, arr, move);
                    }
                }
                break;
            default:
                for (var j = 3; j > 0; j--) {
                    for (var j_2 = 3; j_2 > 0; j_2--) {
                        arr = this.colCompare(j_2 - 1, j_2, arr, move);
                    }
                }
                break;
        }
        return arr;
    };
    TwoZeroFourEightGame.prototype.rowCompare = function (rowAbove, rowBelow, arr, move) {
        for (var j = 0; j < 4; j++) {
            if (move == 'down') {
                if (arr[rowBelow][j] == arr[rowAbove][j] || arr[rowBelow][j] == 0) {
                    arr[rowBelow][j] += arr[rowAbove][j];
                    arr[rowAbove][j] = 0;
                }
            }
            else {
                if (arr[rowAbove][j] == arr[rowBelow][j] || arr[rowAbove][j] == 0) {
                    arr[rowAbove][j] += arr[rowBelow][j];
                    arr[rowBelow][j] = 0;
                }
            }
        }
        return arr;
    };
    TwoZeroFourEightGame.prototype.colCompare = function (colLeft, colRight, arr, move) {
        for (var i = 0; i < 4; i++) {
            if (move == 'right') {
                if (arr[i][colRight] == arr[i][colLeft] || arr[i][colRight] == 0) {
                    arr[i][colRight] += arr[i][colLeft];
                    arr[i][colLeft] = 0;
                }
            }
            else {
                if (arr[i][colLeft] == arr[i][colRight] || arr[i][colLeft] == 0) {
                    arr[i][colLeft] += arr[i][colRight];
                    arr[i][colRight] = 0;
                }
            }
        }
        return arr;
    };
    return TwoZeroFourEightGame;
}());
exports.TwoZeroFourEightGame = TwoZeroFourEightGame;
