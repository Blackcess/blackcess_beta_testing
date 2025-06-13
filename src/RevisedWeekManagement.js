import { accountRecords, year2024 } from "./Finance Squares/ProjectObjects";


class Week{
    static WeekNumber=0;
    constructor(){
        Week.WeekNumber++;
        this.days=[];
        this.capacity=7;
    }
    append(day){
        if(this.days.length<this.capacity){
            this.days.push(day);
        }
        else{
            // console.log("This Week Is Full.... WeekNumber: ",Week.WeekNumber);
            return;
        }
    }
    initialise(arr){
        for(let i=0;i<arr.length;i++){
            this.append(arr[i]);
        }
    }
    //why I need this..
    fomatDays(){
        if(!this.days.length){
            return null;
        }
        while(this.days.length){
            this.days.pop();
        }
    }

    specifiedEnquiry(account){
        let details={};
        let didCompute=false;
        let frequency=0;
        let days = [];
        if(this.days.length){
            for(let i=0;i<this.days.length;i++){
                let result = this.days[i].specifiedEnquiry(account);
                let amnts = this.days[i].getExpensesWithAmounts();
                // console.log("Thios is the Amnts: ",amnts)

                if(result){
                    didCompute= true;
                    frequency++;
                    let obj= {};
                    obj.date=this.days[i].getDate();
                    //Decipher the amounts that they don't contain unnecessary data...
                    for(let j=0;j<amnts.length;j++){
                       
                        if(amnts[j].props==account){ 
                            obj.amount=amnts[j].value;
                            // console.log("Come On Im Trying Here dude")
                        }
                        
                    }
                    days.push(obj);
                }
            }
            details.frequency=frequency;
            details.days=days;
            
            return details;
        }
        else{
            // console.log("Sorry Can't Access Becoz No Days In The Buffer");
            return;
        }
    }
}

//Week Data structure is completed.....^^^^

const myWeek = new Week();
// console.log(myWeek)
// console.log(year2024)


function clearBuffer(arr){
    while(arr.length){
        arr.pop();
    }
    return true;
}

function checkBufferFull(arr,size){
    if(arr.length===size || arr.length>size){
        // console.log("Value of length is ",arr.length)
        return true;
    }
    else{
        return false;
    }
}

function interuptLineCheck(value,target){
    if(value===target){
        return true;
    }
    return false;
}


function weekComputation(account)
  {
    let waitingQueue=[];
    let monthNo=0;
    let observations=[];
    let weekNo= 0;


    for(let l=0;l<year2024.length;l++){

        // code for each month

        let buffer = [];
    let visited =0;
    let month = year2024[l];
    let INTR = false;
    // console.log("My Month Is : ",month);
    let unAttendedDays= (month.monthDays.length) % 7;
    monthNo++;
    // console.log("Unattended days are : ",unAttendedDays)
    //now process the attended days
    for(let i=0,n = (month.monthDays.length - unAttendedDays); i<n;i++){
        // console.log("Am I Even Executing")
        if(!buffer.length && !INTR){
            for(let j=0;j<7;j++){
                
                buffer[j]=month.monthDays[visited];
                visited++;
                // console.log("Visited :",visited)
            }
            
                if(visited%7==0){
                 let result= checkBufferFull(buffer,7);

                 if(result){
                    weekNo++;
                    let tempWeek = new Week();
                    tempWeek.initialise(buffer);
                    let obj={};
                    obj.weekNumber=weekNo;
                    obj.monthNumber= monthNo;
                    obj.accountName=account.accountName;
                    let details = tempWeek.specifiedEnquiry(account.accountName);
                    obj.frequency=details.frequency;
                    obj.days=details.days;
                    let total=0;
                    for(let s=0;s<details.days.length;s++){
                        total+=details.days[s].amount;
                    }
                    obj.weeklyTotal=total;
                    observations.push(obj);
                    // console.log("Check My Object ",obj)
                    // observations.push(tempWeek)
                     INTR = interuptLineCheck(visited,(month.monthDays.length - unAttendedDays))
                    clearBuffer(buffer);
                 }
                
                
            }
        }
    }
    
        if(!buffer.length && INTR && unAttendedDays){
            for(let j=0;j<unAttendedDays;j++){
                buffer[j]=month.monthDays[visited+j];
            }
            weekNo++;
            let tempWeek = new Week();
            tempWeek.initialise(buffer);
            let obj={};
            obj.weekNumber=weekNo;
            obj.accountName=account.accountName;
            // console.log("This is my additional week...",tempWeek)
            let details = tempWeek.specifiedEnquiry(account.accountName);
            // console.log("My Detatils Thingy.....",details)
            obj.frequency=details.frequency;
            obj.days=details.days;
            let total=0;
            for(let s=0;s<details.days.length;s++){
                total+=details.days[s].amount;
            }
            obj.weeklyTotal=total;
            observations.push(obj);
        }



    }
    
    
    // console.log("Current Buffer Status",buffer)
    // console.log(observations);
    return observations;
  }

//  weekComputation(accountRecords[5]);
//   console.log(answer)
//   console.log(answer[0].days[0].getExpensesWithAmounts())
// console.log(answer[0].specifiedEnquiry(accountRecords[5].accountName))


export  {weekComputation}
  