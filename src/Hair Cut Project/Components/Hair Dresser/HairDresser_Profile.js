import "./HairDresser_Profile.css"
import { useState,useEffect,useContext, createContext } from "react";
import { hairDresserDataBase ,customHairDresser_list} from "../../projectFiles"
import { MdEdit } from "react-icons/md";
import { CgSmartHomeCooker } from "react-icons/cg";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineCardMembership } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePayments } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { FaWallet } from "react-icons/fa6";
import { FcAbout } from "react-icons/fc";
import { IoMdTrendingUp } from "react-icons/io";
import { MdEmojiEvents } from "react-icons/md";
import { TbBrandCashapp, TbFlagSearch, TbRuler2 } from "react-icons/tb";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { SideBarContent } from "../../iconAdder";
import { TbBrandBooking } from "react-icons/tb";
import { IoMdAppstore } from "react-icons/io";
import { SiBitcoincash } from "react-icons/si";
import { FaPersonRays } from "react-icons/fa6";
import { GiThreeFriends } from "react-icons/gi";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import RootComponent from "../Home Page Components/WhatAreYouLookingFor";
import PreInvoice from "../Payment Proccessing/PreInvoice";
import { femaleLookUpTable } from "../Look Up Tables (Only For Design Purposes)/WomenQuickLookUpTable";
import Shopping from "../Shopping Center/Shopping";
import MyBookings from "../Bookings/Bookings";
import { GiGlassCelebration } from "react-icons/gi";

//create a context for screen width data
let ScreenWidthData = createContext();
function HairDresser_Profile(){
    //screen size states
     var [largeSreen,setLargeSreen]=useState(false);
    var [mobileScreen,setMobileScreen]=useState(false);
    var [screenWidth,setScreenWidth]=useState(0);
    var [sideBarTouch,setSideBarTouch]=useState(false)
    useEffect(()=>{
        setScreenWidth(window.innerWidth)
    },[])
    useEffect(()=>{
        window.addEventListener("resize",()=>{
             setScreenWidth(window.innerWidth)
        })
    })

       useEffect(()=>{
            if(screenWidth<600){
                setMobileScreen(true)
                setLargeSreen(false)
            }
            else{
                setMobileScreen(false)
                setLargeSreen(true)
            }
    })

   
    let touchedFromSideBar=(state)=>{
        setSideBarTouch(state);
    }

   
   



    return<>
    <section className="user-profile-1"> 
    <div className="profile-nav" onClick={()=>{setSideBarTouch(true)}}> <HairDresserNav_1/> </div>
    <div className="profile-side-bar">
        <ScreenWidthData.Provider value={{largeSreen:largeSreen,mobileScreen:mobileScreen,screenWidth:screenWidth}}>
            <HairDresserSideBar myProp={{touched:sideBarTouch,feedBack:touchedFromSideBar}}/>
        </ScreenWidthData.Provider>
   
    </div>
    <div className="profile-main-area" onClick={()=>{setSideBarTouch(true)}}>
        <ScreenWidthData.Provider value={{largeSreen:largeSreen,mobileScreen:mobileScreen,screenWidth:screenWidth}}>
             <HaiDresserUserMainArea   />
        </ScreenWidthData.Provider>
   
    </div>
    </section>
   
    
    </>
}


function HairDresserNav_1(){



    return <>
    <section className="Nav_1">
        <div className="nav_1-logo">
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP2OLZ_txhfbv0XKr1QudxakW4W3kTWCMQ2RWZEW-S_adeIW7&s" className="brand-lg-1"/>
            <div className="main-brand-name-1">Blackcess</div>
            </div>
        
        <div className="nav_1-details">
            <div className="nav_1-user-image">
                
            </div>
            <div className="nav_1-user-data">
            <div className="nav_1-name">Thomas</div>
            <div className="nav_1-email">teygdj@gmail.com</div>
            <div className="nav_1-phone">+9176503380</div>

            </div>
        </div>
    </section>
    </>
}


function HairDresserSideBar(props){
    let screenState = useContext(ScreenWidthData);
    let [menuClicked,setMenuClicked]=useState(false);
    let [searchEnable,setSearchEnable]=useState(true);


   
   
 

    let elements= ["My Plans","Wallet","Plus membership","My Ratings","Manage Adresses","Manage Payment Methods","Settings","About Blackcess"]
    let icons = [<IoDocumentTextOutline />,<FaWallet />,<MdOutlineCardMembership />, <FaRegStar />,<CiLocationOn />,<MdOutlinePayments />,<CiSettings />,<FcAbout />];
   
     //function to add an element to the sidebar 
     function  addSideBarContent(value,icon){
        elements.push(value);
        icons.push(icon);
    }
        //initialisation
    let listElements=[];
    for(let i=0;i<elements.length;i++){
        let temp = new SideBarContent(elements[i]);
        temp.addIcon(icons[i]);
        listElements.push(temp)
    }
  



    let handleIconClose=(event)=>{
      setMenuClicked(false)
      setSearchEnable(TbRuler2)
    }
    let handleMenuBtn=(event)=>{
      setMenuClicked(true);
      setSearchEnable(false);
    }


let owner = "Thomas Kazonda"
// ------------------------------------------------------------->
let [currentWord,setCurrentWord]=useState("")
let typingDelay = 200;
let erasingDelay =200;
let nextWordDelay=2000;
let wordIndex= 0;
let charIndex=0;
let words =["Haair Cuts","Haair Styles","Saaloons","Cllippers","Trrending Styles"]

let typing = ()=>{
    if(charIndex<=words[wordIndex].length-1){
        setCurrentWord((prevWord)=>{
            let newWord= prevWord;
            newWord+=words[wordIndex].charAt(charIndex);
           return newWord
        })
         charIndex++;
         setTimeout(typing,typingDelay)
    }
    else{
        setTimeout(erase,nextWordDelay)
    }
}
let erase = ()=>{
    if(charIndex>=0){
        setCurrentWord((prevWord)=>{
            let newWord = prevWord;
            newWord= newWord.substring(0,charIndex);
            return newWord;
        })
        charIndex--;
        setTimeout(erase,erasingDelay)
    }
    else{
        charIndex=0;
        if(wordIndex>=words.length-1){
            wordIndex=0;
        }
        else{
            wordIndex++
        }
        setTimeout(typing,typingDelay)
    }
}

useEffect(()=>{
    typing()
},[])

useEffect(()=>{
    if(props.myProp.touched){
        setMenuClicked(false)
        props.myProp.feedBack(false)
    }
})



    return<>
    <section className="pliz-work">
    { (screenState.largeSreen) ?<div className="side_bar-1-template">
        <ul className="side_bar-1-ul">
            { listElements.map((element)=>( 
                <li key={Math.random()*10000} className="sidebar-list-elements"> <HairDresserSideBar_Helper value={{value:element.value,icon:element.icon}}/></li>
                
            ))}
            
        </ul>
        {/* <div className="side-bar-close hide" onClick={handleIconClose}><IoCloseOutline /></div> */}
    </div>
    : 
    (<div className="menu-button-cnt">
        {(!menuClicked)&&<button className="menu-none-button" onClick={handleMenuBtn}><MdOutlineMenu /></button>}  
       { (menuClicked)&& <div className="side_bar-1-template">
                 <ul className="side_bar-1-ul">
                { listElements.map((element)=>( 
                <li key={Math.random()*10000} className="sidebar-list-elements"> <HairDresserSideBar_Helper value={{value:element.value,icon:element.icon}}/></li>
                
                 ))}
            
               </ul>
              <div className="side-bar-close" onClick={handleIconClose}><IoCloseOutline /></div>
        </div>}

       {(searchEnable)&&  <div className="next-to-menu-search">
            <input className="search-service-search-bar" type="text" placeholder={"Search : "+currentWord}/>
            {/* <div>{currentWord}</div> */}
        </div>
        }
    </div>)
    
             

}

    
    </section>
  
    
    </>
}


function HairDresserSideBar_Helper(props){


    return <>
    <div className="sidebar-helper-template">
        <div className="sideBar-helper-icon">{props.value.icon}</div>
        <div className="sideBar-helper-icon">{props.value.value}</div>
    </div>
    </>
}



function HaiDresserUserMainArea(){
     let screenState = useContext(ScreenWidthData);
     let [basic_dataAcknowledge,setBasicDataAcknowledge]=useState(false); 
     let [basicDetails,setBasicDetails]=useState([])   
     let basicDetailsOrg=[];
     let getDataFromMainAreaRow2=(data)=>{
      for(let i=0;i<data.length;i++){
        basicDetailsOrg[i]= data[i];
      }
     }

     

        useEffect(()=>{
        if(basicDetailsOrg.length){
               
               setBasicDetails([...basicDetailsOrg])
               setBasicDataAcknowledge(true)
        }
        else{
            setBasicDataAcknowledge(false);
        }   
        },[])
        
    return<>
    <section className="user-main-area-template">
      { (screenState.largeSreen)&&  <div className="user-main-area-row-1"><MainAreaRow1 value={{screenState:screenState,dataAck:basic_dataAcknowledge,basicDetails:basicDetails}}/> </div>}
       <div className="user-main-area-row-2"><MainAreaRow2 value={{screenState:screenState,dataForwarding:getDataFromMainAreaRow2}}/> </div>
    </section>
    
    </>
}

function MainAreaRow1(props){

    let details=["Popular Trends","Competitions","Cashback","Customisation"]
    let icons=[<IoMdTrendingUp />,<MdEmojiEvents />,<TbBrandCashapp />,<GiAutoRepair />]
      //initialisation
      let listElements=[];
      for(let i=0;i<details.length;i++){
          let temp = new SideBarContent(details[i]);
          temp.addIcon(icons[i]);
          listElements.push(temp)
      }
 
    
    return<>
    <div className="m-a-row-1">
        <div className="additional-child-1">
        {listElements.map((element)=>(
            <div key={Math.random()*676778}><MainAreaRow1Helper value={{value:element.value,icon:element.icon}}/></div>
        ))}
        </div>
        <div className="additional-child-2">
           {(props.value.dataAck & props.value.screenState.largeSreen)?
           <div className="shiot row2-extra-details">
                 {props.value.basicDetails.map((element)=>(
                  <div key={Math.random()*5353}><MainAreaRow2_helper_large_screen value={{value:element.value,icon:element.icon}}/></div>
                
                 ))}
           </div>
           :
           <div>No data received</div>
        }

        </div>
       
    </div>
    </>
}


function MainAreaRow1Helper(props){

       

    return<>
    <div className="main-area-helper-1">
        <span>{props.value.icon}</span>
        <span>{props.value.value}</span>
    </div>
    </>
}

function MainAreaRow2(props){

    let [rootAck,setRootAck]=useState(false)
    let [tableLookUpId,setTableLookUpId]=useState(-1);
    let [rootDisplay,setRootDisplay]=useState(true)
    let [exitWindow,setExitWindow]=useState({payment:false,shopping:false,samples:false,dresserProfile:false,home:false,bookings:false,store:false,friends:false})
    let [greenDot,setGreenDot]=useState(false);

        let values=["Home","Bookings","Store","Clients","Friends"]
        let icons=[ <FaWallet/>,<TbBrandBooking />,<IoMdAppstore />,<FaPersonRays />,<GiThreeFriends />];
          //initialisation
      let listElements=[];
      for(let i=0;i<values.length;i++){
          let temp = new SideBarContent(values[i]);
          temp.addIcon(icons[i]);
          listElements.push(temp)
      }
      if(listElements.length){
        props.value.dataForwarding(listElements);
      }
       //-------------------------->
        let [rootStatus,setRootStatus]=useState({goPayment:false,generalService:false,hairDresserProfile:false,sampleImages:false});

       function manageWindows(state){
       setExitWindow((prevState)=>{
        let newState = Object.keys(prevState).reduce((acc,currKey)=>{
            acc[currKey]=false;
            return acc;
        },{})
        if(state==="all"){
            return newState
        }
        newState[state]=true;
        return newState;
       })
       }
       
       let [xxx,setXXX]= useState("")

        function getDataFromRootComponent(data,id=-1,forShopping={}){
            // console.log(forShopping)
            setRootDisplay(false)
            if(data==="payment"){
                // manageWindows("all")
                setRootStatus({goPayment:true,generalService:false,hairDresserProfile:false,sampleImages:false})
                setTableLookUpId(id)
                manageWindows("payment");
                return;
            }
            if(data==="generalservices"){
                // manageWindows("all")
               setRootStatus({goPayment:false,generalService:true,hairDresserProfile:false,sampleImages:false})
               manageWindows("shopping")
                return;
            }
            if(data==="sampleImages"){
                 setRootStatus({goPayment:false,generalService:false,hairDresserProfile:false,sampleImages:true})
                 setXXX(forShopping.shownImage)
                 manageWindows("samples")
                 return;
            }
            if(data==="hairDresserProfile"){
                 setRootStatus({goPayment:false,generalService:false,hairDresserProfile:true,sampleImages:false})
                 manageWindows("dresserProfile")
                 return;
            }
        }
        function rootChildClose(distress){
            setRootDisplay(distress)
             manageWindows("all")
        }
        // ----------------------------------------------------------------->

        function getDataFromQuickNav(data){
            if(data==="home"){
                manageWindows("home");
                setRootDisplay(true)
                return;
            }
            setRootDisplay(false)
            manageWindows(data);
            return;
        }

        let greenDotAck=(status)=>{
            setGreenDot(status)
           
            setTimeout( ()=>{
                getDataFromQuickNav("bookings")
            },4000)
        }

      



    return <>
     <div className="delete-later">
      {(rootDisplay)&& <ScreenWidthData.Provider value={{screenState:props.value.screenState,feedBack:getDataFromRootComponent}}>
             <RootComponent/>
        </ScreenWidthData.Provider>
        }
        {(!rootDisplay && exitWindow.payment)&& <PreInvoice value={{keyId:tableLookUpId, distressCall:rootChildClose,greenDotAck:greenDotAck,deployedFrom:"root",alreadyOccupied:greenDot}}/>}
       {(!rootDisplay && exitWindow.shopping) && <div onClick={()=>{rootChildClose(true)}}>Blackcess Shopping Center Is Under Construction</div>}
       {(!rootDisplay && exitWindow.dresserProfile) && <div onClick={()=>{rootChildClose(true)}}>Hair Dresser Profile Is Under Construction </div>}
        {(!rootDisplay && exitWindow.samples) && <div onClick={()=>{rootChildClose(true)}} style={{background:`${xxx}`, height:"150px", backgroundSize:"cover",backgroundPosition:"center"}}>Samples Section  Is Under Construction </div>}
        {(!rootDisplay && exitWindow.bookings) && <div className="booking-area"><MyBookings value={{keyId : tableLookUpId + 1,distressCall:rootChildClose,greenDotAck:greenDotAck,alreadyOccupied:greenDot}}/></div>}
        {(!rootDisplay && exitWindow.store) && <div onClick={()=>{rootChildClose(true)}}>Store Section  Is Under Construction </div>}
        {(!rootDisplay && exitWindow.clients) && <div onClick={()=>{rootChildClose(true)}}>Clients Section  Is Under Construction </div>}
        {(!rootDisplay && exitWindow.friends) && <div onClick={()=>{rootChildClose(true)}}>Friends Section  Is Under Construction </div>}
      
        </div>
        
   { (props.value.screenState.mobileScreen)&& <div className="shiot">
    
        {listElements.map((element,index)=>(
           (element.value==="Bookings" && greenDot) ?  <div key={Math.random()*5353} className="green-dot-enable"><MainAreaRow2_helper value={{value:element.value,icon:element.icon,index:index,feedBack:getDataFromQuickNav,ScreenWidthData:props.value.screenState}}/></div> : <div key={Math.random()*5353}><MainAreaRow2_helper value={{value:element.value,icon:element.icon,index:index,feedBack:getDataFromQuickNav,ScreenWidthData:props.value.screenState}}/></div>
        ))}
    </div>
  
    
}
    {(greenDot) &&  <AppointmentPopUp/>}
    
    </>
}

function MainAreaRow2_helper(props){

    let [isActive,setIsActive]=useState(false)
    let [divClass,setDivClass]= useState("r-2-helper-template")

  

    return<>
   
    <div className={divClass} onClick={()=>{
        props.value.feedBack(props.value.value.toLowerCase());
        setIsActive(true);
    }}>
        <span className="shiot-icon" >{props.value.icon}</span>
        <span>{props.value.value}</span>
    </div>
    
    </>
}

function MainAreaRow2_helper_large_screen(props){

    return<>
      <div className="r-2-helper-template-large">

     <span className="shiot-icon-large" >{props.value.icon}</span>
    <span>{props.value.value}</span>
    </div>
    </>
}


function AppointmentPopUp(props){
    let [showDetails,setShowDetails]= useState(true);

    useEffect(()=>{
        let temp = document.querySelector(".order-set-pop-up")
        if(!showDetails){
            temp.style.background="transparent"
        }
        else{
             temp.style.background="antiquewhite"
        }
    },[showDetails])

    return <>
     <div className="order-set-pop-up">
        <div className="order-pop-up-icon" onClick={()=>{
            setShowDetails(true)
        }}></div>

       { (showDetails)&& <div className="order-pop-up-details">
            <p>Click to view appointment details</p>
            <span className="pop-up-close-ext" onClick={()=>{
                setShowDetails(false);
            }}><IoCloseOutline/></span>
        </div>
        }
      </div>
    
    </>
}





export default HairDresser_Profile
export {ScreenWidthData}