import { weekComputation } from "../RevisedWeekManagement";
import { year2024 } from "./ProjectObjects";
import { accountRecSearchAlgo } from "./ProjectObjects";

// Classs representing an expense account
let xyzHelperArray=[];
let accountRecords=[];
function xyzSearch(item){
    // xyzHelperArray.push(item)
if(!xyzHelperArray.length){
    return null;
}
for(let i=0;i<xyzHelperArray.length;i++){
    if(item.toLocaleLowerCase()===xyzHelperArray[i].toLocaleLowerCase()){
        return i;
    }
}
return null;
}
export {xyzHelperArray,xyzSearch};
// -----------------------
// const exp;
class ExpensesAccount{
    static ExpensesAccountCount=0;
    static indexPulse=23;     // only for the purpose of cprypting the Account Id
    #accountType;
    constructor(acc_name){
         
        this.#accountType="expenses"
        this.accountName=acc_name;
        ExpensesAccount.ExpensesAccountCount++;
        ExpensesAccount.indexPulse++;
        this.dailyLimit=0;
        this.weeklyLimit=0;
        // this.accountId;
        this.picNum=0;      //0 is assigned as the default picNum
        this.estimateBudget=0;
        this.firstOccuringDate=null;         //array type
        this.encurredDates=[];            //array type
        this.amounts={};  
        this.details=[]  ;           // array type
        // generateAccount ID
        // to generate alc id Im using my own cryptic algorithms wc goes as follows:
                // -take int account the acc_name (typeof string)
                //get the length of the said string
                //multiply it with the index pulse
                //and add it with the account_Type length
                let xxx= acc_name.toString().length * ExpensesAccount.indexPulse + this.#accountType.length;
                this.accountId=xxx.toLocaleString().padStart(10,"^").padEnd(13,"!");
                
            }

            arithmaticMean=()=>{
                let sum=0;
                var arithmaticMean;
                for(let i=0, n=this.details.length; i<n;i++){
                    sum+=this.details[i].total;
                    arithmaticMean=sum/n;
                }
                return arithmaticMean;
            }
            searchByDate=(date)=>{
                for(let i=0,n=this.details.length;i<n;i++){
                    if(date===this.details[i].date){
                        return this.details[i]
                    }
                }
                return null;
            }
            isTransportAccount(){
                if(this.accountName==="transportCost"){
                    return true;
                }
                else{
                    return null;
                }
            }
            dailyDeviationFromLimit(date){
                // This algorithm will calculate the deviation on each day from the limit value if any;
                //+(positive)deviation means the daily expenditure did not exceed the limit vaue
                // -(negetive) deviation means daily the expenditure exceeded the limit value by the magnitude obtained
                const accountType= this.isTransportAccount();
                const obj= this.searchByDate(date);
                if(!obj){
                    return null;
                }
                var observedTotal;
                if(accountType){
                    observedTotal=obj.total;
                }
                else{
                    observedTotal=obj.amount;
                }
                return  (this.dailyLimit - obj.total);
            }
            filterByTotal(total){
                const filterQueue=[];
                const accountType= this.isTransportAccount();
                for(let i=0, n= this.details.length;i<n;i++){
                    if(accountType){
                        if(this.details[i].total===total){
                            filterQueue.push(this.details[i])
                        }
                    }
                    else{
                        if(this.details[i].amount===total){
                            filterQueue.push(this.details[i])
                        }
                    }
                }
                return filterQueue
            }
            sortByTotal(){
                this.details.sort((a,b)=>{
                    if(this.isTransportAccount){
                     return   a.total - b.total;
                    }
                    else{
                       return a.amount - b.amount;
                    }
                })
            }
            sortByTotalReverse(){
                this.details.sort((a,b)=>{
                    if(this.isTransportAccount()){
                        return b.total- a.total;
                    }
                    else{
                        return b.amount- a.amount
                    }
                })
            }
            // getBadDays(){
                
            // }
            getBalanceAsPerDay(date){
                let loc=-1;
                let accumulativeBalance=0;
                for(let i=0,n=this.details.length;i<n;i++){
                    if(this.details[i].date===date){
                        loc=i;
                    }
                }
                if(loc===-1){
                    return null;
                }
                
                for(let j=0;j<loc;j++){
                    if(this.isTransportAccount){
                        accumulativeBalance+=this.details[j].total
                    }
                    else{
                        accumulativeBalance+=this.details[j].amount
                    }
                    
                }
                return accumulativeBalance;
            }
            getMonth(date){
// DD/MM/YYYY
                let dateList= date.split("/");
                var dayIndex, monthIndex, yearIndex, obj;
                dayIndex= dateList[0];
                // console.log(typeof(dayIndex))
                monthIndex= dateList[1];
                // console.log(typeof(monthIndex))
                yearIndex= dateList[2];
                // console.log(typeof(yearIndex))
                switch(monthIndex){
                    case  "1":
                      obj={month:"January", sName:"January2024",index:4}  ;
                      break;
                    case  "2":
                        obj={month:"February", sName:"February2024",index:5};
                        break;
                    case  "3":
                        obj={month:"March", sName:"March2024",index:undefined}
                        break;
                    case  "4":
                        obj={month:"April", sName:"April2024",index:undefined}
                        break;
                    case  "5":
                        obj={month:"May", Name:"May2024",index:undefined}
                        break;
                    case  "6":
                        obj={month:"June", sName:"June2024",index:undefined}
                        break;
                    case  "7":
                        obj={month:"July", sName:"July2024",index:undefined}
                        break;
                    case  "8":
                        obj={month:"August", sName:"August2024",index:undefined}
                        break;
                    case  "9":
                        obj={month:"September", sName:"September2024",index:0}
                        break;
                    case  "10":
                        obj={month:"October", sName:"October2024",index:1}
                        break;
                    case  "11":
                        obj={month:"November", sName:"November2024",index:2}
                        break;
                    case  "12":
                        obj={month:"December", sName:"December2024",index:3}
                        break;
                    case  "13":
                        obj={month:"December", sName:"December2024",index:3}
                        break;
                    case  "14":
                        obj={month:"December", sName:"December2024",index:3}
                        break;
                    case  "15":
                        obj={month:"December", sName:"December2024",index:3}
                        break;
                    case  "16":
                        obj={month:"December", sName:"December2024",index:3}
                        break;
                    default:
                        console.log("ERRRRRRROR");
                        break;
                }
                return obj
            }

            weeklyCalculations(){
                return weekComputation(accountRecSearchAlgo(this.accountName));
            }
            weekWithLargestSpendingRate(){
                let arr= this.weeklyCalculations();
                var highest=arr[0];
              
                for(let i=0;i<arr.length;i++){
                    if(arr[i].weeklyTotal >= highest.weeklyTotal){
                        highest=arr[i];
                    }
                }
                return highest;
            }
            weeksWithNoSpending(){
                let arr= this.weeklyCalculations();
                const zeroDays= [];
                for(let i=0;i<arr.length;i++){
                    if(arr[i].weeklyTotal===0){
                        zeroDays.push(arr[i]);
                    }
                }
                return zeroDays;
            }
            returnWeekNumber(date){
                //input: a specific date;
                //output:  the specific week  that the date belongs
                let arr = this.weeklyCalculations();
                for(let i=0;i<arr.length;i++){
                   for(let j=0;j<arr[i].days.length;j++){
                    if(arr[i].days[j].date===date){
                        return arr[i];      //return that specific week
                    }
                   }
                }
                return "Day not Found"
            }
          



}




// creating accounts----------------46 accounts fgor now
export {ExpensesAccount, accountRecords}

