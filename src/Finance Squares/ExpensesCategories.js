//In this file the expenses are categorized into different groups....

import { accountRecords } from "./AccountingRecords";
import { accountRecSearchAlgo } from "./ProjectObjects";

let allItemsWithIndex=[]
let foodItems=[];
let nonFoodItems=[];
let basicItems=[];
let stationeryItems=[];
let proposedNonFood=["pills","washingPowder","simCard","bathingSoap","pen","plasticFile","assignmentSheet","printing","hairDye"]
let proposedBasicItems=["eggs","tomatoes","transportCost","chicken","sadzaCost","sweetLassi","bread","","coffee","drink","biscuits","milk","rice","cookingOil","onion","potatoes","fruits"]
let proposedStatiioneryItems=["pen","plasticFile","assignmentSheet","printing"]
function  searchAlgo (arr,item){
     for(let i=0;i<arr.length;i++){
        if(arr[i].toLowerCase()===item.toLowerCase()){
            return true;
        }
     }
     return false;
}



accountRecords.map((exp,index)=>{
    allItemsWithIndex.push({exp,index})
    if(searchAlgo(proposedNonFood,exp.accountName)===false){
        foodItems.push({exp:exp,index:index})
    }
    else{
        nonFoodItems.push({exp,index})
    }
    if(searchAlgo(proposedBasicItems,exp.accountName)){
        basicItems.push({exp,index})
    }
    if(searchAlgo(proposedStatiioneryItems,exp.accountName)){
        stationeryItems.push({exp,index})
    }
})

// console.log("This is the food Item",stationeryItems)