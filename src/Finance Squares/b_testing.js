import { year2024 } from "./ProjectObjects";
import { accountRecords } from "./ProjectObjects";
import { accountRecSearchAlgo } from "./ProjectObjects";


  let totalGenerator=(arr)=>{
        let sum=0;
        for(let i=0;i<arr.length;i++){
            sum+=arr[i];
        }
        return sum;
      
  }
    function deepBudgetComputation(account){

        let accountData=[];

        for(let i=0;i<year2024.length;i++){
          let temp={};
          temp.month=year2024[i].displayMonth();
          temp.days=[];
          let accumulatedTotal=[];

           for(let j=0;j<year2024[i].monthDays.length;j++){
            // console.log(year2024[i].monthDays[j])
          
                // console.log(year2024[i].monthDays[j].getExpensesWithAmounts())
                let myDay= year2024[i].monthDays[j].getExpensesWithAmounts();
                if(myDay!==null){
                    for(let l=0;l<myDay.length;l++){
                  if(myDay[l]["props"]===account.accountName){
                    accumulatedTotal.push(myDay[l]["value"])
                   temp.days.push(year2024[i].monthDays[j].getDate())
                  }
                }
            }
           
           } 
           temp.total=totalGenerator(accumulatedTotal)
            accountData.push(temp)
        }
        return accountData
    }
    // deepBudgetComputation(accountRecords[2])


    let calculateAmountAllocated=(accountRecords)=>{
      let allocAmountMap=[];
      for(let i=0; i<accountRecords.length;i++){
        let temp = deepBudgetComputation(accountRecords[i]);
        let sum =0;
        for(let j=0;j<temp.length;j++){
          sum+=temp[j].total;
        }
        // console.log("gfgyfgdf:",sum)
        let estimatedAverage = (sum/temp.length) 
        allocAmountMap[i]=estimatedAverage;
      }
      return allocAmountMap;
    }

    // console.log("We Outside: ",calculateAmountAllocated(accountRecords));
















    export {deepBudgetComputation,calculateAmountAllocated}



