import { useEffect,useState } from "react";
import "./CreateHairDresser.css"
import { TfiEmail } from "react-icons/tfi";
import { FiPhoneIncoming } from "react-icons/fi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaBusinessTime } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import HairDresser_Profile from "./Hair Dresser/HairDresser_Profile";

import gsap from "gsap";





function GetStarted1(props){
    let [lock,setLock]=useState(0)
    // let [inputColor,setInputColor]=useState({
    //     email:"blue",
    //     phone:"blue",
    //     name:"blue",
    //     company:"blue"
    // });

    let [emailColor,setEmailColor]=useState("blue")
    let [phoneColor,setPhoneColor]=useState("blue")
    let [nameColor,setNameColor]=useState("blue")
    let [companyColor,setCompanyColor]=useState("blue")
    //define the input states
    let [emailValue,setEmailValue]=useState("")
    let [phoneValue,setPhoneValue]=useState("")
    let [nameValue,setNameValue]=useState("")
    let [companyValue,setCompanyValue]=useState("")

    //states too keep track of the validity of input
    //1. state for validation of phone input
    
    let [phoneState,setPhoneState]=useState({
        userInput:"",
        status:false,
    })

    //2. state to keep track of validation of email address
    let [emailState,setEmailState]=useState({
        userInput:"",
        status:false,
    });

    //name state
    let [nameState,setNameState]=useState({
        userInput:"",
        status:false,
    })
    //checkbox state
    let [checkBoxState,setCheckBoxState]=useState({
        userInput:"",
        status:false,
    })
    //company name state
    let [companyState,setCompanyState]=useState({
        userInput:"",
        status:true
    })

    //overall state
    let [overallState,setOveralState]=useState({
        value:"",
        status:false,
    })
    

    //update the respective states on input changes
    let handleFormEmail=(event)=>{
        setEmailValue(event.target.value)
    }
    let handleFormPhone=(event)=>{
        setPhoneValue(event.target.value)
    }
    let handleFormName=(event)=>{
        setNameValue(event.target.value)
    }
    let handleFormCompany=(event)=>{
        setCompanyValue(event.target.value)
    }

    //helper function
    function telScanner(input){
        for(let i=0;i<input.length;i++){
            if(!(input.charCodeAt(i)>=48 && input.charCodeAt(i)<=57)){
                // console.log(input.charAt(i))
                if(input.charCodeAt(i)!==43) return false;
            }
        }
        return true;
    }
   
    

function phoneNumberTracker(phone){
    let phoneSpecs={
        predicate:false,
        initialiser:false,
        prefix:false,
    };
    var correctPhone=null;
    //case 1: if user fills in the predicate only
    //case 2: if user fills in the predicate and the initialiser
    //case 3: if user fills in the predicate and the initialiser and the prefix
    

    //check case1;
    if(phone.length===10 && !phone.includes("+")){
        if(!telScanner(phone))setPhoneState({...phoneState,userInput:"notNumber",status:false})
            else{ 
        setPhoneState({...phoneState,userInput:"predicate",status:true})
        phoneSpecs.predicate=true;
        correctPhone="+91"+phone;
            }
    }
    //check case2
    if(phone.length===12){
        if(!phone.charAt(0)==="9" && phone.charAt(1)==="1"){
            if(telScanner(phone))setPhoneState({...phoneState,userInput:"notNumber",status:false})
                else{ 
            setPhoneState({...phoneState,userInput:"initialiser",status:true})
            phoneSpecs.initialiser=true;
            correctPhone="+"+phone;
                }
        }
    }
    //check case3
    if(phone.length===13 && phone.charAt(0)==="+"){
        if(!telScanner(phone))setPhoneState({...phoneState,userInput:"notNumber",status:false})
            else{ 
        setPhoneState({...phoneState,userInput:"prefix",status:true})
        phoneSpecs.prefix=true;
        correctPhone=phone;
            }
    }
    //one more missing case when all are false....

    if(!phoneSpecs.predicate && !phoneSpecs.initialiser && !phoneSpecs.prefix){
        if(!phone.length)setPhoneState({...phoneState,userInput:"empty",status:false});
            else{
                setPhoneState({...phoneState,userInput:"invalid",status:false})
        }
        
    }

  

    //now we finished with the checking, lets validate
    return correctPhone;
}

  //function thta tracks the email
  function emailTracker(email){
    if(email.length && email.includes("@")){
        setEmailState({...emailState,userInput:"valid",status:true})
    }
    else{ 
    if(!email.length){
        setEmailState({...emailState,userInput:"empty",status:false})
    }
    else{ 
    if(!email.includes("@")){
        setEmailState({...emailState,userInput:"missing-@",status:false})
    }
    for(let i=0;i<email.length;i++){
        if(email.charCodeAt(i)>=65 && email.charCodeAt(i)<=90){
            setEmailState({...emailState,userInput:"upperCase",status:false})
        }
    }
}
}
}

    let GoToNext=(event)=>{
        
        event.preventDefault();
        setLock(lock+1)
        phoneNumberTracker(phoneValue)
        //email address validation
       emailTracker(emailValue);
       //name validation
       if(!nameValue.length){
        setNameState({...nameState,userInput:"empty",status:false})
        setNameColor("green")
       }
       else{
        setNameState({...nameState,userInput:"valid",status:true})
        setNameColor("green")
       }
       if(!companyValue.length){
        setCompanyState({...companyState,userInput:"empty"})
       }
       else{
        setCompanyState({...companyState,userInput:"valid"})
       }
       setCompanyColor("green")
    }

    useEffect(()=>{
        if(lock){ 
        console.log(phoneState);
        if(!phoneState.status){
           setPhoneColor("red");
        }
        else{
            setPhoneColor("green")
        }
        if(!emailState.status){
           setEmailColor("red")
        }
        else{
            setEmailColor("green")
        }

        //code 2

        if(lock){
            let checkBox= document.querySelector(".accept-check-box");
            console.log(checkBox.checked)
           if(checkBox.checked){
            setCheckBoxState({...checkBox,status:true})
            checkBox.classList.remove("unchecked")
           }
           else{
            setCheckBoxState({...checkBox,status:false})
            checkBox.classList.add("unchecked")
           }
        }




        //code 3
        if(lock){ 
            if((phoneState.status && emailState.status) && checkBoxState.status){
                    setOveralState({value:"proceed",status:true})
            }
            else{
                setOveralState({value:"!proceed",status:false}) 
            }
        }



        
    }
    },[lock])
    // useEffect(()=>{
    //     if(lock){
    //         let checkBox= document.querySelector(".accept-check-box");
    //         console.log(checkBox.checked)
    //        if(checkBox.checked){
    //         setCheckBoxState({...checkBox,status:true})
    //         checkBox.classList.remove("unchecked")
    //        }
    //        else{
    //         setCheckBoxState({...checkBox,status:false})
    //         checkBox.classList.add("unchecked")
    //        }
    //     }
    // },[lock])

    // useEffect(()=>{
    //     if(lock){ 
    //     if((phoneState.status && emailState.status) && checkBoxState.status){
    //             setOveralState({value:"proceed",status:true})
    //     }
    //     else{
    //         setOveralState({value:"!proceed",status:false}) 
    //     }
    // }
    // },[lock])
    useEffect(()=>{
        if(phoneState.status && emailState.status && checkBoxState.status){
            let dataCollection={
                phoneState:phoneState,
                emailState:emailState,
                nameState:nameState,
                companyState:companyState,
                checkBoxState:checkBoxState,
                nameValue:nameValue,
                phoneValue:phoneValue,
                companyValue:companyValue,
                emailValue:emailValue,
                overallState:overallState,

            }
            props.value.feedBackChannel(dataCollection);
        }
    },[lock])

    return <>
    <form className="hairDresser-creation-center">
    <div className="input-template">
        <span className="standard-first-input-icon" ><TfiEmail /></span>
        <div className="input-wrapper">
    <input type="email" placeholder="" id="hair-dresser-email-id" recquired name="email" className="standard-first-input" value={emailValue} onChange={handleFormEmail} style={{borderRight:`2.5px solid ${emailColor}`}}/>
    <label id="email" className="standard-first-label">Email Address</label>
    </div>

    </div>
   
<div className="input-template">
<span className="standard-first-input-icon" ><FiPhoneIncoming /></span>
<div className="input-wrapper">
      <input type="tel" className="customised-input-phone-number standard-first-input"
    placeholder="" id="hairdresser-phoneNumber-input"
    recquired value={phoneValue} onChange={handleFormPhone} style={{borderRight:`2.5px solid ${phoneColor}`}}/>
     <label id="phone" className="standard-first-label">Phone Number</label>
      </div>

</div>
<div className="input-template">
<span className="standard-first-input-icon" ><IoPersonCircleOutline /></span>
<div className="input-wrapper">
    <input type="text" placeholder="" recquired id="hairdresser-fullName-input" className="standard-first-input" value={nameValue} onChange={handleFormName} style={{borderRight:`2.5px solid ${nameColor}`}}/>
    <label id="full-name" className="standard-first-label">Full Name</label>
    </div>

</div>
<div className="input-template">
<span className="standard-first-input-icon" ><FaBusinessTime /> </span>
<div className="input-wrapper">
    <input type="text" placeholder="" id="hair-dresser-company-name-input" className="standard-first-input" value={companyValue} onChange={handleFormCompany} style={{borderRight:`2.5px solid ${companyColor}`}}/>
    <label id="company-name" className="standard-first-label">Company Name</label>
    </div>

</div>

    <div className="first-input-verification">
        <input type="checkBox" className="accept-check-box" name="check-continue"/>
        <label className="check-box-label" id="check-continue">Verify Information</label>
    </div>
    <div className="error-helper ">
        <ErrorConsole value={{emailState:emailState,phoneState:phoneState,companyState:companyState,lock:lock}}/>
    </div>
    <button  className="nxt-btn-input-1" onClick={GoToNext}>Next</button>
    </form>
    </>
}
function GetStarted2(props){

    let [clientLocation,setClientLocation]=useState("");
    let handleChange= (event)=>{
        setClientLocation(event.target.value)
    }
    let handleNextClick=(event)=>{
        event.preventDefault();
        props.value.statusFeedBack(true);
    }


    return <>
    <form className="hairDresser-creation-center">
    <div className="input-template">
        <span className="standard-first-input-icon" ><IoLocationOutline /></span>
        <div className="input-wrapper">
    <input type="location" placeholder="" id="hair-dresser-email-id" recquired name="location" className="standard-first-input" value={clientLocation} onChange={handleChange}/>
    <label id="location" className="standard-first-label">Location</label>
    </div>

    </div>
   
{/* <div className="input-template">
<span className="standard-first-input-icon" ><FiPhoneIncoming /></span>
<div className="input-wrapper">
      <input type="tel" className="customised-input-phone-number standard-first-input"
    placeholder="" id="hairdresser-phoneNumber-input"
    recquired/>
     <label id="phone" className="standard-first-label">Phone Number</label>
      </div>

</div> */}


    
    <button  className="nxt-btn-input-1" onClick={handleNextClick}>Next</button>
    </form>
    
    </>
}


function ErrorConsole(props){

    //  useEffect(()=>{
    //     let customWidth= document.querySelector(".error-order-list")
    //     if(props.value.lock){ 
    //     if(props.value.phoneState.status && props.value.emailState.status && props.value.nameState.status){
    //         customWidth.classList.remove("fixed-width")
    //         customWidth.classList.add("zero-width")
    //     }
    //     else{
    //         customWidth.classList.add("fixed-width")
    //         customWidth.classList.remove("zero-width")
    //     }
    // }
    // },[props.value.lock])

    let err={
        email:{
            isEmpty:"Email can't be empty",
            missing:"Email should contain `@` character",
            upperCase:"Email should not have uppercases"
        },
        phone:{
            isEmpty:"Phone number can't be empty",
            digit:"Phone number should have digits"
        },
        name:{
            isEmpty:"Name can't be empty",
        },
        company:{
            isEmpty:"Company name is optional"
        }
    }


    return <>
    <ul className="error-order-list " >
    <li className="email-section">
        {(props.value.emailState.userInput==="empty") && <p>{err.email.isEmpty}</p>}
        {(props.value.emailState.userInput==="missing-@") && <p>{err.email.missing}</p>}
        {(props.value.emailState.userInput==="upperCase") && <p>{err.email.upperCase}</p>}
    </li>

    <li className="phone-section-section">
        {(props.value.phoneState.userInput==="empty") && <p>{err.phone.isEmpty}</p>}
        {(props.value.phoneState.userInput==="invalid") && <p>{err.phone.digit}</p>}
    </li>
    <li className="company-section">
    {(props.value.companyState.userInput==="empty") && <p>{err.company.isEmpty}</p>}
    </li>

    </ul>
   
   
    {/* <div className="company-section"></div> */}
    
    </>
}


function GetStarted(props){
    //for the case 1
    let [userData,setUserData]=useState({});
    let [mutex,setMutex]=useState(0);
    let [started1Render,setStarted1Render]=useState(true);
    let [loaderStatus,setLoaderStatus]=useState(false)
    let [semaphoreLock,setSemaphoreLock]=useState(false)
    let [started2Status,setStarted2Status]=useState(false);
    function getDataFromGetStarted1(data){
        setUserData({...data});
    }
    function getDataFromLoader(status){
        setLoaderStatus(status)
    }
    function getDataFromGetStarted2(data){
        setStarted2Status(data);
    }
    useEffect(()=>{
        let comp1= document.querySelector(".main-frame-2")
       
        let loader= document.querySelector(".cntd")
        let mainFrame= document.querySelector(".getStarted-main-frame")
        if(mutex){ 
        if(userData.phoneState.status && userData.emailState.status && userData.checkBoxState.status && userData.nameState.status){
           setSemaphoreLock(true) 
           setStarted1Render(false);
            comp1.classList.add("hidden")
            loader.classList.toggle("hide")
            // mainFrame.classList.toggle("show-one");
            // loader.classList.remove("hide");

        }
        else{
            comp1.classList.add("show")
            loader.classList.add("hide")
        }
        console.log(userData)
        }
        setMutex(mutex+1)
    
    },[userData]);

    useEffect(()=>{
        let comp2= document.querySelector(".main-frame-3")
        let loader= document.querySelector(".cntd")
        if(loaderStatus){
             loader.style.marginTop="0px"
            loader.classList.add("hide")
           comp2.classList.toggle("hidden")
        }
    },[loaderStatus])
    useEffect(()=>{
        if(started2Status){
        props.value.statusFeedBack(true);
        }
    },[started2Status])

  


  

    return <>
   <section className="getStarted-main-frame">
    <div className="main-frame-1">
        <div className="main-brand-logo">
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP2OLZ_txhfbv0XKr1QudxakW4W3kTWCMQ2RWZEW-S_adeIW7&s" className="brand-lg-1"/>
        </div>
        <span className="main-brand-name">Blackcess</span>
    </div>
    <div className="main-frame-2">
      {  (started1Render) && <GetStarted1 value={{feedBackChannel:getDataFromGetStarted1}}/> }
        
    </div>
    <div className="cntd hide">
       {(semaphoreLock)&&  <Pre_ProfileLoader value={{statusFeedBack:getDataFromLoader}}/>}
       </div>
    
    <div className="main-frame-3 hidden">
       {  (loaderStatus) &&<GetStarted2 value={{statusFeedBack:getDataFromGetStarted2}}/>}
    </div>
   </section>
  
   
    </>
}


function LazyLoader(){
    let [completed,setCompleted]=useState(false);

    useEffect(()=>{
        let tl=gsap.timeline();
        for(let i=0;i<3;i++){ 
            tl.addLabel("step1")
        .to(".loader-bar-1",{y:-20,backGroundColor:"black",duration:1.5})
                     .to(".loader-bar-1",{y:0,backGroundColor:"blue",duration:.5},"+=0.2")
                     .to(".loader-bar-2",{y:-20,backGroundColor:"blue",duration:.5},"+=0.2")
                     .to(".loader-bar-2",{y:0,backGroundColor:"blue",duration:.5})
                     .to(".loader-bar-3",{y:-20,backGroundColor:"blue",duration:.5},"+=0.2")
                     .to(".loader-bar-3",{y:0,backGroundColor:"blue",duration:.5})

        }

        // setCompleted(true)
               
    })

    // useEffect(()=>{
    //     if(completed){
    //         let temp = document.querySelector(".lazy-loader-container");
    //         temp.classList.add("hide");
    //     }
    // })
    return <>
    <section className="lazy-loader-container">
        <div className="loader-bar-1 bra"> .</div>
        <div className="loader-bar-2 bra"> .</div>
        <div className="loader-bar-3 bra"> .</div>
    </section>
    
    </>
}


function Pre_ProfileLoader(props){
    useEffect(()=>{
        let loader= document.querySelector(".pre-profile-loader");
        var width=0;
       let interval_Id=  setInterval(()=>{
        if(width===240){
            props.value.statusFeedBack(true)
            return ()=>{
                clearInterval(interval_Id)
            }
           }
           else{

        loader.style.width=`${width + 20}px`;
        width=Number(loader.style.width.replace("px",""));

           }
           console.log(width)
       },1000);

        // clean up section
      
    },[])


    return <>
    <section className="pre-profile-loader-template">
        <div className="pre-profile-loader">.</div>
        <div className="pre-profile-description">setting up your profile</div>
         </section>
    
    </>
}



function Tester (){
let [creation,setCreation]=useState(true);
let [intoApp,setIntoApp]=useState(false);
let [getStartedStatus,setGetStartedStatus]=useState(false)

//get data from GetStarted
let getDataFromGetStarted= (data)=>{
    setGetStartedStatus(data);
}

useEffect(()=>{
    if(getStartedStatus){
        setIntoApp(true);
        setCreation(false);
    }
},[getStartedStatus])
    return<>
    {(creation)&&  <div className="create-profile">   <GetStarted value={{statusFeedBack:getDataFromGetStarted}}/></div> }
   { ((!creation) && (intoApp) ) && <div className="app-home"> <HairDresser_Profile/></div> } 

   // <HairDresser_Profile/>
    
    </>
}
export default Tester;
