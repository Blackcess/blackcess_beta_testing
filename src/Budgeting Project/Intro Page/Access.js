import React from 'react'
import "./Access.css"
import { FaKey } from "react-icons/fa";
import { useState } from 'react';
import correct_passAC from "./SecurityPassCode.js"
import { useEffect } from 'react'

 function Access(props) {
  let [lock,setLock]=useState(0)
  let [accessCode,setAccessCode]= useState("");
  let [emptyResponse,setEmptyResponse]=useState(false);
  let [responseSignal,setResponseSignal]=useState(false);
  let [accessCodeColor,setAccessCodeColor]=useState("blue")
  let handleChange=(event)=>{
    setAccessCode(event.target.value)
    event.preventDefault()
    console.log(event)
  }
  let handleSubmit=(event)=>{
    event.preventDefault();
    setLock(lock+1)
    //check if user entered anything
    if(accessCode===correct_passAC){
      setResponseSignal(true)
      setEmptyResponse(false)
    }
    else{
      if(accessCode===""){
        setEmptyResponse(true)
        // setResponseSignal(false)
      }
      if(accessCode!==correct_passAC && accessCode!==""){
        setResponseSignal(false)
        setEmptyResponse(false)
        setAccessCodeColor("crimson");
      }
    }
  }

  useEffect(()=>{
    if(lock){
    if(emptyResponse){
      console.log("You have to enter something in the field")
      props.value.feedBackFunction(false)
    }
    else{ 
   if(responseSignal){
    console.log("You cleared the security check")
    props.value.feedBackFunction(true)
   }
   else{
    console.log("You failed the security check")
    props.value.feedBackFunction(false)
   }
  }
}
  },[lock])
  


  return (
    <div className='access-component' id="access-components">
      <div className='firm-identifier'>
        <h2 className='my-name'>BlackLeaf Budgets</h2>
      </div>
      {/* Nearly Done */}
      <div className='access-body'>
        
        <div className='initial-credit'>
            <img className="icon1" src="https://cdna.iconscout.com/img/default.e71d14e.png?f=webp&w=400"></img>
            <h3 className='thomas-brand'>Thomas Technologies</h3>
        </div>
        {/* Sign in section to be completed */}
        <div className='signin-alert'>
                <span className='sign-in-head'>Sign in</span>
                <span className='sign-in-p'>to continue your budgeting</span> 
        </div>
          {/* Form section to be completed */}
          <form className='sign-in-form'>
            <input type='text' placeholder='Enter Access Code' id="access-code" required onChange={handleChange} style={{borderBottom:`1px solid ${accessCodeColor}`}}/>
            <div className='sign-in-assistance'>
            <span className='no-account'>No Account?</span>
            <span className='create-one'>Create one</span>
            <section className='create-one' id='access-denied'> Can't access your account?</section>
          </div>
          <button type='submit' className='access-submit-button' onClick={handleSubmit}>Next</button>
          </form>
        
      </div>
      <div className='help-options'>
        <section className='assistance'>
            <span className='option-key'><FaKey /> </span>
            <span className='assistance-details'>Sign in options</span>
        </section>
      </div>
    </div>
  )
}
export default Access
