function getDegree(cf){
    var degree="";
    if(cf===1 || cf===-1){
        if(cf===1){
          return  degree= "Positively Perfect"
        }
        else{
           return degree="Negetively Perfect"
        }
    }
    if((cf>=0.9 && cf<1) || (cf<-0.9 && cf>-1)){
        if((cf>=0.9 && cf<1)){
            return degree= "Very High Degree Of Correlation (Positive Correlation)"
        }
        else{
            return degree= "Very High Degree Of Correlation (Negetive Correlation)"
        }
       
    }
    if((cf>=0.75 && cf<0.9) || (cf<-0.75 && cf>-0.9)){
        if((cf>=0.75 && cf<0.9)){
            return degree= "Fairly High Degree Of Correlation (Positive Correlation)"
        }
        else{
              return degree= "Fairly High Degree Of Correlation (Negetive Correlation)"
        }
    }
    if((cf>=0.50 && cf<0.75) || (cf<-0.50 && cf>-0.75)){
        if((cf>=0.50 && cf<0.75)){
            return degree= "Moderate High Degree Of Correlation (Positive Correlation)"
        }
        else{
            return degree= "Moderate High Degree Of Correlation (Negetive Correlation)"
        }
          
    }
    if((cf>=0.25 && cf<0.50) || (cf<-0.25 && cf>-0.50)){
        if((cf>=0.25 && cf<0.50)){
            return degree= "Low Degree Of Correlation (Positive Correlation)"
        }
        else{
            return degree= "Low Degree Of Correlation (Negetive Correlation)"
        }
          
    }
    if((cf>0 && cf<0.25) || (cf<0 && cf>-0.25)){
        if((cf>=0.25 && cf<0.50)){
            return degree= "Very Low Degree Of Correlation (Positive Correlation)"
        }
        else{
            return degree= "Very Low Degree Of Correlation (Negetive Correlation)"
        }
          
    }
    if(cf===0){
       return degree= "Absence of Correlation"
    }
}

export default getDegree