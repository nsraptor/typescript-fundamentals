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

    // Calculate the minimum completion time for the Q-second time slots
    const qCompletionTime = Math.ceil(L / M) * Q;

    // Calculate the minimum completion time for the 1-second time slots
    
    const oneSecondCompletionTime = Math.ceil(S / M);

    // Add the completion times of Q-second and 1-second time slots
    const minCompletionTime = Math.max(qCompletionTime, oneSecondCompletionTime);

    return minCompletionTime;
}

rl.question('', (line) => {
    const [Q, M, S, L] = line.split(' ').map(Number);
    console.log(minCompletionTime(Q, M, S, L)); // Corrected function call
});