import { CgLayoutGrid } from "react-icons/cg";
import { accountRecords,year2024 } from "./Finance Squares/ProjectObjects";
import { wait } from "@testing-library/user-event/dist/utils";
// import { year2024 } from "./Finance Squares/ProjectObjects";

//create a week class that will provide all needed calculations and operations on a week
class Week{
    static weekNumber=0;
    constructor(){
            Week.weekNumber++;
            this.days=[];
            this.capacity=7;
    }
    initialise(arr){
        for(let i=0;i<arr.length;i++){
            this.append(arr[i]);
        }
    }
    append(day){
        
        if(this.days.length<this.capacity){
            this.days.push(day)
        }
        else{
            console.log("This Week Is Full.. WeekNo. : ",Week.weekNumber)
        }
    }
    fomatDays(){
        if(this.days.length===0){
            return null;
        }
        while(this.days.length){
            this.days.pop();
        }
    }
    
    specifiedEnquiry(account){
        let details={};
        let didCompute=false;
        let frequency=0
        let days=[];
        if(this.days.length){
            for(let i=0;i<this.days.length;i++){
               let result = this.days[i].specifiedEnquiry(account);
               let amnts = this.days[i].getExpensesWithAmounts();
            //    console.log(amnts);
               if(result){
                didCompute = true;
                frequency++;
                let obj={};
                obj.date=this.days[i].getDate();
                //decipher the amnts so that it does not pass all the uncessary data
                for(let i=0;i<amnts.length;i++){
                    if(amnts[i].props===account){
                        obj.amount=amnts[i].value;
                    }
                }
                days.push(obj);
               }
            }
            details.frequency= frequency;
            details.days=days;
            
            return details;
        }
        else{
            console.log("Sorry Can't search because there are no days entered in this week")
        }
    }
    //To understand the trend of expenses on the weekly basis 
}
// const myWeek = new Week();


// let month= year2024[0];

let observations=[];                    //buffer that stores the results of weekly computations....
let waitingQueue=[];                    //initially the queue is empty
const maxCapacity=7;
function removeFalsy(arr){              //terminates all weeks that are filled by undefined
     for(let i=0;i<arr.length;i++){
        if(arr[i]===undefined){
            arr.splice(i,(arr.length-i))
            return;
        }
     }
}
function clearBuffer(buffer){           //Perfoms the CLR operations on a buffer
   while(buffer.length){
    buffer.shift();
   }
}

   function autoFill(arr,n,val){        //Automatically fills a buffer with a custom value 
    for(let i=0;i<n;i++){
        arr.push(val);
    }
   }


   function undefinedHandler(arr){      
    for(let i=0;i<arr.length;i++){
        if(arr[i]===undefined){
            // clearBuffer(arr);
            // console.log("The array is having elements:",i+1)
            for (let j=0; j<arr.length;j++){
              if(arr[j]){ 
               let imported= arr.pop();
               waitingQueue.unshift(imported)
            //    console.log("WaitingList----",waitingQueue)
              }
            }
            // console.log("Imported is :",waitingQueue)
            removeFalsy(waitingQueue)
            return;
        }
        
    }
   }

function countVisited(visited){
    let counter=0;
    for(let i=0;i<visited.length;i++){
        if(visited[i]==true);
             counter++;
    }
    return counter;
}
let buffer =[];
function weekComputation(arr,account){
    //clear the observation buffer
    clearBuffer(observations);
    // console.log(countVisited(visited))
    let week_no=0;
    let month_no=0;
    for(let z=0;z<6;z++){ 
        month_no++;
        let visited=[];
        autoFill(visited,arr[z].monthDays.length,false);
        // console.log("The days in the array are: ",arr[z].monthDays.length)
while((arr[z].monthDays.length)-countVisited(visited)>=7){ 
    if((arr[z].monthDays.length)-countVisited(visited)>=7){
        if(countVisited(visited)===0){
            if(waitingQueue.length===7){
                for(let k=0;k<7;k++){
                    buffer[k]=waitingQueue[k];
                }
                clearBuffer(waitingQueue);
            }
        }
        if(!buffer.length){
          //if buffer is empty then do as below;
        for(let j=0;j<7;j++){
            buffer[j]=arr[z].monthDays[countVisited(visited)]
            visited[countVisited(visited) + j]= true;
        }
        undefinedHandler(buffer);
    }
        week_no++;
        let myWeek = new Week();
        myWeek.initialise(buffer);
        let obj={};
        // let details = myWeek.specifiedEnquiry("cookingOil");
        obj.weekNumber=week_no;
        obj.monthNumber=month_no;
        obj.accountName=account;
        // obj.details=details;
        let details=myWeek.specifiedEnquiry(account);
        obj.frequency=details.frequency;
        obj.days=details.days;
        let total = 0;
        for(let r=0;r<details.days.length;r++){
            total+=details.days[r].amount;
        }
        obj.weeklyTotal=total;
        
        observations.push(obj)
        // console.log(myWeek)
        clearBuffer(buffer)
        // myWeek.fomatDays();
    }
  }
}
return observations;
}
// weekComputation(year2024,accountRecords[5])
// console.log(observations)
//Now the array observations contain the details of the weekly accounts that the client searched

// export {weekComputation,observations}






function  sort(arr){
    for(let i=0;i<arr.length;i++){
        let smallest = arr[i];
        for(let j=i+1;j<arr.length;j++){
           if(arr[j]>smallest){
            let temp =  arr[j];
            arr[j]=arr[i];
            arr[i]=temp;
            smallest=arr[i]        
           }
        }
    }
    
}
// let arr=[47,80,38,93,64,67,72,50,60,85,89,81,81,71,81,74,82,85,63,74]
// sort(arr)
// console.log(arr)

export  {sort}