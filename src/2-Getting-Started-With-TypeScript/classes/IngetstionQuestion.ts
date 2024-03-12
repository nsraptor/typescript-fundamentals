export class IngetstionQuestion{
    private consumableCals = 0;
    private initCals = 0;
    private totalCals = 0;
    private skippedMealsCounter = 0;
    
    getmaxCalsConsumed(calsArr: number[], initCal: number) {
      this.initCals = initCal;
      this.consumableCals = initCal;
      for(let i=0;i<calsArr.length-1; i++) {
        if(calsArr[i]==calsArr[i+1] && calsArr[i]+calsArr[i+1] < calsArr[i+2]) {
          this.consumableCals = initCal;
          i++;
        }
        this.consumeCals(calsArr[i], calsArr[i+1]);
      }
      this.consumeCals(calsArr[calsArr.length-1], 0);
      return this.totalCals;
  }

  consumeCals(firstMealcals: number, secondMealCals: number){
    console.log("Comparing Calories", firstMealcals, secondMealCals);
    const cal = this.totalCals;
    if(firstMealcals >= secondMealCals) {
        if(firstMealcals >= this.consumableCals) {
            this.totalCals += this.consumableCals;
        } else {
            this.totalCals += firstMealcals;

        }
        this.consumableCals = Math.floor(this.consumableCals * 2 / 3);
        
    } else {
        this.totalCals += 0;
        this.skippedMealsCounter++;
        if(this.skippedMealsCounter == 2) {
            this.consumableCals = this.initCals;
        }
    }
    console.log("Tota Calories consumed in this comparision:", Math.round(this.totalCals-cal));
  }
  
}