import React from 'react'
import Access from './Access';
import {useState} from 'react'
import {useEffect} from 'react';
import "./SexcureDirective.css"
 function SecureDirective() {
    const images=[
      "https://api2.azbit.com/api/blob/b9f9aa54-614a-4885-9c43-a1ae4cf49579",
        "https://api2.azbit.com/api/blob/2201d3c9-3654-4ccc-a488-b62c69397d7d",
        "https://api2.azbit.com/api/blob/f0f0b10a-1498-4b71-be58-b8f10d52828a",
        "https://azbit.com/private_images/icons/neon/briefcase.svg",
        "https://azbit.com/private_images/icons/neon/check-award.svg",
        "https://azbit.com/private_images/icons/neon/users.svg",
        "https://azbit.com/private_images/partners/bitcoin-dark.svg",
        "https://azbit.com/private_images/partners/bitcoincash-dark.svg",
        "https://azbit.com/private_images/partners/fxcash-dark.svg",
        "https://api2.azbit.com/api/blob/d37557a6-8210-4cdd-8b6f-e49de86a53d8",
        "https://api2.azbit.com/api/blob/b6ebdeb8-f151-4e72-bb5b-e5be52a87f14",
        "https://azbit.com/private_images/icons/neon/dark/headphones.svg",
        "https://azbit.com/images/markets/down.svg",
        "https://azbit.com/images/markets/down.svg",
    ];
    let [AccessComponentFeedBack,setAccessComponentFeedBack]= useState(" ");
   useEffect(()=>{
    let enter = document.querySelector("#component-body");
    if(AccessComponentFeedBack=="bad"){
      enter.classList.add("no-display");
      enter.classList.remove("component-body");
    }
    
   }) //dependany-list)
    // let [AccessComponentFeedBack, setAccessComponentFeedBack]= useState(" ");
    function fetchingAccessFeedBack(AccessStatus){
      setAccessComponentFeedBack(AccessStatus);
    }
    function testing(){
      if(AccessComponentFeedBack=="bad"){
        alert("Errors has been received ")
      }else{
        if(AccessComponentFeedBack==="good"){
          alert("No Errors Received")
        }
      }
    }
  return (
    <>
    <div className='component-body' id="component-body" >
    { <Access backGroundCheck={fetchingAccessFeedBack} />}
    </div>
     
      </>
  )
}
export default SecureDirective;
