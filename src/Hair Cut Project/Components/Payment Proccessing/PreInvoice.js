import { useState,useEffect,useContext,createContext,useRef } from "react"
import { femaleLookUpTable } from "../Look Up Tables (Only For Design Purposes)/WomenQuickLookUpTable"
import "./PreInvoice.css"
import { IoReturnUpBack } from "react-icons/io5";
import { clients_womenHairDressers } from "../../WomenDeals/DealTemplate";
import { IoMdClose } from "react-icons/io";
import gsap from "gsap";
import { opacity } from "@cloudinary/url-gen/actions/adjust";

let OccupiedContext= createContext();

function PreInvoice(props){
    let [paymentDetails,setPaymentDetails]=useState({})
    let [drop,setDrop]=useState(0)
    let [profPicState,setProfPicState]=useState("")
    let [profPicAck,setProfPicAck]=useState(false)
    let [invoicePicRes,setInvoicePicRes]=useState(false);
    let [root,setRoot]=useState(true);
    let [bookingSet,setBookingSet]=useState(false);

    // ........................................................................>

    
    useEffect(()=>{
        if(props.value.keyId>=0){
            for(let i=0;i<femaleLookUpTable.length;i++){
             if(femaleLookUpTable[i].keyId===props.value.keyId){
                setDrop(drop+1)
               setPaymentDetails(femaleLookUpTable[i])
               return;
                }
            }
        }
    },[])

    useEffect(()=>{
        if(!Object.keys(paymentDetails).length){
            setDrop(0);
        }
        else{
            setDrop(drop+1)
        }
    },[paymentDetails])
    

    let handleInvoiceClose= (event)=>{
        if(props.value.deployedFrom==="root"){
            props.value.distressCall(true);
        }
        if(props.value.deployedFrom==="booking"){
            props.value.distressCall(false)
        }
        
        
    }
    let getPicFromProfile= (pic)=>{
        setProfPicState(pic);
        setProfPicAck(true)
    }
    useEffect(()=>{
        if(profPicState.length){
            setProfPicAck(true);
            // setProfPicState("")
        }
        else{
            setProfPicAck(false)
        }
    },[profPicState])
    let getPicInfoFromInvoice=(info)=>{
        setInvoicePicRes(info)
    }
   
    let handlePicClose=(event)=>{
        setProfPicAck(false)
    }

    let getProceedState=(state)=>{
        setRoot(state);
    }

    let getFeedbackFromAppointmentSet=(feedBack)=>{
        setBookingSet(feedBack)
    }

    useEffect(()=>{
        if(bookingSet){
             props.value.greenDotAck(bookingSet);
             if(props.value.deployedFrom==="booking"){
                setTimeout(()=>{
                    props.value.distressCall(false);
                },7000)
                
             }
        }
       
    },[bookingSet])

    useEffect(()=>{
        console.log("My Props: ",props.value.alreadyOccupied)
    })

    return<>
    
    <section className="PreInvoice-container-mobile-screen">
        <span className="return-to-root" onClick={handleInvoiceClose}><IoReturnUpBack /><span id="back-sign">Back</span> </span>
         { (root)&& <div className="preinvoice-child-1">
         { (drop)&&  <DresserSideProfile value={{saloonName:paymentDetails.saloonName,feedBack:getPicFromProfile}}/> }

        </div>
        }
        
       {(root) &&  <div className="preinvoice-child-2">
           { (drop)&& <InvoicePrep value={{paymentDetails:paymentDetails,profPicAck:profPicAck,profPicState:profPicState,picFeedBack:getPicInfoFromInvoice}}/> }

           { (profPicAck)&&<div className="profile-pic-extender">
            <span className="image-closer" onClick={handlePicClose}><IoMdClose /></span>
            <img src={profPicState}/>

            </div>
            }


        </div>
        }
      { (root) &&  <div className="preinvoice-child-3">
            <GeneralButton value={{feedBack:getProceedState}}/>
            </div>
             }
        {/* ------------------------------------------------------------------------> Select time Slot */}
        {
            (!root) &&
            <OccupiedContext.Provider value={{alreadyOccupied:props.value.alreadyOccupied}}>
                 <FreeTimeSlotPick value={{saloonDetails:paymentDetails,feedBack:getFeedbackFromAppointmentSet}}/>
            </OccupiedContext.Provider>
            
        }
    </section>
    </>
}

function DresserSideProfile(props){

    let [profPic_a,setProfPic_a]=useState("")
    let [profPicDone,setProfPicDone]=useState(false)
   useEffect(()=>{
    let dresserDP = document.querySelector(".dresser-side-prof")
    // console.log(dresserDP)
    for(let i=0;i<clients_womenHairDressers.length;i++){
        if(clients_womenHairDressers[i].hairDresserName===props.value.saloonName){
            dresserDP.style.background=`url(${clients_womenHairDressers[i].getProfileImage()})`
            dresserDP.style.backgroundSize=`cover`;
            dresserDP.style.backgroundPosition='center'
            setProfPic_a(clients_womenHairDressers[i].getProfileImage())
           setProfPicDone(true)
        }
    }
    // dresserDP.style.background=`url(${})`
   },[])
   let handleShowProfilePic=()=>{
    if(profPicDone){
        props.value.feedBack(profPic_a)
    }
    
   }


    return<>
    <section className="dresser-side-profile-container-mobile-screen">
        <div className="dresser-side-prof" onClick={handleShowProfilePic}></div>
        <div className="dresser-side-info">
             <div className="dresser-side-name">{props.value.saloonName}</div>
             <div className="dresser-side-rating">New</div>
             <div className="dresser-side-identification">Hair Dresser</div>
        </div>
      
       
    </section>
    </>
}


function InvoicePrep(props){
    let [showPicExtender,setShowPicExtender]=useState(false)
    let [closePic,setClosePic]=useState(false);

   useEffect(()=>{
    if(props.value.profPicAck){
        setShowPicExtender(true)
        setClosePic(false)
        
    }
    else{
        setShowPicExtender(false)
    }
   },[props.value.profPicAck])
   let handleClosePickExtender=(event)=>{
        setClosePic(true)
        // props.value.picFeedBack(true);
       
   }
//    useEffect(()=>{
//     let imageView = document.querySelector(".profile-pic-extender")
//    })


    return <>
    <section className="invoice-prep-container">
        <InvoicePrep_Helper value={{content:"Hair Style",type:"text",val:props.value.paymentDetails.service}}/>
        <InvoicePrep_Helper value={{content:"Saloon",type:"text",val:props.value.paymentDetails.saloonName}}/>
        <InvoicePrep_Helper value={{content:"Price",type:"price",val:props.value.paymentDetails.price}}/>
        <InvoicePrep_Helper value={{content:"Blackcess Bonus",type:"price",val:100}}/>
        <InvoicePrep_Helper value={{content:"Amount payable",type:"price",val:(props.value.paymentDetails.price - 100)}}/>
       
    </section>
    </>
}

function InvoicePrep_Helper(props){
    let [keyClass,setKeyClass]=useState("")
    let [generalType,setGeneralType]=useState({isText:false,isPrice:false})

    useEffect(()=>{
        if(props.value.type==="text"){
            setKeyClass("invoice-prep-helper-value");
            setGeneralType({isText:true,isPrice:false})
            return;
        }
        if(props.value.type==="price"){
            setKeyClass("price-key-class")
            setGeneralType({isText:false,isPrice:true})
            return;
        }
    },[])

    return<>
    <section className="invoice-prep-helper-container-mobile-screen">
        <div className="invoice-prep-helper-key">{props.value.content}</div>   
        <div className={keyClass}>
            {(generalType.isText)&& <span> {props.value.val} </span>}
            {(generalType.isPrice)&& <span>{props.value.val.toLocaleString("en-EN",{style:"currency",currency:"INR"})}</span>}
        </div>
    </section>
    </>
}

function GeneralButton(props){

        let handleProceed=(event)=>{
            props.value.feedBack(false);
        }

    return<>
    <button  className="general-button" onClick={handleProceed}>Proceed</button>
    </>
}



function FreeTimeSlotPick(props){
    let [slotSelected,setSlotSelected]=useState({status:false,value:""});
    let [slotConfirmed,setSlotConfirmed]=useState(false)
    let [twiceDisclaimer,setTwiceDisclaimer]=useState(false)

    let freeTime= ["9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00"];

   useEffect(()=>{
    console.log("Payment Details :",props.value.saloonDetails)
   })

   let getSlotDisable=(status)=>{
    setSlotConfirmed(status)
   }
   let existingBooking = useContext(OccupiedContext);
    return <>
    <section className="time-slot-template"> 
    
    {(!slotSelected.status)&&<div className="time-slot-select-template">
     <div className="time-slot-heading"> <h2 className="time-slot-heading-1">Pick A Time Slot</h2></div>
    <div className="time-slot-selector">
        {freeTime.map((slot,index)=>(
            <div key={index} className="my-time-slot" onClick={()=>{
                setSlotSelected({status:true,value:slot})
            }}>{slot}</div>
        ))}
    </div>
    </div>
        }
    

    { (slotSelected.status && !slotConfirmed && !twiceDisclaimer) && <div className="slot-select-confirm">
        <h3 className="slot-confirm-heading">Confirm Slot</h3>
        <div className="s-s-confirm-1">
            <p className="s-s-p-1">Please confirm your slot: </p>
            <p className="s-s-p-2">Are you sure you want an Appointment  with <span className="smart-span">{props.value.saloonDetails.saloonName}  </span> at <span className="smart-span" onClick={()=>{setSlotSelected({status:false,value:""})}}>{slotSelected.value} !</span></p>
            <div className="button-space">
                <button className="slot-select-confirm-btn" id="s-s-btn-confirm" onClick={()=>{
                    if(!existingBooking.alreadyOccupied){
                        setSlotConfirmed(true);
                    }
                    else{
                        setTwiceDisclaimer(true)
                    }
                    
                }}>Confirm</button>
                <button className="slot-select-confirm-btn" id="s-s-btn-cancel" onClick={()=>{
                    setSlotSelected({status:false,value:""});
                }} >Cancel</button>
             </div>
        </div>
    </div>
    }
    {(slotConfirmed)&&<AppointmentSet value={{feedBack:getSlotDisable,finalFeedBack:props.value.feedBack}}/>}
    {(twiceDisclaimer) && <div>There is already an appointment scheduled in the system, Try Cancelling the existing appointment</div>}
    </section>
    </>
}


function AppointmentSet(props){
    let tickRef = useRef(null)
    let messageBox= useRef(null)
    useEffect(()=>{
        let tl= gsap.timeline();
        tl.from(tickRef.current,{y:10,opacity:0.4,height:10,duration:1.5})
        // .to(tickRef.current,{y:399,opacity:1,height:350})

        setTimeout(()=>{
            props.value.finalFeedBack(true)
            let myTl= gsap.timeline();
            myTl.from(messageBox.current,{opacity:0})
            .to(messageBox.current,{opacity:1})
            // .to(messageBox.current,{opacity:0,duration:1,delay:3})
            .to(messageBox.current,{x:200,duration:2,delay:3.5})
            
        },1000)
    },[])

  
    return <>
    <section className="app-set-container">
        <div className="app-set-img--container" ref={tickRef}>
            <img  onClick={()=>{
                props.value.feedBack(false)
            }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfNd4Y_ZAjccvOQpKOwOTcJOo2lq68tpmsCiZRZqtoJeNH3UQ&s"/>
        </div>
        <div className="done-ack" ref={messageBox}>Booked Successfully</div>
    </section>
    </>
}

export default PreInvoice;

