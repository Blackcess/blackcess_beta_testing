import {useState,useEffect,useContext,createContext} from "react"
import "./SageIntacct.css"
import  "./Finance Squares/Sage Intacct/expenseDashboardHeader.css"
import  "./Finance Squares/Sage Intacct/tempApplication.css"
import  "./Finance Squares/Sage Intacct/transportAccountTemplate.css"
import  "./Finance Squares/Sage Intacct/errorManipulation.css"
import "./Finance Squares/Sage Intacct/reuseableDropDown.css"
import  "./Finance Squares/Sage Intacct/expenseManagement.css"
import  "./Finance Squares/Sage Intacct/dayDetails.css"
import  "./Finance Squares/Sage Intacct/foodAccounts.css"
import  "./Finance Squares/Sage Intacct/ovalDisplaySheet.css"
import  "./Finance Squares/Sage Intacct/DayMetaData.css"
import "./Finance Squares/initialExpenseReceipt.css"
import { MdArrowUpward, MdArrowDownward} from "react-icons/md";
import "./Finance Squares/ProjectObjects.js"
import {accountRecords,year2024,accountRecSearchAlgo} from "./Finance Squares/ProjectObjects.js"
import "./Finance Squares/b_testing.js"
import "./Finance Squares/ExpensesCategories.js"
import { KarlPerlsonSkewness,dataMixer,correlationXY } from "./Finance Squares/skewnnessTesting.js"
import { MdOutlineArrowDropDown } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { IoReceiptOutline } from "react-icons/io5";
import { SiCashapp } from "react-icons/si";
import { LuAlarmClockCheck } from "react-icons/lu";
import { CiFilter } from "react-icons/ci";
import { CiCircleList } from "react-icons/ci";
import { type } from "@testing-library/user-event/dist/type/index.js"
import { CgLayoutGrid } from "react-icons/cg"
import {FaRegWindowClose} from "react-icons/fa";
import "./PositionAllocationTable.js"
// import "./Finance Squares/expenseGraph.js"
import Access from "./Budgeting Project/Intro Page/Access.js"
import { FaRegCommentDots } from "react-icons/fa";
//for the hair dresser thingy:::
// import "./Hair Cut Project/projectFiles.js"
import { picDataBase } from "./Finance Squares/accountPicsDataBase.js"
import { MdOutlineConstruction } from "react-icons/md";
import { Chart } from "chart.js"
import { getRelativePosition } from "chart.js/helpers"
import { IoAddSharp } from "react-icons/io5";
import { IoIosRemove } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";

// import { boole } from "./Finance Squares/b_testing.js"

// import { weekComputation } from "./PositionAllocationTable.js"

let mean = accountRecords[5].arithmaticMean();
let meanString= mean.toLocaleString("en-EN",{style:"currency",currency:"INR"});
let estimateBudget= accountRecords[5].estimateBudget;
let estimateBudgetString= estimateBudget.toLocaleString("en-EN",{style:"currency",currency:"INR" });
let dailyLimit= accountRecords[5].dailyLimit;
let dailyLimitString= dailyLimit.toLocaleString("en-EN",{style:"currency",currency:"INR"});
let manageTitles=[{ttl:"Average",avg:meanString},{ttl:"Budget",avg:estimateBudgetString},{ttl:"Daily Limit",avg:dailyLimitString}]


//contexts
// let TradeTableDropDown = createContext();
let currentAccountContext= createContext();
let foodAccountDesign ="https://cdn.dribbble.com/userupload/15393155/file/original-48abd13388bc1d6a497147864ee24d29.png?resize=1024x768&vertical=center"


function FinanceSquares(){
    let [currentDate,setDate]=useState("");
    let [currentAccount,setCurrentAccount]=useState({
        accountName:accountRecords[5],
        accountType:"transportAccount",
        dateModified:new Date(),
        domainName:"Tranport Account"
    })

    let mean = currentAccount.accountName.arithmaticMean();
    let meanString = mean.toLocaleString("en-EN",{style:"currency",currency:"INR"});
    let estimateBudget= currentAccount.accountName.estimateBudget;
    let estimateBudgetString= estimateBudget.toLocaleString("en-EN",{style:"currency",currency:"INR"})
    let dailyLimit = currentAccount.accountName.dailyLimit;
    let dailyLimitString= dailyLimit.toLocaleString("en-EN",{style:"currency",currency:"INR"})
    let managedTitles=[{ttl:"Average",avg:meanString},{ttl:"Budget",avg:estimateBudgetString},{ttl:"Daily Limit",avg:dailyLimitString}];
   //get response fom the access lock security protocol
   let [securityResponse,setSecurityResponse]=useState();

       //keep track of the current account type, and to do that I will use a state to keep track of the type of account being operated on...

   let getSecurityResponse= (status)=>{
    setSecurityResponse(status);
   }
   //accessing the DOM elements
   useEffect(()=>{
    if(securityResponse===true){
         ///get the access container
    let securityEncryption = document.querySelector(".access-container");
    securityEncryption.classList.add("hidden")
    
    }
   
   })


   

 


    return <>
    <section className="finance-squares-container" >
        
        <div className="access-container">
        <Access value={{feedBackFunction:getSecurityResponse}}/>
        </div>

      
         {(securityResponse===true)&&<currentAccountContext.Provider value={currentAccount}>
            <GeneralExpenses value={managedTitles}/>
        </currentAccountContext.Provider> } 

       
    </section>
    </>
}



let completeTrans_transportLogicCont = createContext();
function CompleteTransportAccount(props){
   let currentAccountCalculations= useContext(GeneralToComplete)
   let [sd_csig,setsd_csig]= useState(false);
    let [sf_csig,setsf_csig]=useState(true);
   let search_id={
    caller_id:"C-T-A",
    terminate:"ahgd",
    parentalFlag:true
   }
    //function to collect data from the transportLogic component
    let [transportLogicState,setTransportLogicState] = useState(); 
    let getSearchResults= (state,subState)=>{
        setTransportLogicState(state);
        setsd_csig(subState);

    }
    let searchResultsFeedback =(data)=>{                    //usefull to indicate if the search was succeessfull or not
        setsf_csig(data)
    }

    useEffect(()=>{                                        //Search checking mechanism to be used later
        if(sf_csig){
            setsd_csig(false);
        }
    });




    useEffect(()=>{
        currentAccountCalculations.value2(transportLogicState)
    },[transportLogicState])


    useEffect(()=>{
      if(props.value.callerStatus==="short"){
      let temp=   accountRecSearchAlgo(props.value.data.title).searchByDate(props.value.data.date)
        // console.log("Hello: ",temp)
        getSearchResults(temp,true)
        searchResultsFeedback(false)
      }
    },[props.value.data])

    // console.log("Fromm Thheee ------",currentAccountCalculations)
    return<>
    <div class="main-body">
       <div className="app-dashboard">
        <section className="expense-dashboard-header-card-container">
    {
        currentAccountCalculations.value1.map((obj)=>(
            < SageIntacctHeader dashboardDetails={{title:obj.ttl,amount:obj.avg }} key={Math.random()*1000} />
        ))
    }
    </section>
       </div>

        <div class="app-TBD"> </div>    

        <div class="app-content">
            <SearchLogic value={{upriseFunc:{success:getSearchResults,fail:searchResultsFeedback},search_id}}/>   
    
            <div className="account-display-area">
       {(sd_csig) ? <TransportTable data={transportLogicState}/> :<Errors/>}
       <div className="receipt-and-others">
       <div className="intial-rec">
      {(sd_csig) && <InitialExpenseReceipt value={transportLogicState}/> }
       </div>
      
      
       </div>
    </div>


        </div>


    
    

    </div>
    
 
    
   

     </>
}

function SageIntacctHeader(props){
let currentAccountCalculations= useContext(GeneralToComplete)

    return <>
<div class="expense-dashboard-header-card">
 <div class="expense-dashboard-header-field-1">{props.dashboardDetails.title}</div>
 <div class="expense-dashboard-header-field-2">
     <span class="expense-budget-tag">{props.dashboardDetails.amount}</span>
     <span class="trend-prior-month">
     <MdArrowUpward style={{color:"green"}}/>
     </span>

 </div>
 <div class="expense-dashboard-header-field-3"> <span className="trend-rate" style={{color:"green"}}>+5,043</span>vs. prior month</div>

</div> 

    
    
    </>
}


function TransportTable(props){
    let currentAccountCalculations= useContext(GeneralToComplete);

    let [textColor,setTextColor]= useState("green");
   let  {date,firstPart:firstPartAmt,secondPart:secondPartAmt,title,total:totalAmt}= props.data;
   let transportDetails={};
     transportDetails.firstPart= firstPartAmt.toLocaleString("en-EN",{style:"currency",currency:"INR"})
    transportDetails.secondPart= secondPartAmt.toLocaleString("en-EN",{style:"currency",currency:"INR"})
   transportDetails.total= totalAmt.toLocaleString("en-EN",{style:"currency",currency:"INR"})

    
    // else{
    //     transportDetails.firstPart=0.toLocaleString("en-EN",{style:"currency",currency:"INR"})
    //     transportDetails.secondPart=0.toLocaleString("en-EN",{style:"currency",currency:"INR"})
    //     transportDetails.total="1".toLocaleString("en-EN",{style:"currency",currency:"INR"})
    // }
    let {firstPart,secondPart,total}=transportDetails;
    const morningDeviation= ((dailyLimit/2)-firstPartAmt).toLocaleString("en-EN",{style:"currency",currency:"INR"});
    const eveningDeviation= ((dailyLimit/2)-secondPartAmt).toLocaleString("en-EN",{style:"currency",currency:"INR"});
    const dailyDeviation=(accountRecords[5].dailyDeviationFromLimit(date)/(dailyLimit)) * 100 ;
   
    return <>
    
    <section class="transport-container">
    <h3 class="transport-title">Cash Flow Details By Entity</h3>
    <div class="transport-cash-flow">
        <div class="transport-detail-header"> 
            <div class="morning-transport">
                <div class="amount">Morning</div>
                <div class="day">{date}</div>
            </div>
            <div class="evening-transport"> 
                <div class="amount">Evening</div>
                <div class="day">{date}</div>
            </div>
            <div class="total-transport">
                <div class="amount">Total</div>
                <div class="day">{date}</div>    
            </div>
     </div>
        <div class="net-income">
            <div class="net-income-tag">
                <h4 class="ops">Operations</h4>
                <div class="my-net">Net Income</div>

            </div>
            <div class="morning-income">
                <div class="no-display"></div>
                <div class="income-amounts">{(estimateBudget/2).toLocaleString("en-EN",{style:"currency",currency:"INR"})}</div>

            </div>
            <div class="evening-income">
                <div class="no-display"></div>
                <div class="income-amounts">{(estimateBudget/2).toLocaleString("en-EN",{style:"currency",currency:"INR"})}</div>

            </div>
            <div class="total-income">
                <div class="no-display"></div>
                <div class="income-amounts">{estimateBudgetString}</div>
            </div>

        </div>
        <div class="not-recquring-cash">

            <div class="net-income-tag">
                <div class="ops-not-h4">Daily</div>
                <div class="my-net">Expenditure</div>

            </div>
            <div class="morning-income">
                <div class="no-display">.</div>
                <div class="income-amounts">{firstPart}</div>

            </div>
            <div class="evening-income">
                <div class="no-display">.</div>
                <div class="income-amounts">{secondPart}</div>

            </div>
            <div class="total-income">
                <div class="no-display">.</div>
                <div class="income-amounts">{total}</div>
            </div>



        </div>
        <div class="total-operations"> 
            
            <div class="net-income-tag">
                <div class="ops-not-h4">Total Operations</div>
                <div class="my-net">For Cash Flow</div>

            </div>
            <div class="morning-income">
                <div class="no-display"></div>
                <div class="income-amounts">{firstPart}</div>

            </div>
            <div class="evening-income">
                <div class="no-display"></div>
                <div class="income-amounts">{secondPart}</div>

            </div>
            <div class="total-income">
                <div class="no-display"></div>
                <div class="income-amounts">{total}</div>
            </div>
        
        
        </div>
        <h4 class="total-changes">Deviation in cash from Operation Activities</h4>
        <div class="change-in-cash">
            <div class="net-income-tag">
                <div class="ops-not-h4 account-name">Transport Account:</div>
                <div class="my-net">Savings Deviation</div>

            </div>
            <div class="morning-income" style={{color:{textColor}}}>
                <div class="no-display"></div>
                <div class="income-amounts">{morningDeviation}</div>

            </div>
            <div class="evening-income">
                <div class="no-display"></div>
                <div class="income-amounts">{eveningDeviation}</div>

            </div>
            <div class="total-income">
                <div class="no-display"></div>
                <div class="income-amounts">{dailyDeviation}%</div>
            </div>
        </div>
    </div>
</section>
    
    
     </>
}
function Errors(){


    return <>
    
    <section class="error-container">
            <img class="err-image"src="https://www.sage.com/en-us/-/media/new-brand/illustrations/character%20illustrations/brandmoment-illustration-talk-to-experts.svg?iar=0&hash=779F897900E3CCBFED9D4660BCAAE613" alt="error image"/>

        <div class="error-oops">OOPS!</div>
        <div class="error-body">
            <div class="body-head">Couldn't Load Search Results</div>
            <div class="body-instructions">
                <ul class="error-ul">
                    <li class="try-this-1 list">Try a different date</li>
                    <li class="try-this-2 list">Check if your prompt is in the fomat (YYYY/MM/DD)</li>
                    <li class="try-this-3 list">Check if the date is in the correct range</li>
                </ul>
                </div>
        </div>
    </section> 

    
    </>
}


function SearchLogic(props){
    let toCompleteAccountComponent= useContext(completeTrans_transportLogicCont);
    let toDayFoodAccount= useContext(FoodAcc_to_SaerchLogic);
    let [parentComponent,setParentComponent]= useState(null);
    let [inputDate,setInputDate]=useState("");
    let [dataObj,setDataObj]=useState({});
    let [sd_csig,setsd_csig]=useState(false);
    useEffect(()=>{
        // console.log("ParentalFlag ",toCompleteAccountComponent.parentalFlag);
        if(props.value.search_id.caller_id === "C-T-A"){
            // console.log('Alert: "The Search Logic Was Triggered By The Combined Transport Account Component" ')
        }
        else{
            if(props.value.search_id.caller_id==="C-D-F-T"){
                // console.log(`Alert: "The Search Logic was triggered by the Food account component`)
            }
        }
    })
    var day,month,year;
    let chosenAccount = useContext(currentAccountContext)
    function dateHandling(date){
        
        //mm/dd/yyyy
        if(date.charAt(5)==="0") {

            let newDate= date.slice(0,5) + date.slice(6)
             if(newDate.charAt(7)==="0"){
              let new_newDate=newDate.slice(0,7) + newDate.slice(8);
                return new_newDate;
             }
             return newDate;
        }
        if(date.charAt(8)==="0"){
            let day= date.slice(0,8) + date.slice(9)
            return day
        }
        return date;
        


    }
    function convertDate(date){

        let newDateArr= date.split("-");
        // console.log("Splitted Date is: ",newDateArr)

        let firstSub= newDateArr[0];
        let secondSub= newDateArr[1];
        let thirdSub=newDateArr[2];
        let correctFomat= thirdSub + "/" + secondSub + "/" + firstSub;
        year=firstSub;
        month=secondSub;
        day=thirdSub;
        return correctFomat;
    }
    let handleInputDate=(event)=>{
        setInputDate(event.target.value);
    }
    let handleSearch=(event)=>{
        // setInputDate(dateHandling(inputDate))
        const tempDate= dateHandling(inputDate);
        const correct= convertDate(tempDate);           // must collect correct to the parent component
       const item = chosenAccount.accountName.searchByDate(correct);
       console.log("day: ",day+ "month: ",month+ "year: ",year)
       console.log("Item=> ",item);
       if(item){            //if results from the search by date is true......
        setDataObj(item);
        setsd_csig(true);
       }
      
       if(!item){
        setDataObj({});
        setsd_csig(false);
        // console.log("date is: ",correct);
       }
    }
    useEffect(()=>{
        if(sd_csig){
            // console.log("Rendering 2.0: ",dataObj)
            if(props.value.search_id.parentalFlag){
            props.value.upriseFunc.success(dataObj,sd_csig)
            props.value.upriseFunc.fail(false);
            }
        
        }
        else{
            props.value.upriseFunc.fail(true);
        }
       },[dataObj,sd_csig])
    


    return<>

    <input type="date" value={inputDate} onChange={handleInputDate} className="searchByDate"/>
    <button className="search-sbt" onClick={handleSearch}>Search</button>
    {/* Reminder : All Error Handling Approaches will be mantained and monitored in the Finance Square Component */}
    {/* <div className="account-display-area">
       {Object.keys(dataObj).length ? <TransportTable data={dataObj}/> :<Errors/>}
       <div className="receipt-and-others">
       <div className="intial-rec">
      { (Object.keys(dataObj).length) && <InitialExpenseReceipt value={dataObj}/> }
       </div>
      
      
       </div>
    </div> */}
    
    </>
    }
let TradeTableDropDown = createContext();
let GeneralToComplete = createContext();
let Search_Output= createContext();

function GeneralExpenses(props){
let [rootDisplay,setRootDisplay]=useState(true)
let [shortCircuitExit,setShortCircuitExit]=useState({});
let [exitWindow,setExitWindow]=useState({transportState:false})    //we will keep on adding as time goes on
let [dropDownRes,setDropDownRes]=useState("");
let [searchLogic,setSearchLogic]= useState({})      //state storing the object obj from the CompleteTransport Component search results
let [f_d_b_c,setFDBC]=useState(false)  
    function getDropDownData(data){
        setDropDownRes(data);
    }
    function getFromCompleteTransportAccount(data){
    setSearchLogic(data)
    }

    //exitWindow management and clean up
     function manageWindows(state){
       setExitWindow((prevState)=>{
        let newState = Object.keys(prevState).reduce((acc,currKey)=>{
            acc[currKey]=false;
            return acc;
        },{})
        if(state==="all"){
            return newState;
        }
        newState[state]=true;
        return newState;
       })
       }

       let getExitData= (data, moreInfo={})=>{
        setRootDisplay(false)
        if(data.toLowerCase()=="transportState".toLowerCase()){
            manageWindows(data);
            if(Object.keys(moreInfo).length){
                setFDBC(true)
                setShortCircuitExit(moreInfo);
                console.log("Here we go again")
            }
        }
       }
      

       
     
   
   
    return<>
    
    <section class="general-expense-management">
    <div class="brand-name">
        <h2>Finance Squares</h2>

    </div>
    <div class="expense-toolkit">
        <button onClick={(event)=>{
            setRootDisplay(true)
        }}>Home</button>
    </div>
    <div class="expense-playground">
        <div class="expense-playground-1">
            < GeneralToComplete.Provider value={{value1:props.value,value2:getFromCompleteTransportAccount}} >
          { (rootDisplay)&&   <CombinedDayFoodTrans/> }
         { (!rootDisplay && exitWindow.transportState) && <CompleteTransportAccount value={{callerStatus:"short",data:shortCircuitExit}}/> }
            </GeneralToComplete.Provider>
             
        </div>
        <div class="expense-playground-2">
            <div className="expense-playground-2-options">
                <DropDownMenu value={{arr:["Date","Totals","Total-Reverse"],title:"Sort By:",feedBack1:getDropDownData}} />
            </div>
            <div className="expense-playground-2-table">
                 <TradeTableDropDown.Provider value={dropDownRes}>
                 <TradeTable sortingData={dropDownRes} value={{feedBack:getExitData,ack:f_d_b_c}}/>
                  </TradeTableDropDown.Provider>
            </div>
        </div>

    </div>    



</section>
    
    
    </>
}
    function Trade(props){
        let [selected,setSelected]=useState(false)
        let controlStack=[];
        useEffect(()=>{
            let temp = document.querySelectorAll(".trade-comp")
            if(selected && props.edits.editable){
             props.feedBack.feedBack("transportState",props.value) 
             console.log(temp[props.feedBack.index + 1])
             temp[props.feedBack.index+1].style.backgroundColor="crimson";
            //  console.log(props)
            }
        },[selected])
        useEffect(()=>{
            let temp = document.querySelectorAll(".trade-comp")
            if(selected && props.edits.editable){
                // console.log("jghdughdjh:",props.feedBack.ack)
                if(props.feedBack.ack){
                    setSelected(false)
                    setTimeout(()=>{
                      temp[props.feedBack.index+1].style.backgroundColor="white";
                    },3000)  
                }
            }
            
    })
        return<>
        <section className="trade-comp" onClick={(event)=>{
            setSelected(true);
            // event.target.style.backgroundColor="red";

        }}>
            <div className="trade-comp-date">{props.value.date}</div>
            <div className="trade-comp-account-name">{props.value.title}</div>
            <div className="trade-comp-total" style={{color:"red"}}>{props.value.total.toLocaleString("en-EN",{style:"currency",currency:"INR"})}</div>
        </section>
        
        </>
    }

    function TradeTable(props){
        let myContext = useContext(TradeTableDropDown);
        let chosenAccount= useContext(currentAccountContext);
        var render= chosenAccount.accountName.details
        let accountCopy=chosenAccount.accountName
        const defaultAccountCopy=chosenAccount.accountName.details;
        let [orgData,setOrgData]= useState([])
        let [accountData, setAccountData]=useState(accountCopy.details);
        let [init_render,setInitRender]=useState(true);
        let myArr=[];
        let def_arr=[]


        

        for(let i=0;i<chosenAccount.accountName.details.length;i++){
            myArr[i]=chosenAccount.accountName.details[i];
            def_arr[i]=chosenAccount.accountName.details[i];
        }

        let [m_myArr,setmyArr]=useState(myArr);
         function  sortByTotal(){
                setmyArr(()=>{
                   let newArr= [...m_myArr];
                   newArr.sort((a,b)=>{
                    return a.total - b.total;
                   })
                   return newArr;
                })
            }

          function  sortByTotalReverse(){
                setmyArr(()=>{
                    let newArr=[...m_myArr];
                    newArr.sort((a,b)=>{
                        return b.total  - a.total;
                    })
                    return newArr;
                })
            }

            
        useEffect(()=>{
            console.log("This Shit Should Work: ",myArr)
        },[])
      

      
        const headData= {
            date:"Date",
            title:"Account Name",
            total:"Total",
            class:"unique-component"
        }
            
           useEffect(()=>{
            function sort(){
                if(myContext==="Totals"){
                    sortByTotal();
                    setInitRender(false)
                    // setAccountData(accountCopy.details)
                    return 
                }
                if(myContext==="Total-Reverse"){
                    sortByTotalReverse();
                    setInitRender(false)
                    // setAccountData(accountCopy.details)
                    return
                }
                if(myContext==="Date"){
                    // accountCopy=defaultAccountCopy;
                    // setAccountData(defaultAccountCopy)
                    setInitRender(true)
                    return
                }
            }
            sort();
            setAccountData(accountCopy.details)
        },[myContext])
      

        return<>
        <div className="trade-table-container">
        <div className="container-row-1" >
        <Trade value={headData} edits={{editable:false}}/>
        </div>
       { (!init_render) ? m_myArr.map((obj,index)=>(
        <div key={index*20}> <Trade value={obj}  feedBack={{feedBack:props.value.feedBack,index:index,ack:props.value.ack}} edits={{editable:true}}  /></div>
       ))
       :
       def_arr.map((obj,index)=>(
        <div key={index*20}> <Trade value={obj} feedBack={{feedBack:props.value.feedBack,index:index,ack:props.value.ack}} edits={{editable:true}}/></div>
       ))
    
    }

        </div>
        </>
    }

    function DropDownMenu(props){
        let [drop,setDrop]= useState(0)
        let [dropDownResponse,setDropDownResponse]= useState("")
        
        useEffect(()=>{
            if(drop){
            //selector area
            let selector= document.querySelector(".selector-area")
            //drop down icon
            let dropIcon= document.querySelector(".drop-down-icon")
            //otions-area
            let optionsList=  document.querySelector("#drop-opt")
            // console.log("Thomas You Genius")
            dropIcon.classList.toggle("rotate")
            optionsList.classList.toggle("hide")
                
            }


        },[drop])
    
        let handleSelectAreaClick=(event)=>{
            setDrop(drop+1);
        }

        let handleOptionClick=(event)=>{
            setDropDownResponse(event.target.textContent);
            // props.value.feedBack1(dropDownResponse)
        }

        useEffect(()=>{
            if(drop){
            // console.log("Leeeeets try this: ",dropDownResponse)
            props.value.feedBack1(dropDownResponse)
            }
        })


        return<>
        
        <div className="drop-down-menu-container">
        <div className="selector-area" onClick={handleSelectAreaClick}>
            <button className="drop-down-text-area">{props.value.title}</button>
            <span className="drop-down-icon"><MdOutlineArrowDropDown /></span>
        </div>
        <div className="options-area hide" id="drop-opt">
            <ul id="list">
                {props.value.arr.map((element)=>(
                    <button key={Math.random()*1000} onClick={handleOptionClick} className="filter-transport">{element}</button>
                ))}
                </ul>
        </div>


        </div>
        
        </>
    }

    function ExpenseReceiptHelperComp(props){
        let chosenAccount= useContext(currentAccountContext)

       
        let resObj=chosenAccount.accountName.getMonth(props.value.date)
        function searchMonth(){
        let temp =  year2024[resObj.index]
        // console.log("ResObj index is ",resObj.index)
        // console.log("Month bEing Rendered is: ",temp)
        for(let i=0, n=temp.monthDays.length;i<n;i++){
            if(temp.monthDays[i].getDate() === props.value.date){
                // console.log("My day is: ", temp.monthDays[i])
                return temp.monthDays[i];
            }
        }
        return null;
        }
        let actualDay= searchMonth();
        //Call the searchMonth hERE

        return<>

<div className="initial-receipt-wrap-added">
<div className="initial-expense-receipt-details-1">
            <div className="initial-expense-receipt-date-details">
                <span className="rec-dates" id="my-receipt-date">
                 <IoReceiptOutline /> 
                {props.value.date}
                </span>
                <span className="rec-dates" id="my-receipt-account-name">({chosenAccount.domainName})</span>
            </div>
            <div className="initial-expense-receipt-day-id">
                Inv/2024/{actualDay.getDayID()}
            </div>
        </div>
        <div className="initial-expense-receipt-details-2">
            <div className="account-detail-amnt">{props.value.total.toLocaleString("en-EN",{style:"currency",currency:"INR"})}</div>
            <div className="account-detail-okay-done">
            <SiTicktick />
            </div>
        </div>
        </div>


        </>
    }


    function InitialExpenseReceipt(props){
       let chosenAccount= useContext(currentAccountContext)

        return <>
        <div className="initial-expense-receipt-container" >
        <div className="balance-container">
            <span className="initial-receipt-balance-label">Balance</span>
            <span className="initial-receipt-balance-amount">{chosenAccount.accountName.getBalanceAsPerDay(props.value.date)}</span>
        </div>
        <div className="expense-receipt-details" >
        <ExpenseReceiptHelperComp value={props.value} />
        <ExpenseReceiptHelperComp value={props.value} />
        <ExpenseReceiptHelperComp value={props.value} />
        </div>

        {/* <CombinedDayFoodTrans/> */}
        </div>
  
        </>
    }  


        function FoodAccountsDashHeader(props){
            let compData={
                title1:props.value[0],
                amountSpent:props.value[1],
            }

            return<>
            
            <section class="food-account-container">
            <div class="food-account-spent-per-day">
                <h3 class="spent-per-day-tag" style={{letterSpacing:"1px"}}>{compData.title1}</h3>
                <div class="spent-per-day-amount" style={{color:"green"}}>{compData.amountSpent.toLocaleString("en-EN",{style:"currency",currency:"INR"})}</div>
            </div>
            <div class="food-account-spent-img">
            <SiCashapp style={{fontSize:"20px"}}/>
            </div>

        </section>
            </>
        }
        function DayFoodTransactionTemplate(){
            let fromTable = useContext(Table_template);
            let [renderObj,setRenderObj]= useState({});
            if(fromTable.type.toLowerCase()==="popCorn".toLowerCase()){
                var accountPic= picDataBase[accountRecSearchAlgo("popCorn").picNum].img;
                console.log("This is the wrong value seen: ",fromTable.type )
            }
            else{
                
                var accountPic= picDataBase[accountRecSearchAlgo(fromTable.type).picNum].img;
            }
            

let temp;
// useEffect(()=>{
//     function accPicMap(){
//         temp = accountRecSearchAlgo(fromTable.type);
//        accountPic=picDataBase[temp.picNum].img;
//    }
//    accPicMap();
//    console.log("Way to fuck this up: ",temp)
// })
         
         
            return<>
           
        <section class="transaction-list-container">
            <div class="transaction-list-1">
                <div class="account-img">
                     
                    <img className="transaction-account-img-prev" src={accountPic}/>
                </div>
                < div class="account-description" >
                    <div class="account-description-name">{fromTable.type}</div>
                    <div class="account-description-date">{fromTable.date}</div>
                </div>
            </div>
            <div class="transaction-list-2">
                <div class="transaction-actual-amount">
              {  (fromTable.type==="transportCost") ? fromTable.object.total.toLocaleString( "en-EN",{style:"currency",currency:"INR"}) : fromTable.object["amount"].toLocaleString("en-EN",{style:"currency",currency:"INR"})} 
                </div>
            <div>
            <Inside_Menu value={{id:fromTable.type,call_back:fromTable.call_back,date:fromTable.date}}/>
            </div>
               
               
                
            </div>
        </section>
            
            </>
        }

        //create context to send daily Expenses to foodTemplate
        let Table_template = createContext();

       function DayFoodTransactionTable(){
        
        let {passiveData:detailsObj,d_date} = useContext(FoodAcc_to_TransactionTable);    //obj object from the food account
        // We have the object containinfg all the objects in a day(object of objects)
        //first create an array so that you can map it later 

        let [displaySelected, setDisplaySelected]= useState({isEmpty:true});
        let [reqComp,setReqComp]= useState(false)
        function getData(state){
            setDisplaySelected({...state});
        }
        useEffect(()=>{
            if(Object.keys(displaySelected).length!==1){
                console.log("This is the selected displayed: ",displaySelected)
                setReqComp(true);
            }
            else{
                setReqComp(false)
            }
        })
        useEffect(()=>{
            // get pop-up-for-one
            let main_div= document.querySelector(".pop-up-for-one");
            if(reqComp){
                main_div.classList.toggle("hidden")
            }
        })

       
            

        let expList= Object.keys(detailsObj);
        //expList is an array of keys 
            return <>
            <section className="my-food-transaction-table">
              <div class="day-food-transactions">
            <div class="day-food-transactions-1">
                <div class="all-transactions-tag">All Transactions <span class="transaction-length">{expList.length}</span></div>
                <div class="all-transactions-filter">
                    <span className="ci-filter">
                <CiFilter />
                </span>
                    Filter
                </div>
            </div>
            <div class="day-food-transactions-2">
                <div class="bulk-reminder">
                    <span className="ci-filter">
                <LuAlarmClockCheck />
                
                </span>
                    Reminder
                </div>
                <div class="in-out-range">
                    <span class="in-range" style={{color: "green"}}>InRange</span>/
                    <span class="out-range" style={{color: "red"}}>OutRange</span>
                </div>
            </div>
        </div>
        <div className="food-table-specifics ">

            {
                expList.map((key)=>(
                    <div key={Math.random()*2000}>
                    <Table_template.Provider value={{type:key,object:detailsObj[key],date:d_date.date,call_back:getData}}>
                    <DayFoodTransactionTemplate/>
                    </Table_template.Provider>
                    </div>
                ))
            }
            <div className="pop-up-for-one hidden">
                { (displaySelected.selectedOption==="Statistics")&& <DayDetails value={displaySelected}/> }
            </div>
        </div>
        </section> 
            </>
        }
            let FoodAcc_to_SaerchLogic= createContext();
            let FoodAcc_to_TransactionTable= createContext();



        function CombinedDayFoodTrans(){
            let [dashLimiter,setDashLimiter]=useState(3)
            let [dayContext,setDayContext] = useState();    // collected from the search mechanism 
            let [passiveData,setPassiveData] = useState([]);  //being sent to the templtate
            let [sd_csig,setsd_csig]= useState(false);
            let [sf_csig,setsf_csig]=useState(true);
            let search_id={
                caller_id:"C-D-F-T",
                terminate:"malcom",
                parentalFlag:true
               }
            let dateNode=null;
            var expensesContainer;
            let getSearchResults=(state,subState)=>{
                setDayContext(state);
                setsd_csig(subState);
            }
            let searchResultsFeedback=(state)=>{
                setsf_csig(state);
            }

            useEffect(()=>{
                if(sf_csig){
                    setsd_csig(false);
                
                }
            },[sf_csig]);
            
            // We have two options on our hands :
            //1--> We process the data from the search results inside this component
            //2--> We pass the data to furthur component in the tree for pocessing there:
            

            useEffect(()=>{ 
             function dataFetching(){            //searches for a matching day
            var dayNode;
                for(let i=0, n= year2024.length;i<n;i++){
                    dayNode = year2024[i].searchDate(dayContext.date);
                    if(dayNode){
                        return dayNode.expenses.expensesList;
                    }
                   
                }      
                return null;     
             }
             if(sd_csig){ 

                    let dayNode= dataFetching();
                    setPassiveData(dayNode);
                    console.log(`The data as per ${dayContext.date} :`, dayNode );
                }},[sf_csig,sd_csig,dayContext]);
            


            return<>
            <section className="combined-day-container " >
            <div className="combined-dash-board">
                <div className="combined-dash-1"> 
                     {
                         year2024.map((month,index)=>( 
                              <div className="comb-dash-1" key={index*45}>
                                       {(index >= (year2024.length - dashLimiter)) &&  <FoodAccountsDashHeader value={[`${month.displayMonth()}`,`${month.getMonthTotal().toLocaleString("en-EN",{style:"currency",currency:"INR"})}`]}/> }
                              </div>
                            ))
                         }
                        <span className="add-dash" onClick={()=>{
                            if(dashLimiter<year2024.length){
                                setDashLimiter(dashLimiter+1)
                            }
                        
                        }}> <IoAddSharp /></span>
                        <span className="add-dash" onClick={()=>{
                         if(dashLimiter>3){
                        setDashLimiter(dashLimiter-1)
                         }
                     
                      }}> <IoIosRemove /></span>
                </div>
                <div className="combined-dash-2">
                    <div className="dash-2-1"><IoMdNotificationsOutline /></div>
                    <div className="dash-2-2"></div>
                </div>
                
            </div>
            <div className="search-in-combined">
            
                <SearchLogic value={{upriseFunc:{success:getSearchResults,fail:searchResultsFeedback},search_id}}/>
        
            </div>
            <div className="combined-table">
            { /* Paasing of the dayCopntext after sd_csig is high */ }
            
            
          { (sd_csig) &&  < FoodAcc_to_TransactionTable.Provider value={{passiveData:passiveData,d_date:dayContext}}>
            
            <DayFoodTransactionTable/>  
        
          </FoodAcc_to_TransactionTable.Provider> }

          {
            (!sd_csig) && <h1>Initial Content</h1>
          }
        
                
        
            </div>
            


            </section>
            
            
            
             </>
        }


      function ReusableDropDown(props){
        let [drop,setDrop]= useState(0);
        let [result,setResult]= useState({
            signal_receptor:null,
        })
        const obj={
            obj1:"0",
            obj2:"1",
        }
        //use the useEffect hook to access the dom elements
        useEffect(()=>{
            if(drop){ 
            let outerSection = document.querySelector(".a663-container-reuesable");
            let child1= document.querySelector(".q63683-container-reusable-child-1")
            let child2= document.querySelector(".j63683-container-reusable-child-2")
            let icon = document.querySelector(".reusable-child-1-title")
                child2.classList.toggle("child-1-hide");
                icon.classList.toggle("rotateX")
            }
        },[drop])

        let handleToggle= (event)=>{
            setDrop(drop + 1)
        }
        let handleChosenOption= (event)=>{
            setResult({...result,signal_receptor:event.target.textContent})
        }
    useEffect(()=>{
        if(drop){ 
      //send the data to the calling component
      console.log(props.value(result))
        }
    },[result])


        return <>
        <section className="a663-container-reuesable">
        <div className="q63683-container-reusable-child-1" onClick={handleToggle}>
            <span className="reusable-child-1-icon"> {obj.obj1}</span>
            <span className="reusable-child-1-title">
                <MdOutlineArrowDropDown />
               </span>
             </div>
        <div className="j63683-container-reusable-child-2 child-1-hide">
        {
                    Object.keys(obj).map((key)=>(
                        <div className="reusable-options-list" onClick={handleChosenOption} >{obj[key]}</div>
                    ))
                }
            
             </div>

        </section>
        </>
      }

      function Inside_Menu(props){

        let [initialise,setInitialiser]= useState(0);
        let [id_src, setId_src]= useState({})
        //next day highlights
        //The component should claim that I was Called by this component so all changes should be diverted to that Copmponent
        useEffect(()=>{
            if(initialise){
                let menu = document.querySelectorAll(".custom-elipse")
                let details_div= document.querySelectorAll(".cutom-elipse-details")
            //    details_div[4].classList.toggle("hidden");
            for(let i=0;i<details_div.length;i++){
                if(id_src.sliderState.id===details_div[i].previousElementSibling.id){
                    details_div[i].classList.toggle("hidden");
                    // console.log(details_div[i].children)
                    if(searchState(Object.keys(id_src),"activatedChild")){
                    //    console.log(details_div[i].children[id_src.activatedChild])
                    console.log(details_div[i].children)
                    props.value.call_back({selectedOption:details_div[i].children[id_src.activatedChild].innerHTML,
                        parentNode:id_src.sliderState.id,
                        date:props.value.date,
                    })
                    }
                }
            }

            //    console.log(details_div)
            }
        })
        let showSider=(event)=>{
            setInitialiser(initialise + 1);
            setId_src({...id_src,sliderState:event.target.parentNode});
        }
        let showStatistics=(event)=>{
            setId_src({...id_src,activatedChild:0})
        }
        let handleRoot= (event)=>{
            setId_src({...id_src,activatedChild:1})
        }
        let handleFavourite= (event)=>{
            setId_src({...id_src,activatedChild:2})
        }
        let handleShare= (event)=>{
            setId_src({...id_src,activatedChild:3})
        }

        let searchState= (arr,item)=>{
            for(let i=0;i<arr.length;i++){
                if(arr[i]===item){
                    return arr[i];
                }
            }
            return null
        }
      
        return<>
        <div className="custom-elipse-container">

<span className="custom-elipse" onClick={showSider} id={props.value.id}>  <CiCircleList /> </span> 
<div className="cutom-elipse-details hidden"> 
    <div className="custom-elipse-detail-1 hidden-child" onClick={showStatistics}>Statistics</div>
    <div className="custom-elipse-detail-2 hidden-child" onClick={handleRoot}>Root Account</div>
    <div className="custom-elipse-detail-3 hidden-child" onClick={handleFavourite}>Favourite</div>
    <div className="custom-elipse-detail-4 hidden-child" onClick={handleShare}>Share</div>
</div>
</div>
        </>
 }
      


function DayDetails(props){
    let [interupt,setInturupt]=useState(0)
    let [accountInfo,setAccountInfo]=useState({venue:"DayDetails"});
    let [syncDriver,setSyncDriver]=useState(0);
    let [getComment,setGetComment]=useState("No Comments Recorded");
    let [getQuantity,setGetQuantity]=useState("N/A");
    // States that keep track of all the events on the Ovals

        useEffect(()=>{
            //get bar-rep
            let outer_bars= document.querySelectorAll("#bar-rep");
            // console.log(outer_bars)
        })
        useEffect(()=>{
            //get the menu
            let menu= document.querySelector(".pop-up-for-one");
         
            if(interupt!=0){ 
            menu.classList.add("hidden")
            setInturupt(0);
            }
            
           
            },[interupt])
            //getting a dayID

        let searchDayInMonth=(date)=>{
            for(let i=0;i<year2024.length;i++){
                if(year2024[i].searchDate(date)!==null){
                   console.log(year2024[i].searchDate(date).getDayID());
                    return year2024[i].searchDate(date).getDayID();
                    // let total= year2024[i].searchDate(date).getTotalPerDay();
                }
            }
           
        }

        //Getting total per day
       let avail=  searchDayInMonth(props.value.date)
        let searchDayInMonth_1=(date)=>{
            for(let i=0;i<year2024.length;i++){
                if(year2024[i].searchDate(date)!==null){
                //    console.log(year2024[i].searchDate(date).getDayID());
                    return year2024[i].searchDate(date).getTotalPerDay();
                    // let total= year2024[i].searchDate(date).getTotalPerDay();
                }
            }
            console.log("Shit Was Never Found")
        }
       let available=  searchDayInMonth_1(props.value.date)

       let handleClose = (event)=>{
        setInturupt(interupt+1);
        setSyncDriver(syncDriver+1)
       }
      

       //Getting Day Comment, quantity, dailyLimit
       useEffect(()=>{
        
        for(let i=0;i<year2024.length;i++){
            if(year2024[i].searchDate(props.value.date)!==null){
                let temp = year2024[i].searchDate(props.value.date);
           
           let keyObj = Object.keys(temp.expenses.expensesList)
           var comment;
           var quantity="N/A";
           var actualComment;
           let dirtyBit=0;
           for(let i=0;i<keyObj.length;i++){
            if(keyObj[i]===props.value.parentNode){
                comment= temp.expenses.expensesList[keyObj[i]];
                //sometimes, I might have ignored the comment section....
                let subKey = Object.keys(temp.expenses.expensesList[keyObj[i]])
                for(let j=0;j<subKey.length;j++){
                    if(subKey[j].toLowerCase()==="comment".toLowerCase()){
                        actualComment=comment[subKey[j]]
                        setGetComment(actualComment)
                    }
                    if(subKey[j].toLocaleLowerCase()==="quantity".toLocaleLowerCase()){
                        quantity=comment[subKey[j]]  
                       setGetQuantity(quantity)
                       dirtyBit=1;
                    }
                    
                }
                if(!dirtyBit){
                    setGetQuantity("N/A");
                    dirtyBit=0;
                }
                //Show Code That handles either missing Comment or mispelt comment 
            }
           }
            }
        }
    
    

       })


      

      useEffect(()=>{
        let statsCheck=()=>{
            let temp = accountRecSearchAlgo(props.value.parentNode).weeklyCalculations();
            console.log("StatsCheck be running here: ",temp)
            let frequency=[]
            let amounts=[]
            for(let i=0;i<temp.length;i++){
                frequency[i]=temp[i].frequency;
                amounts[i]=temp[i].weeklyTotal;
            }
            KarlPerlsonSkewness(amounts,frequency);
    
           }
    
          statsCheck()
      },[syncDriver])
       
      let remaining=200;
      let [navSelector,setNavSelector]=useState({DailyStats:true,WeeklyStats:false,MonthlyStats:false})

      //getting feedback from the DayDetails_Nav Helper 
      function nav_HelperFeedback(state){
        switch (state) {
            case "Daily Stats":
                setNavSelector({DailyStats:true,WeeklyStats:false,MonthlyStats:false})
                break;
        case "Weekly Stats":
            setNavSelector({DailyStats:false,WeeklyStats:true,MonthlyStats:false})
            break;
            case "Monthly Stats":
            setNavSelector({DailyStats:false,WeeklyStats:false,MonthlyStats:true})
            break;
            default:
                setNavSelector({DailyStats:true,WeeklyStats:false,MonthlyStats:false})
                break;
        }
      }
      let [quantityBit,setQuantityBit]=useState(false);
      
      
   
    
       let days=["Days","Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7"];
      
//       let amounts= ["Amount",0,70,46,24,24,65,90];
//      let comments= ["Comments","Deducted from the food account","Deducted from the food account","Deducted from the food account","Deducted from the food account","Deducted from the food account","Deducted from the food account","Deducted from the food account"]
//  let quantity=["Quantity","N/A","N/A","N/A","N/A","N/A","N/A","N/A"]

      
       let amounts=[];
       let datesList=[];
       let quantity=[];
       let comments=[];



       function generalAcquireQuantity(date){

        var quantity="N/A";
        for(let i=0;i<year2024.length;i++){
            if(year2024[i].searchDate(date)!==null){
                let temp = year2024[i].searchDate(date);
           
           let keyObj = Object.keys(temp.expenses.expensesList)
           var comment;
           
           for(let i=0;i<keyObj.length;i++){
            if(keyObj[i]===props.value.parentNode){
                comment= temp.expenses.expensesList[keyObj[i]];
                //sometimes, I might have ignored the comment section....
                let subKey = Object.keys(temp.expenses.expensesList[keyObj[i]])
                for(let j=0;j<subKey.length;j++){
                    
                    if(subKey[j].toLocaleLowerCase()==="quantity".toLocaleLowerCase()){
                        quantity=comment[subKey[j]]  
                    }
                    
                }
            }
           }
            }
        }
        return quantity;
       }

       function weeklyDetails_Distribution(){

        let recquired= accountRecSearchAlgo(props.value.parentNode).returnWeekNumber(props.value.date);
        console.log("This is the the fucken recquired array: ",recquired);

        //What is the week starting day 
        let week_starting_date = recquired.days[0].date;
        console.log("My Week Started here...",week_starting_date)
        let starting_date_tracker=  parseInt(week_starting_date.split("/")[0]);
        console.log(starting_date_tracker);

        
        //sample the days involved
        let actual_days=[];
        for(let i=0;i<days.length;i++){
            actual_days[i]= days[i];
        }
        
        for(let i=recquired.frequency+1;i<days.length;i++){
            actual_days.pop();
        }

        //initialise counter and valid date tracker
        let counter=starting_date_tracker;
            let valid_date_tracker = recquired.days;
            let found_at=[];

        //initialising the other arrays
        let valid_bit_map=[];
           //initialise the bit map to zero
           for(let t=0;t<days.length;t++){
            valid_bit_map[t]=0;
            found_at[t]=-1;
        }

        //fill up the bit map; 1 means date exist , 0 means date does not exist
        for(let n=1;n<days.length;n++){ 

        for(let j=0;j<recquired.frequency;j++){
            if(counter===parseInt(valid_date_tracker[j].date.split("/")[0])){
                valid_bit_map[n]=1;
                found_at[n]=j;
                break;
            }
        }
        counter++;
    }
        for(let i=0;i<days.length;i++){
            if(i==0){
                amounts[i]="Amounts";
                quantity[i]="Quantity";
                comments[i]="Comments";
                datesList[i]="Date";
            }
            else{
                    if(valid_bit_map[i]==true){
                       amounts[i]=recquired.days[found_at[i]].amount
                        datesList[i]=recquired.days[found_at[i]].date;
                        if(getQuantity==="N/A"){
                        quantity[i]="N/A";
                            }
                    else{

                        if(props.value.date===recquired.days[found_at[i]].date){
                         quantity[i]=getQuantity;
                          }
                        else{
                             quantity[i]=generalAcquireQuantity(recquired.days[found_at[i]].date);
                         }
                
                // console.log("This could be the quantity: ",)
                         }
                     comments[i]=getComment;
                         }else{
                      amounts[i]=0;
                      datesList[i]="--";
                      quantity[i]="--";
                     comments[i]="-";
                     }


                }
        }
        console.log("This is my obtained bit map",valid_bit_map);
        // return {actual_days:actual_days,
        //     bitmap:valid_bit_map,
        // };

       }
       let myDays=weeklyDetails_Distribution();

      useEffect(()=>{
        if(getQuantity==="N/A")
            {
                setQuantityBit(false);
            }
            else{
                setQuantityBit(true);
            }
        })

        return<>
        <div className="day-details-container">
            <div className="day-details-sub-1">
                <span className="close-icon-1" onClick={handleClose}> <FaRegWindowClose/></span>
                <div className="day-descriptor">
                    <div className="day-descriptor-1">
                        . 
                    </div>
                    <div className="day-descriptor-2">
                        <div className="day-details-descriptor-1-2">{props.value.date}</div>
                        <div className="day-details-descriptor-1-3">{avail}</div>
                    </div>
                </div>
            </div>
            <section className="day-details-navigation-center">
               <DayDetails_HelperNav value={{key:"Daily Stats",feedBack:nav_HelperFeedback,id:0}}/>
               <DayDetails_HelperNav value={{key:"Weekly Stats",feedBack:nav_HelperFeedback,id:1}}/>
               <DayDetails_HelperNav value={{key:"Monthly Stats",feedBack:nav_HelperFeedback,id:2}}/>

            </section>
            <div className="day-details-sub-2">
     {(navSelector.DailyStats) &&  <section className="daily-stats-view-port ">  

      <div className="sub-2-graphic-sec-container">
                    {/* <div className="sub-2-bar-1" id="bar-rep">
                        <div className="inner-rapper-1"></div>
                    </div>
                    <div className="sub-2-bar-2" id="bar-rep">
                    <div className="inner-rapper-2"></div>
                    </div> */}
                    {/* <div className="sub-2-bar-3" id="bar-rep">
                    <div className="inner-rapper-3">.</div>
                    </div>
                    <div className="sub-2-bar-4" id="bar-rep">
                    <div className="inner-rapper-4">.</div>
                    </div> */}
                    {/* <Day_Meta_Data/> */}
                   
                    <div className="to-be-named">
                        <Oval_Management value={{comments:getComment,quantity:getQuantity}}/>
                         </div>


                   
                    

                </div>
                <div className="sub-2-det-details">
                    <div className="det-total">
                        <span className="total-spent-day">Total Spent: </span>
                        <span className="day-position-det">{available.toLocaleString("en-EN",{style:"currency",currency:"INR"})}</span>
                    </div>
                    <div className="det-total">
                        <span className="total-spent-day">Week Number: </span>
                        <span className="day-position-det">{accountRecSearchAlgo(props.value.parentNode).returnWeekNumber(props.value.date).weekNumber}</span>
                    </div>
                    <div className="det-total">
                        <span className="total-spent-day">Remaining Balance: </span>
                        <span className="day-position-det">{remaining.toLocaleString("en-EN",{style:"currency",currency:"INR"})}</span>
                    </div>
                </div>

      </section> }
      {(navSelector.WeeklyStats) && <section className="weekly-stats-view-port">

        {/* <p><span style={{color:"green"}}><MdOutlineConstruction /></span>This Section Is Under Construction</p> */}
        <section>
            {/* //main area, I can do anything with this space (Not necessarily having any defauilt display settings) */}
            <div className="entire-table-container">
               <DataSheet value={{property:days,type:"day",quantityBit:quantityBit}} /> 
               <DataSheet value={{property:amounts,type:"amount",quantityBit:quantityBit}} />
                <DataSheet value={{property:datesList,type:"date",quantityBit:quantityBit}} />
               <DataSheet value={{property:quantity,type:"quantity",quantityBit:quantityBit}} />  
               <DataSheet value={{property:comments,type:"comment",quantityBit:quantityBit}} />  
            </div>
        </section>

      </section>}

      {(navSelector.MonthlyStats) &&<section className="monthly-stats-view-port">
      <p><span style={{color:"green"}}><MdOutlineConstruction /></span>This Section Is Under Construction</p>
      

      </section>}
              
            </div>
            <div className="day-details-sub-3">
                <p className="exp-acc-disclaimer">This Dash-board is clipped from the official {props.value.parentNode} Account</p>
            {/* <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="lightBlue"/>
                <text x="10" y="40" font-family="Arial" font-size="40" fill="darkBlue">OOPS</text>
               <circle cx="150" cy="55" r="30" fill="red"/>
               <text x="135" y="55" font-family="Arial" font-size="20" fill="white">!</text>
            </svg> */}
            </div>
        </div>
        
        </>
    }

    function Day_Meta_Data(props){


        return <>
        <div className="meta-data-container">
        <div className="meta-data-subsection-1">
            {props.value.icon}
            {props.value.key}:
           
        </div>
        <div className="meta-data-subsection-2">
            {props.children}
        </div>
        </div>
        
        </>
    }

    function Oval_Display_Sheet(props){
        

        let handleSelect=(event)=>{
            props.value.func(props.value.key)
           
        }

        return <>
        <div className="oval-display-sheet-container" onClick={handleSelect}>
        {props.value.key}
        </div>
        
        </>
    }


    function Oval_Management(props){
        // states that keep track of oval events
        // let [commentStatus,setCommentStatus]=useState({})
        // let [quantityStatus,setQuantityStatus]=useState({})
        // let [dailyLimit,setDailyLimit]=useState({})
        // let [statistics,setStatistics]=useState({})
        let [componentController,setComponentController] = useState(0);
        let [active,setActive]=useState({comment:false,quantity:false,dailyLimit:false,statistics:false})
        //function that uplift state from below
        function getFeedBack(key){
            setComponentController(1);
            switch (key) {
                case "Comment":
                    setActive({comment:true,quantity:false,dailyLimit:false,statistics:false});
                    break;
                case "Quantity":
                    setActive({comment:false,quantity:true,dailyLimit:false,statistics:false});
                    break;
                case "Daily Limit":
                    setActive({comment:false,quantity:false,dailyLimit:true,statistics:false});
                    break;
                case "Statistics":
                    setActive({comment:false,quantity:false,dailyLimit:false,statistics:true});
                    break;
                default:
                    break;
            }
            // return key;
        }

        useEffect(()=>{
            function  getSelected(){
                let objKey= Object.keys(active);
                for(let i=0;i<objKey.length;i++){
                    if(active[objKey[i]]){
                        console.log("Hello, You woke me up ",objKey[i])
                    }
                }
            }
           getSelected();
        //    console.log(props.value)
        })

        return <>
        <section className="statistics-outer-frame">
        <section className="ovals-frame"> 
                    <div className="ovals-sub-frame-1"> 
                    <Oval_Display_Sheet value={{key:"Comment",value:props.value.comments,func:getFeedBack}}/>
                    <Oval_Display_Sheet value={{key:"Quantity",value:props.value.quantity,func:getFeedBack}}/>
                    </div>
                    <div className="ovals-sub-frame-2">
                    <Oval_Display_Sheet value={{key:"Daily Limit",value:props.value.comments,func:getFeedBack}}/>
                    <Oval_Display_Sheet value={{key:"Statistics",value:props.value.comments,func:getFeedBack}}/>
                     </div>
        </section>
        <section className="">
            {(active.comment) && <Day_Meta_Data value={{key:"comment",icon: <FaRegCommentDots />}}>  {props.value.comments}</Day_Meta_Data>}
            {(active.quantity) && <Day_Meta_Data value={{key:"quantity",icon: <FaRegCommentDots />}}>{(props.value.quantity!=="N/A") ? <p>Purchased {props.value.quantity} </p> : <p>Quantity is not specitied for this commodity </p>} </Day_Meta_Data>}
            {(active.dailyLimit)&&<Day_Meta_Data value={{key:"",icon:<MdOutlineConstruction />}}><p>This section is under construction</p> </Day_Meta_Data>}
        </section>
        </section>
                   
                    
        </>
    }

    function DayDetails_HelperNav(props){
        let [indicator,setIndicator]=useState(0)
        let [selected,setSelected]=useState(0);

        let cleanUp =(selected)=>{
            let temp =[];
            while(temp.length){
                temp.pop();
            }
           
            for(let i=0;i<3;i++){
                if(i!==selected){
                    temp.push(i);
                }
            }
            return temp;
        }

        useEffect(()=>{
            let div = document.querySelectorAll(".day-details-nav-1")
            if(!indicator){
                 div[0].style.borderBottom="2px solid orange"
                  div[1].style.border="none"
                  div[2].style.border="none"
            }
        },[])

        useEffect(()=>{
            let div = document.querySelectorAll(".day-details-nav-1")
            if(indicator){
                div[selected].style.borderBottom="2px solid orange"
                let temp = cleanUp(selected);
                console.log(temp)
                div[temp[0]].style.border="none"
                div[temp[1]].style.border="none"
                console.log(div)
                setIndicator(0)
            }
        })
        function selectHandler(key){
            switch (key) {
                case 0:
                    setSelected(0);
                    break;
                case 1:
                    setSelected(1)
                    break;
                case 2:
                    setSelected(2)
                    break;
            
                default:
                    setSelected(0)
                    break;
            }
        }
     
        let handleSelect=(event)=>{
            props.value.feedBack(props.value.key);
            setIndicator(1);
            selectHandler(props.value.id);
        }
        return<>
         <div className="day-details-nav-1" onClick={handleSelect}>{props.value.key}</div>
        </>


    }
    
    function DataSheet(props){
        //In the props I need an array of the property to bee mapped

        let [controlSignal,setControlSignal]=useState({
            isNumber:false,
            isLongString:false,
            isNotSpecified:false,
            isDate:false,
        });
        useEffect(()=>{
            let commentSection = document.querySelectorAll(".data-sheet-header-row");
            console.log("The value of the Comment Section is: ",commentSection)
            if(props.value.type==="day"){
                setControlSignal({isNumber:false,isLongString:false,isNotSpecified:false,isDate:false})
                commentSection[0].classList.add("header-special")
                return;
            }
            if(props.value.type==="amount"){
                setControlSignal({isNumber:true,isLongString:false,isNotSpecified:false,isDate:false});
                commentSection[1].classList.add("amount-special")
                return;
            }
            if(props.value.type==="quantity"){
                
                if(props.quantityBit){
                    commentSection[3].classList.add("quantity-bit-on-special");
                    console.log("The quantity bit is: ",props.value.quantityBit);
                    
                }
                else{
                    commentSection[3].classList.add("quantity-bit-off-special");
                    console.log("The quantity bit is: ",props.value.quantityBit);
                    setControlSignal({isNumber:false,isLongString:false,isNotSpecified:true,isDate:false});
                }
                return;
            }
            if(props.value.type==="comment"){
                setControlSignal({isNumber:false,isLongString:true,isNotSpecified:false,isDate:false});
                commentSection[4].classList.add("comments-special")
                return;
            }
            if(props.value.type==="date"){
                setControlSignal({isNumber:false,isLongString:false,isNotSpecified:false,isDate:true});
                commentSection[2].classList.add("comment-special");
            }
        
        },[])
        let NumberOfDays=7;
        
        // console.log("Im Displaying my Props here",props)

        return <>
        <section className="data-sheet-template">
        <div className="data-sheet-header-row">
        {
            props.value.property.map((element)=>(
                <span className="data-sheet-header-element" key={Math.random()*1000}> { (controlSignal.isNumber) ? element.toLocaleString("en-EN",{style:"currency",currency:"INR"}) : element } </span> 
            ))
        }
        </div>

        </section>
        </>
    }
    



   

   

    
    

export default FinanceSquares;