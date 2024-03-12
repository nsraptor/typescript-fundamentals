export class problemB {
    
    getConvertedUnits(inputString: string) {
        let unitRels = new Map<string, number>();
        let str = "42 ft in inch";

        unitRels.set('in', 1000);
        unitRels.set('ft', 12000 );
        unitRels.set('foot', 12000 );
        unitRels.set('feet', 12000 );
        unitRels.set('yd', 36000);
        unitRels.set('yard', 3 * 12 * 1000);
        unitRels.set('ch', 22 * 3 * 12 * 1000);
        unitRels.set('chain', 22 * 3 * 12 * 1000);
        unitRels.set('fur', 10 * 22 * 3 * 12 * 1000);
        unitRels.set('furlong', 10 * 22 * 3 * 12 * 1000);
        unitRels.set('mi', 8 * 10 * 22 * 3 * 12 * 1000);
        unitRels.set('miles', 8 * 10 * 22 * 3 * 12 * 1000);
        unitRels.set('lea', 3 * 8 * 10 * 22 * 3 * 12 * 1000);
        unitRels.set('league', 3 * 8 * 10 * 22 * 3 * 12 * 1000);

        let arr = str.split(" ");
        let noOfUnitsToConvert = parseInt(arr[0].trim());
        let unitsToConvertFrom = arr[1].trim();
        let unitsToConvertTo = arr[3].trim();
        console.log("Pasred string",noOfUnitsToConvert, unitsToConvertFrom, unitsToConvertTo );
        const totalThous = noOfUnitsToConvert * unitRels.get(unitsToConvertFrom)!;
        console.log(totalThous);
        let targetConvertedUnits =  totalThous / unitRels.get(unitsToConvertTo)!;
        console.log(totalThous);
        return targetConvertedUnits;    
    }
}