import * as readline from 'readline';


export class ClassyProblem {
    
    
    // getClassOrderedList(/*peopleDetails: number[], n: number*/) {
        
    //     let arrdetails = [
    //         'mom: upper-upper-lower-middle class', 
    //         'dad: middle-middle-middle-lower-middle class',
    //         'queenelizabeth: upper-upper-upper class',
    //         'chair: lower-lower class',
    //         'unclebob: middle-middle-lower-middle class']
    //     let classMap = new Map<string, string[]>();

    //     arrdetails.forEach((entry)=> {
    //         let arr = entry.split(" ");
    //         let name = arr[0].replace(":", "");
    //         let classArr = arr[1].split("-");
    //         classMap.set(name, classArr);
    //     })
    //     console.log(classMap);

    //     return ["sample list"]
    // }


    // getHighestClassMember(cMap: Map<string, string[]>) {
    //     let name = "";
    //     for(let i=0; i<cMap.size; i++) {
    //         cMap.forEach((entry)=> {
    //             entry.
    //         })
    //     }
    // }


    // Function to sort people based on their class and name
    sortPeople(people: { name: string, class: string }[]): { name: string, class: string }[] {
        return people.sort((a, b) => {
            if (a.class !== b.class) {
                return a.class.localeCompare(b.class);
            } else {
                return a.name.localeCompare(b.name);
            }
        });
    }
    
    // Function to read input and process each case
    // processCases(numCases: number, rl: readline.Interface): void {
    //     for (let i = 0; i < numCases; i++) {
    //         rl.question('', (numPeopleStr: string) => {
    //             const numPeople = parseInt(numPeopleStr);
    //             const people: { name: string, class: string }[] = [];
    
    //             for (let j = 0; j < numPeople; j++) {
    //                 rl.question('', (personStr: string) => {
    //                     const [name, classStr] = personStr.split(': ');
    //                     people.push({ name, class: classStr });
    //                     if (people.length === numPeople) {
    //                         const sortedPeople = this.sortPeople(people);
    //                         sortedPeople.forEach(person => console.log(person.name));
    //                         console.log('==============================');
    //                     }
    //                 });
    //             }
    //         });
    //     }
    // }
    
    
}
// Reading input from stdin
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('', (numCasesStr: string) => {
//     const numCases = parseInt(numCasesStr);
//     new ClassyProblem().processCases(numCases, rl);
// });


