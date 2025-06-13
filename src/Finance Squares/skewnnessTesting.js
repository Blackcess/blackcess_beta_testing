import { weekComputation } from "../PositionAllocationTable";
import { accountRecords } from "./ProjectObjects";
import { accountRecSearchAlgo } from "./ProjectObjects";
import getDegree from "./coefficiencyDegreeTable";


let fsum=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum;
}
let fmode=(farr,marr)=>{
    let highestFrequency=farr[0];
    let pos=0;
    for(let i=0;i<farr.length;i++){
        if(farr[i]>highestFrequency){
            highestFrequency=farr[i];
            pos=i;
        }
    }
    return marr[pos]

}





const marks = [10,11,15,17,20,25,28];
const frequency=[2,5,9,14,10,6,4];




let KarlPerlsonSkewness= (marks,frequency)=>{
    let fx=[];
    for(let i=0;i<marks.length;i++){
        fx[i]= marks[i] * frequency[i];
    }
    
    let assumedMean= (fsum(fx))/(fsum(frequency));
    let d=[];
    for(let i=0;i<marks.length;i++){
        d[i]=marks[i]-assumedMean
    }
    
    
    let fd=[];
    for(let i=0;i<d.length;i++){
        fd[i]= d[i]*frequency[i];
    }
    
    let dSquared=[];
    for(let i=0;i<d.length;i++){  
        dSquared[i] = d[i]* d[i];
    }
    let fdSquared=[];
    for(let i=0;i<dSquared.length;i++){
        fdSquared[i]= frequency[i] * dSquared[i];
    }
    
    let sumDsquared= fsum(dSquared);
    let SD= Math.sqrt(((fsum(fdSquared))/(fsum(frequency)))-(fsum(fd)/fsum(frequency))**2);
    console.log("Standard DEviation: ",SD);
    let Mode= fmode(frequency,marks);
    let SK = ((assumedMean-Mode)/SD) ;
    console.log("Coefficient of skewness is: ",SK)
    //conclusion
    if(SK<0.5){
        console.log("The values in the data set are not symmetric at all;")
    }
}
// KarlPerlsonSkewness(marks,frequency)


//finding the coefficiency of correlation between two variables
function dataMixer(value,frequency){
    let temp =[];
    for(let i=0;i<value.length;i++){
        temp[i]=value[i]*frequency[i];
    } 
    return temp;
}

function minimum(x,y){
    if(x<y){
        return x;
    }
    else{
        return y;
    }
}
function mean(x){
   let sum= fsum(x);
   let mean = sum/(x.length)
   return mean
}

function meanDeviation(X,meanX){
    let meanDeviation=[];
  for(let i=0;i<X.length;i++){
    meanDeviation[i]=X[i]-meanX;
  }
  return meanDeviation
}
function Var(meanDeviation){
    let variance= [];
    for(let i=0;i<meanDeviation.length;i++){
        variance[i]=meanDeviation[i]**2;
    }
    return variance;
}
function Covariance(X,Y){
    // input: mean deviations
    let covariance=[];
    for(let i=0;i<minimum(X.length,Y.length);i++){
        covariance[i]= X[i]*Y[i];
    }
    return covariance;
}
function StandardDeviation(variance){
    let n = variance.length;
    let sum = fsum(variance);
    return (Math.sqrt(sum));
}

function correlationXY(X,Y){

  let n = minimum(X.length,Y.length);
  
  let meanX= mean(X);
  let meanY = mean(Y);
  
  //culculating mean deviation
  let meanDeviationX= meanDeviation(X,meanX)
  let meanDeviationY= meanDeviation(Y,meanY)
  //calculate the mean deviation Square (variance)
    let varianceX= Var(meanDeviationX);
    let varianceY= Var(meanDeviationY);
    //calculate standard deviation
    let standardDeviationX=StandardDeviation(varianceX);
    let standardDeviationY=StandardDeviation(varianceY);
    //calculate coefficient of correlation
    let cf= fsum(Covariance(meanDeviationX,meanDeviationY))/((standardDeviationX)*(standardDeviationY));
   return {
    cf:cf,
    meanFirst:meanX,
    meanSecond:meanY,
    standardDeviationFirst:standardDeviationX,
    standardDeviationSecond:standardDeviationY,
    percentageCorrelation:cf*100,
    degree:getDegree(cf),
   }
}


// let X =[45,70,65,30,90,40,50,75,85,60];
// let Y =[35,90,70,40,95,40,60,80,80,50];
// correlationXY(X,Y)
// let temp = accountRecords[5].weeklyCalculations();
// let secondArr = accountRecords[42].weeklyCalculations();
function feeding(array){

    let account1=[];
    let account2=[];
    for(let i=0;i<array.length;i++){
       
        if(i<=21){
            account1[i]=array[i].weeklyTotal;
        }
        else{
            account2[i-22]=array[i].weeklyTotal;
        }
    }
    return {firstAccount:account1,secondAccount:account2};
}

// let result = correlationXY(feeding(secondArr).firstAccount,feeding(secondArr).secondAccount)
// console.log(feeding(secondArr).secondAccount)
// console.log("Co-efficient of cprrelation is: ",result)

let correlationCalculation=  (accountName1,accountName2)=>{
   let gee= accountRecSearchAlgo(accountName1).weeklyCalculations();
   let gii= accountRecSearchAlgo(accountName2).weeklyCalculations();
   let accounts=feeding(gee);
   let result= correlationXY(accounts.firstAccount,accounts.secondAccount)

//    console.log(gee)
// //    console.log(gii)
return result;
}
console.log(correlationCalculation("transportCost","cookingOil"));








export {KarlPerlsonSkewness,dataMixer,correlationCalculation}