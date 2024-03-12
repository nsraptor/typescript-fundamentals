'use strict';

import { WriteStream, createWriteStream } from "fs";


export class TwoZeroFourEightGame{
/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

    shuffleArray(arr: number[][], move: string): number[][] {
        // Write your code here

        
        switch(move) {
            case "up":
                for(let i=3;i>0;i--) {
                    for(let i=3;i>0;i--) {
                        arr = this.rowCompare(i-1, i, arr, move);
                    }
                }
                break;
            case "down":
                for(let i=0;i<3;i++) {
                    for(let i=0;i<3;i++) {
                        arr = this.rowCompare(i, i+1, arr, move);
                    }
                }
                break;
            case "right":
                for(let j=0;j<3;j++) {
                    for(let j=0;j<3;j++) {
                        arr = this.colCompare(j, j+1, arr, move);
                    }
                }
                break;
            default:
                for(let j=3;j>0;j--) {
                    for(let j=3;j>0;j--) {
                        arr = this.colCompare(j-1, j, arr, move);
                    }
                }
                break;
        }
        return arr;
    }

    rowCompare(rowAbove: number, rowBelow: number, arr: number[][], move: string) {
        for(let j=0; j<4;j++) {
            if(move == 'down') {
                if(arr[rowBelow][j] == arr[rowAbove][j] || arr[rowBelow][j] == 0 ) {
                    arr[rowBelow][j] += arr[rowAbove][j];
                    arr[rowAbove][j] = 0;
                }
            } else {
                if(arr[rowAbove][j] == arr[rowBelow][j] || arr[rowAbove][j] == 0 ) {
                    arr[rowAbove][j] += arr[rowBelow][j];
                    arr[rowBelow][j] = 0;
                }
            }
        }
        return arr;
    }

    colCompare( colLeft: number, colRight: number, arr: number[][], move: string) {
        for(let i=0; i<4;i++) {
            if(move == 'right') {
                if(arr[i][colRight] == arr[i][colLeft] || arr[i][colRight]== 0 ) {
                    arr[i][colRight] += arr[i][colLeft];
                    arr[i][colLeft] = 0;
                }
            } else {
                if(arr[i][colLeft] == arr[i][colRight] || arr[i][colLeft]== 0 ) {
                    arr[i][colLeft] += arr[i][colRight];
                    arr[i][colRight] = 0;
                }
            }
        }
        return arr;
    }

}