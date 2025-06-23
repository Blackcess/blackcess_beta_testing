import { useEffect,useRef,useState } from "react";
import  "./AppointmentDetails.css"
import { IoIosSend } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import styled from "styled-components";
import { text } from "@cloudinary/url-gen/qualifiers/source";

function AppointmentDetails(props){
    let [customState,setCustomState]=useState(false);
    let [instructionCounter,setInstructionCounter]=useState(0)
    let [instruction,setInstruction]=useState("");
    let [cancellationInitiated,setCancellationCancellation]=useState(false);
    let [sendingLoading,setSendingLoading]=useState()
    
    let ratings =4;
    let ratingStars=[];
    let promoPrice=250;
    let customInstructions=["No pep-talk","No music","No inscence lights","Notify Allergy"];
    for(let i=0;i<ratings;i++){
        ratingStars[i]=1;
    }

    // <AiFillStar />
    useEffect(()=>{
       if(sendingLoading){
        setTimeout(()=>{
            setSendingLoading(false);
            setCustomState(false);
            setInstructionCounter(instructionCounter+1);
        },1500)
       }
    })
    let InstructionHeader= styled.h4`
        font-weight:400;
        margin-bottom:15px;
        position:relative;
        width:fit-content;
        

        &::after{
        content:"${()=>{if(instructionCounter){
            return instructionCounter;
        }
    else{
        return " "
    }}}";
         position: absolute;
        top: -5px;
        right: -10px;
        width: 10px;
        height: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 8px;
        color:crimson;
        }
    `

    let keys=["Time","Address","Appointment Id","Total"];
    let values=[];

    
    return<>
    { (!cancellationInitiated) && <section className="appointment-details-template">
        <div className="appo-go-back"> Home/Appointment_Details</div>
     <div className="hair-dresser-entity">
            <h3>{props.value.details.saloonName}</h3>
            <div className="ratings">
               {
                ratingStars.map((star,index)=>(
                    <span className="ratings=-star" key={index} ><AiFillStar/></span>
                ))
               }
            </div>
        </div>
        <div className="instructions-custom-client">
            <InstructionHeader>Instructions</InstructionHeader>
            <div className="custom-instructions">
                {customInstructions.map((instruction,index)=>(
                    <div className="individual-instruction" key={index}>{instruction}</div>
                ))}
            </div>
          { (!customState) &&  <button className="client-inst-button" onClick={()=>{
            setCustomState(true)
          }}>Customized Instructions</button> }
         {(customState && !sendingLoading) && <div className="client-instructions">
            <textarea className="client-data"
                value={instruction}
                onChange={(event)=>{
                    setInstruction(event.target.value)
                }}
                rows="5"
                cols="35"
                placeholder="Enter Instructions..."
                >
            </textarea>
            <button className="send-button" onClick={(event)=>{
                setSendingLoading(true)
            }}><span className="send-icon"><IoIosSend /></span>Send</button>
          </div>
         }
          {(sendingLoading )&&<div className="sending-loading"> Sending...</div>}
        </div>

        <div className="promotions-template">
         <div className="promotions-1">
            <div className="promo-icon"></div>
            <div className="promo-desc">Blackcess bonus points book up to <span style={{color:"green"}}>{promoPrice.toLocaleString("en-EN",{style:"currency",currency:"INR"})} </span></div>
         </div>
        </div>


        <div className="current-booking-template">
            <h4 className="current-booking-header">Current  Booking</h4>
            <div className="temp-book-temp">
                <TempBookHelper value={{type:"text",key:"Time",value:props.value.details.time,index:0}}/>
                <TempBookHelper value={{type:"text",key:"Address",value:props.value.details.location,index:1}}/>
                <TempBookHelper value={{type:"text",key:"Appointment ID",value:"----",index:2}}/>
                <TempBookHelper value={{type:"price",key:"Total",value:props.value.details.price,index:3}}/>
            </div>
        </div>

        <div className="cancellation-template">
            <h4 className="cancellation-header">Cancel Appointment</h4>
                <div className="cancellation-exp">
                    <div  className="cancellation-exp-0">Free cancellation within 5 minutes of booking otherwise charges may be encurred.</div>
                    <div  className="cancellation-exp-1"><TimerCircle/></div>
                </div>
            <button className="cancellation-btn" onClick={(event)=>{
                setCancellationCancellation(true);
            }}>Cancel Appointment</button>
       
        </div>
    </section>
    }
    {(cancellationInitiated)&&<section className="cancellation-area-section">
        
            <h2 className="cancel-head-1">Cancel Appointment</h2>
            <div className="confirm-cancellation-1">
                <div className="cancel-det">You are cancelling your current appointment</div>
                <div className="button-collection">
                    <button className="slot-select-confirm-btn" onClick={(event)=>{
                        props.value.cancellationFeedback(true)
                    }}>Confirm</button>
                    <button className="slot-select-confirm-btn" id="s-s-btn-cancel" onClick={()=>{
                        setCancellationCancellation(false);
                    }}>Back</button>
                </div>
            </div>

        </section>}
    
    </>
}


function TempBookHelper (props){
    useEffect(()=>{
        let values=document.querySelectorAll(".temp-0-value");
        if(props.value.type==="price"){
            values[props.value.index].style.color="green";
        }
    },[])

    return <>
    <section className="help-1-o-temp">
        <div className="temp-0-key">{props.value.key}</div>
        <div className="temp-0-value">{(props.value.type=="price")? props.value.value.toLocaleString("en-EN",{style:"currency",currency:"INR"}) :props.value.value}</div>
    </section>
    </>
}






const TimerCircle = () => {
  const totalDuration = 5 * 60 * 1000; // 5 minutes in milliseconds
  const [timeRemaining, setTimeRemaining] = useState(totalDuration);
  const [strokeDashoffset, setStrokeDashoffset] = useState(0);

  // Effect to handle the countdown
  useEffect(() => {
    const interval = 1000; // Update every second
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        const updatedTime = prevTime - interval;
        return updatedTime > 0 ? updatedTime : 0;
      });
    }, interval);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, []);

  // Calculate the stroke-dashoffset dynamically
  useEffect(() => {
    const totalCircumference = 2 * Math.PI * 45; // Assuming radius of 45 for the circle
    const offset = totalCircumference * (timeRemaining / totalDuration);
    setStrokeDashoffset(totalCircumference - offset);
  }, [timeRemaining]);

  const minutes = Math.floor(timeRemaining / 60000);
  const seconds = Math.floor((timeRemaining % 60000) / 1000);

  return (
    <div className="timer-container">
      <svg width="50" height="50" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="#ccc"
          strokeWidth="10"
        />
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="blue"
          strokeWidth="10"
          strokeDasharray={2 * Math.PI * 45}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: "stroke-dashoffset 1s linear" }}
        />
        <text
          x="60"
          y="65"
          textAnchor="middle"
          fontSize="20px"
          fontWeight="bold"
          fill="black"
        >
          {`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}
        </text>
      </svg>
    </div>
  );
};






export default AppointmentDetails;