// Day class 
import { decemberBudget } from "./DecemberBudget.js";
import { ExpenseTemplateList,monthExpenses,DecemberExpenseList,NovemberExpenseList,OctoberExpenseList,SeptemberExpenseList,JanuaryExpenseList,FebruaryExpenseList} from "./ExpenseTemplateLinkedList.js";
import { novemberBudget } from "./novemberBudget.js";
import { octoberBudget} from "./octioberBudget.js";
import { JanuaryBudget } from "./JanuaryBudget.js";
import { februaryBudget } from "./FebruaryBudget.js";
import { BuiltInTemplate } from "./MonStandardLibraryUtil.js";
import { septemberBudget } from "./septemberBudget.js";
import { xyzHelperArray,xyzSearch } from "./AccountingRecords.js";
import { ExpensesAccount, accountRecords } from "./AccountingRecords.js";
import { CgLayoutGrid } from "react-icons/cg"; 
import { deepBudgetComputation,calculateAmountAllocated } from "./b_testing.js";

// .............................


 function selectMonth(index){
    return monthExpenses[index-1];
}
 function listInitialise(list,monthBudget){
    //Initialising an existing expenses list with already recorded expenses data from monthBudgets (e.g novemberBudget, etc...)
    let index=1;
    let month= monthBudget.dailyUse;
    month.forEach(element=>{
        let day = element.day;
        list.insertEnd(element.expenses,index);
        index++;
    })
}

// ..................................

//initialising DecemberList, && NovemberList
listInitialise(DecemberExpenseList,decemberBudget);
listInitialise(NovemberExpenseList,novemberBudget);
listInitialise(OctoberExpenseList,octoberBudget);
listInitialise(SeptemberExpenseList,septemberBudget);
listInitialise(JanuaryExpenseList,JanuaryBudget);
listInitialise(FebruaryExpenseList,februaryBudget);

function monthNumberMapping(month){
    if(month%12===0){
        return 12;
    }
    return month%12;
}


function setDate(month){
   let  years=["2024","2025","2026","2028","2029","2030"];
   let fullDate={};
// if(month!==12){ 
//     fullDate.mapped_month= month % 12 ;
// }
// else{
//     fullDate.mapped_month=12;
// }

    fullDate.mapped_month=monthNumberMapping(month);

   if(month<=12){
    fullDate.year=years[0];
   }
   else{
    if(month>12){
        fullDate.year=years[1];
    }
   

   }
   return fullDate;
    
}





// -------------------------> Day for aaron Class defination
class Day {
    static dayCount=0;
    #dayID;
    #date;
    #dayKey;
    #expensesLength;
    constructor(dayNo, month){
        this.month=month;
        this.#dayKey=dayNo;
        this.expenses=null;
        Day.dayCount++;
        //generating dateID 
        this.#dayID=(this.#dayKey*256).toLocaleString().padStart(6,"@").padEnd(10,'#');
        //initialising the expenses field.
        // The expenses field is being initialise by seraching a node with given id in the main expenses list and returning the same;
        
            this.expenses=selectMonth(this.month).searchNode(this.#dayKey);
        var temp=new BuiltInTemplate(month);
       this.startDeviation= temp.getStartingDay();
       this.currentDate=dayNo + this.startDeviation;
      var fullDate= setDate(month);
        this.#date= `${this.currentDate}/${fullDate.mapped_month}/${fullDate.year}`;
     
    }
    //getter function for the dayID
    getDayID= ()=>{
        return this.#dayID;
    }
    getDayKey=()=>{
        return this.#dayKey;
    }
    getDate=()=>{
        return this.#date;
    }
    getCurrentDayCount= ()=>{
        return Day.dayCount;
    }
    getExpenses=()=>{
        //to be refactored later
            return selectMonth(this.month).displayDayExpenses(this.#dayKey);
    }
    getExpensesWithAmounts=()=>{
        //to be refactored later
            return selectMonth(this.month).displayDayExpensesWithAmounts(this.#dayKey);
    }

    getTotalPerDay=()=>{
           return selectMonth(this.month).dailyExpenses(this.#dayKey)
}
getListOfExpenses=()=>{                        //HELPER FUNCTION NOT TO BE USED ALONE OUTSIDE OF THE CLASS
   return selectMonth(this.month).displayListOfExpenses(selectMonth(this.month).searchNode(this.#dayKey));
}
xyzAlgo=()=>{
    this.getListOfExpenses().forEach((exp)=>{
        let result= xyzSearch(exp);
        if(result===null){
            xyzHelperArray.push(exp)
        }
        else{
            console.log("Already present");
        }
    })
    
}
// create a method that enquires if a specific commoditity was purchased that day
specifiedEnquiry(exp){
    let arr= this.getExpenses();
    for(let i=0;i<arr.length;i++){
        if(arr[i].toLowerCase()===exp.toLowerCase()){
        return true;
        }
    }
        return false
}

 
}
// let day1 = new Day(1,12);
// ---------------------------->


class Month{
    static monthCount=0;
    #monthKey;
    #monthID;

    constructor(month){
        this.isDone=false;
        Month.monthCount++;
        this.#monthKey=month;
        this.startingDay="";
        this.endingDay="";
        this.budget=null;
        this.monthDays=[];
        //genearting Month id
        this.#monthID = (this.#monthKey*343).toString().padStart(7,"%").padEnd(10,"!");
        if(this.monthDays.length===30){
            this.isDone=true;
        }
        else{
            this.isDone=false;
        }
        let initial_transit= setDate(this.#monthKey);
        let temp = new BuiltInTemplate(initial_transit.mapped_month)
        this.monthName= temp.getMonth();
        this.mtnNumber= initial_transit.mapped_month;

    }
    //methods
    getMonthID=()=>{
        return this.#monthID;
    }
    getmonthKey=()=>{
        return this.#monthKey;
    }
    setStartingDate=(date)=>{
        
         this.startingDay=  `${date}/${this.mtnNumber}/${setDate(this.#monthKey).year}`;

    }
    setEndingDate=(date)=>{
        return `${date}/${this.mtnNumber}/${setDate(this.#monthKey).year}`
    }
    setBudget=(amount)=>{
        let budget =amount;
        return budget; 
    }
   #createDay=(id,mnt)=>{
    //no expenses initialised....i.e expenses array  is empty
    let newDay= new Day(id,mnt);
        return newDay;
   }
   addDay=(id,mnt)=>{
    let newDay = this.#createDay(id,mnt);
    // console.log("This is the day expenses",newDay.expenses)
    this.monthDays.push(newDay);
    return newDay;
   }
   showDays=()=>{
    if(!this.monthDays.length) console.log("No Days in this month"); 
        this.monthDays.forEach((element)=>{
        // console.log("Day: ", element.getDayKey());
        // console.log("Date: ", element.getDate());
        // console.log("BudgetNo.: ",element.getDayID());
        // console.log(element.getExpenses());
        // console.log("Total: ", element.getTotalPerDay());
        // console.log(element);

        let summary= {
            day:element.getDayKey(),
            date:element.getDate(),
            budgetNo:element.getDayID(),
            expenses:element.getExpenses(),
            total:element.getTotalPerDay()

        }
        return summary
      
    })
   }
   forceSetStatus=()=>{
    this.isDone=true;
   }
   initialiseExistingMonth(month,n){
    //Parameters are the month(in integer form) and the number of days in that month
    this.forceSetStatus() 
    var thisMonth;
    if(month===this.#monthKey){
        thisMonth="December";
        for(let i=1;i<=n;i++){
            this.addDay(i,month);
        }
    }
    else   console.log("Error: Make sure you passed the correct month");
    
   }
   //this algorithm search for a date in aspecific month
   searchDate(date){
    for(let i=0,n=this.monthDays.length;i<n;i++){
        if(date===this.monthDays[i].getDate()){
            return this.monthDays[i];  
        } 
    }
    return null;
   }
   //creating an array of the expenses present in all the days (hence the use of the for Each operation)
   xyzAlgorithm=()=>{
        this.monthDays.forEach((day)=>{
            day.xyzAlgo()
        })
   }

   displayMonth(){
   let correctedMonth= setDate(this.#monthKey).mapped_month;
   let temp = new BuiltInTemplate(correctedMonth);
   return temp.getMonth();
   }
   getMonthTotal(){
    let total=0
    for(let i=0;i<this.monthDays.length;i++){
       total+=this.monthDays[i].getTotalPerDay();
    }
    return total;
   }

}
const December2024 = new Month(12);
December2024.setStartingDate(1);
const November2024= new Month(11);
November2024.setStartingDate(1);
const October2024= new Month(10);
October2024.setStartingDate(3);
const September2024= new Month(9);
September2024.setStartingDate(6);
const January2025= new Month(13);
January2025.setStartingDate(1);
const February2025= new Month(14);
February2025.setStartingDate(1);
November2024.initialiseExistingMonth(11,30);
December2024.initialiseExistingMonth(12,24);
October2024.initialiseExistingMonth(10,28);
September2024.initialiseExistingMonth(9,25);
January2025.initialiseExistingMonth(13,31); 
February2025.initialiseExistingMonth(14,28); 

const year2024=[September2024,October2024,November2024,December2024,January2025,February2025];

// console.log("Thissssssss issssss tshhssss Jan2025:", January2025.monthDays)
// console.log("The ####kye is: ",January2025.getmonthKey())





function CreateExpenseAccount(){
    year2024.forEach((month)=>{
    month.xyzAlgorithm();
   })
   let picNum = 1;
   xyzHelperArray.forEach((element)=>{
       let temp = new ExpensesAccount(element);
       temp.picNum=picNum;
       accountRecords.push(temp);
       picNum++;
   })
}
CreateExpenseAccount();




// Implementing Algorithm Shnobol;
    year2024.forEach((year=>{
    year.monthDays.forEach((day)=>{
        let currentDayKeepUpArr=Object.keys(day.expenses.expensesList);
        let temp  =day;
        currentDayKeepUpArr.forEach((expenseKey)=>{
            for(let i=0;i<accountRecords.length;i++){
                if(expenseKey.toLocaleLowerCase()===accountRecords[i].accountName.toLocaleLowerCase()){
                    let obj = {};
                    obj.title=`${expenseKey}`
                    obj.date= temp.getDate();
                    if(expenseKey.toLowerCase()==="transportCost".toLowerCase()){
                    obj.total= day.expenses.expensesList[expenseKey].total
                    obj.firstPart= day.expenses.expensesList[expenseKey].firstPart
                    obj.secondPart= day.expenses.expensesList[expenseKey].secondPart
                    accountRecords[i].dailyLimit=80;
                    accountRecords[i].estimateBudget=2000;
                    }
                else  {
                    obj.amount= day.expenses.expensesList[expenseKey].amount;
                }
                accountRecords[i].details.push(obj)
                }
            }
        })
    })
}))


   
  

   
    
    let sum = 0;
    var arthmeticMean;
    var abscentDaysIndex=[];
    var abscentDays=[];
    for(let i=0;i<accountRecords[5].details.length;i++){
        
        sum+=(accountRecords[5].details[i].total); 
        arthmeticMean= (sum/accountRecords[5].details.length)
        if(accountRecords[5].details[i].total===0){
            abscentDaysIndex.push(i);
        }

    }
    // console.log(arthmeticMean);

    abscentDaysIndex.forEach(index=>{
       abscentDays.push(accountRecords[5].details[index].date) ;
    })

    // Making deductions from the data
    let septemberDeductions={}
    septemberDeductions.offSchoolDays=`${abscentDaysIndex.length}`;
    septemberDeductions.abscentDates= abscentDays;
    septemberDeductions.mean= arthmeticMean;

console.log(`The Deductions from the month of  September are: 
             The Mean transportCost is: ${septemberDeductions.mean} rupees.
             You didn't go to college for ${septemberDeductions.offSchoolDays} days (weekends inclusive)   

    `); 

// let month_total= January2025.showDays();
// console.log("Total: ",month_total.total)

    
//a searching algorithm through the accountRecords array
function accountRecSearchAlgo(item){ 
for(let i=0;i<accountRecords.length;i++){
    if(accountRecords[i].accountName.toLocaleLowerCase()===item.toLocaleLowerCase()){
        return accountRecords[i];
    }
}
return null;
}


// accounts limits mapping
function accountLimitMapping(){
      let temp = calculateAmountAllocated(accountRecords)
    for(let i=0;i<accountRecords.length;i++){
        accountRecords[i].estimateBudget=temp[i];
        accountRecords[i].dailyLimit=(temp[i]/30);
        accountRecords[i].weeklyLimit=(temp[i]/4);
    }
}

    accountLimitMapping();


  console.log(accountRecords);




export {accountRecords,year2024,accountRecSearchAlgo}
