import { LinkedList } from "typescript-collections";

export class ToweringProblem {

    getTowerArray() {
        // let arr = [12,8,2,4,10,3,25,14]
        let arr = [12,17, 36, 37, 51, 63, 92, 124]

        let towers = new Map<string, number[]>();
        let pegsList: number[] = [];
        let len = arr.length;
        const t1Height = arr[len-2];
        const t2Height = arr[len-1];
        for (let i = 0; i < 6; i++) {
            pegsList.push(arr[i]);
        }

        for(let i=0;i<len-5; i++) {
            for(let j=1;j<len-3; j++) {
                console.log(arr[i], arr[j], arr[j+1]);
                let height = arr[i]+ arr[j]+arr[j+1];
                console.log(height);
                if(height == t1Height) {
                    towers.set("t1", [arr[i], arr[j], arr[j+1]]);
                    break;
                }

                if(height == t2Height ) {
                    towers.set("t2", [arr[i], arr[j], arr[j+1]]);
                    break;
                }
            }
        }
        
        
        return [towers.get("t1"), towers.get("t2")];
    }



}