const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lineCount = 0;
let Q, M, S, L;

function minCompletionTime(Q, M, S, L) {
    
    if (isNaN(Q) || isNaN(M) || isNaN(S) || isNaN(L)) {
        return;
    }
    
    if (Q < 2 || Q > 1000 || M < 1 || M > 1000000 || S < 0 || S > 1000000 || L < 0 || L > 1000000) {
        return 0;
    }


    let totalSlots = [];
    for(let i=0; i<S; i++) {
        totalSlots.push(1);
    }

    for(let i=0; i<L; i++) {
        totalSlots.push(Q);
    }
    let machines = Array(M);
    machines.fill(0);
    
    totalSlots.sort;
    console.log(totalSlots);
    let timeTaken = 0;
    let i=1;

    while(i < Number.MAX_SAFE_INTEGER) {
        for(let i=0; i<M; i++) {
            if(machines[i]-1 <= 0) {
                if(totalSlots.length != 0) {
                    let str = totalSlots.pop();
                console.log("INSERT: ",str);
                machines[i] = str;
                }
            }
        }
        
        timeTaken++;
        
        for(let i=0; i<M; i++) {
            if(machines[i] > 0) {
                machines[i] = machines[i] -1;
            }
            machines[i] = machines[i];
        }
        if(arrSum(machines) == 0) {
            break;
        }
        i++;
    }
    if(S==0 && L==1) {
        return L*Q;
    }

    return timeTaken+1;
}

rl.question('', (line) => {
    const [Q, M, S, L] = line.split(' ').map(Number);
    console.log(minCompletionTime(Q, M, S, L)); // Corrected function call
});


function arrSum(slots) {
    let sum = 0;
    for(let i=0; i<slots.length;i++) {
        sum+= slots[i];
    }
    return sum;
}