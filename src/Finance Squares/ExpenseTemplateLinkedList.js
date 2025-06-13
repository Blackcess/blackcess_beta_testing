class ExpenseTemplateNode{
    //to create a new node make sure that you provide the day id. (important)
    constructor(id){
        this.dayID=id;
        this.expensesList={};
        this.next=null;
        this.prev=null;
    }
}
class ExpenseTemplateList{
    // #createNode;
    constructor(id){
        //reminder the list should start empty
        this.listID=id;
        this.head= new ExpenseTemplateNode(id);
        this.tail=this.head;
        this.length=1;

    }
    #createNode=(item,id)=>{
        let newNode= new ExpenseTemplateNode(id);
        newNode.expensesList={...item};      //creating a shallow copy 
        return newNode;
    }
    insertEnd=(item,id)=>{
        //create new Node
       let newNode=this.#createNode(item,id);
        
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
            this.length++;
            return newNode;
        }
        this.tail.next=newNode;
        newNode.prev= this.tail;
        this.length++;
        this.tail=newNode;
        return newNode;
    }
    deleteNode=(node)=>{
        if(node===this.head){
            let newHead= this.head.next;
            newHead.prev= null;
            this.head= newHead;
            this.length--;
            node.next=null;
            return node;
        }
        if(node===this.tail){
            let newTail= this.tail.prev;
            newTail.next=null;
            this.tail= newTail;
            node.prev=null;
            this.length--;
            return node;
        }
        let succeedingNode= node.next;
        let preceedingNode= node.prev;
        preceedingNode.next=succeedingNode;
        succeedingNode.prev=preceedingNode;
        this.length--;
        return node;

    }
    deleteFirst=()=>{
        let deleted= this.deleteNode(this.head);
        return deleted;
    }
    deleteLast=()=>{
        let deleted = this.deleteNode(this.tail);
        return deleted;
    }
    searchNode=(id)=>{
        let ptr= this.head;
        while(ptr){
            if(ptr.dayID===id){
                return ptr;
            }
            else{
            ptr=ptr.next;
            }
        }
        return null;
    }
    deleteById=(id)=>{
       let searchResult = this.searchNode(id);
            // ----deleting
           if(searchResult){
            let deleted = this.deleteNode(searchResult);
            return deleted;
           }
           return null;
    }
    #destructureExpenses=(arr,currentNode)=>{
        // let i=1;
        if(!arr.length){
         console.log("No Expenses Recorded"); 
         return null
        }
        let cumulativeArray=[];
  
    for(let j=0;j<arr.length;j++){ 
        let obj={};
        if(arr[j].toLocaleLowerCase()==="transportCost".toLocaleLowerCase()){
            // console.log(`Expense ${j+1}: `,arr[j],`....${currentNode.expensesList[arr[j]].total.toLocaleString("en-En",{style:"currency",currency:"INR"})}` );
            // cumulativeArray.push(arr[j]);
            // cumulativeArray.push(currentNode.expensesList[arr[j]].total);
            obj.props=arr[j];
            obj.value= currentNode.expensesList[arr[j]].total;

        }
        else{
            // console.log(`Expense ${j+1}: `,arr[j], `....${currentNode.expensesList[arr[j]].amount.toLocaleString("en-En",{style:"currency",currency:"INR"})}`);
            // cumulativeArray= [element, ]
            // cumulativeArray.push(arr[j]);
            // cumulativeArray.push(currentNode.expensesList[arr[j]].amount);
            obj.props= arr[j];
            obj.value= currentNode.expensesList[arr[j]].amount;
        }
        cumulativeArray.push(obj)
    }
    return cumulativeArray;
    }
    displayListOfExpenses=(node)=>{
        //returns an array of expenses keys (without value)
        let expenses= Object.keys(node.expensesList);
        return expenses;
    }
    displayDayExpenses=(day_id)=>{

        //Displays a list of all expenses enquired in a day without values
        let node = this.searchNode(day_id);
        if(!node) return null;
        //returning the expenseslist
          this.#destructureExpenses(this.displayListOfExpenses(node),node);
        return this.displayListOfExpenses(node);
    }
    displayDayExpensesWithAmounts=(day_id)=>{
        let node = this.searchNode(day_id);
        if(!node) return null;
         return this.#destructureExpenses(this.displayListOfExpenses(node),node);
       
    }

    dailyExpenses=(id)=>{
        let node = this.searchNode(id);
        if(node){
            if(!Object.keys(node.expensesList).length){
                return 0;
            }
            let sumAmt=0;
            let expArr=Object.keys(node.expensesList);
            for(let i=0;i<expArr.length;i++){
                if(expArr[i].toLocaleLowerCase()!=="transportCost".toLocaleLowerCase()){
                    sumAmt+=node.expensesList[expArr[i]].amount;
                }
                else{
                    sumAmt+=node.expensesList[expArr[i]].total;
                }
            }
            // console.log(node.dayID);
            return sumAmt;
        }
    }
}


let DecemberExpenseList= new ExpenseTemplateList(0);
let NovemberExpenseList= new ExpenseTemplateList(0);
let OctoberExpenseList= new ExpenseTemplateList(0);
let SeptemberExpenseList=new ExpenseTemplateList(0)
let JanuaryExpenseList= new ExpenseTemplateList(0);
let FebruaryExpenseList= new ExpenseTemplateList(0);
let monthExpenses=[null,null,null,null,null,null,null,null,SeptemberExpenseList,OctoberExpenseList,NovemberExpenseList,DecemberExpenseList,JanuaryExpenseList,FebruaryExpenseList];


export {ExpenseTemplateList,monthExpenses,DecemberExpenseList,NovemberExpenseList,OctoberExpenseList,SeptemberExpenseList,JanuaryExpenseList,FebruaryExpenseList}


//Proper Proceedure to add anew month in the system
//1. Create the expenses list
//2. Add ExpensesList into the monthExpenses  array
//3. 