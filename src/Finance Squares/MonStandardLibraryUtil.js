class BuiltInTemplate{
    #startingDate;
    #month;
    constructor(monthNo){
        this.#startingDate=null;
        switch (monthNo) {
            case 1:
                this.#month="January";
                this.#startingDate=1;
                break;
            case 2:
                this.#month="February";
                this.#startingDate=1;
                break;
            case 3:
                this.#month="March";
                break;
            case 4:
                this.#month="April";
                break;
            case 5:
                this.#month="May";
                break;
            case 6:
                this.#month="June";
                break;
            case 7:
                this.#month="July";
                break;
            case 8:
                this.#month="August";
                break;
            case 9:
                this.#month="September";
                this.#startingDate=6;
                break;
            case 10:
                this.#month="October";
                this.#startingDate=3;
                break;
            case 11:
                this.#month="November";
                this.#startingDate=1;
                break;
            case 12:
                this.#month="December";
                this.#startingDate=1;
                break;
        
            default:
                // console.log("Error: Invalid Month ....BuiltInTemplate_in_MonStandardLibraryUtil.js....._ref_line-46");
                break;
        }
    }
    getStartingDay=()=>{
        return this.#startingDate;
    }
    getMonth(){
        return this.#month;
    }
}
export {BuiltInTemplate}