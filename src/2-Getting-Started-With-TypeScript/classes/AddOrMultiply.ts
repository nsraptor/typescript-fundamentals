import { LinkedList, Set } from "typescript-collections";

export class AddOrMultiply {

    addOrMultiply(sOperations: string[]) {
        let initArr = [2, '+', 3, '*', 4];
        const sum = this.processExpressionString(initArr);
        console.log("SUM: ", sum);
       
        

    }


    decodeOp(op: string){
        return op.split(' '); 
    }

    processExpressionString(initArr: (string|number)[]) {
        let total = 0;
        let prod = 1;
        for(let i = 0; i<initArr.length; i++) {
            if(initArr[i+1] == '+') {
                total += parseInt(initArr[i].toString()) + prod;
                prod = 1;
            } else if(initArr[i+1] == '*') {
                prod *= parseInt(initArr[i].toString());
            }
        }
        
        return total;
    }


}