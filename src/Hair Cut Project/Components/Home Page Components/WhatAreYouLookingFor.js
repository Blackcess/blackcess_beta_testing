import { useContext, useEffect, useState } from "react";
import "./WhatAreYouLookingFor.css"
import { ScreenWidthData } from "../Hair Dresser/HairDresser_Profile";
import { IoPricetagOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { CgNametag } from "react-icons/cg";
import { clients_womenHairDressers } from "../../WomenDeals/DealTemplate";
import { GiAmpleDress } from "react-icons/gi";
import { femaleLookUpTable } from "../Look Up Tables (Only For Design Purposes)/WomenQuickLookUpTable";
import { render } from "@testing-library/react";


let key_id_tracker=0;

function RootComponent(){
    let forwadedData = useContext(ScreenWidthData)
    let [w_dealId,setW_dealId]=useState(-1);
    let [requestReleaseId,setRequestReleaseId]=useState(false);

  
    
    

    let handleServiceSelect=(event)=>{
        event.preventDefault();
        let temp = event.target.id;
        setRequestReleaseId(true)
        // console.log(w_dealId);
    
        if(temp === "female-profile"){
          let id = parseInt(event.target.parentNode.parentNode.children[4].textContent)
           forwadedData.feedBack("hairDresserProfile",id);
            return;
        }
        if(temp === "female-hair-style-samples"){
          
           let id= parseInt(event.target.parentNode.children[0].children[4].textContent)
           let renderedImage = event.target.parentNode.children[1].style.backgroundImage;
              forwadedData.feedBack("sampleImages",id,{shownImage:renderedImage});
            return;
        }
        if(temp === "go-to-payment"){
            
            let contentArr= event.target.parentNode.parentNode.children;
            let contentObj={};
           let recquiredId = parseInt(contentArr[4].textContent);
           forwadedData.feedBack("payment",recquiredId);
        //    console.log(femaleLookUpTable)
       
        
          
           
            
            return;
        }

        setRequestReleaseId(false)
    }
    
  

    //recquired images and data
    // 1. women hair styles,   https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1678864013225-bfc1de.jpeg
    // 2. Women Braids
    
    
    return <>
   <section className="looking-root-component-template">
    <div className="looking-child-component-1">
        <ChildComponent1_WomenSection value={{clickFeedBack:forwadedData.feedBack}}/>
    </div>
    <div className="looking-child-component-2">
      <div onClick={handleServiceSelect}>  <WomenDeals value={{saloonName:clients_womenHairDressers[0].getSaloonName(),profileImage:clients_womenHairDressers[0].getProfileImage(),services:clients_womenHairDressers[0].getServices()[0],location:"Kharar",index:0}} /> </div>
      <div onClick={handleServiceSelect}>  <WomenDeals value={{saloonName:clients_womenHairDressers[1].getSaloonName(),profileImage:clients_womenHairDressers[1].getProfileImage(),services:clients_womenHairDressers[1].getServices()[2],location:"Landran",index:1}} /> </div>
       <div onClick={handleServiceSelect}> <WomenDeals value={{saloonName:clients_womenHairDressers[0].getSaloonName(),profileImage:clients_womenHairDressers[0].getProfileImage(),services:clients_womenHairDressers[0].getServices()[2],location:"Kharar",index:2}} /> </div>
      <div onClick={handleServiceSelect}>  <WomenDeals value={{saloonName:clients_womenHairDressers[1].getSaloonName(),profileImage:clients_womenHairDressers[1].getProfileImage(),services:clients_womenHairDressers[1].getServices()[0],location:"Landran",index:3}} /> </div>
      <div onClick={handleServiceSelect}>  <WomenDeals value={{saloonName:clients_womenHairDressers[0].getSaloonName(),profileImage:clients_womenHairDressers[0].getProfileImage(),services:clients_womenHairDressers[0].getServices()[1],location:"Kharar",index:4}} /> </div>
      <div onClick={handleServiceSelect}>  <WomenDeals value={{saloonName:clients_womenHairDressers[1].getSaloonName(),profileImage:clients_womenHairDressers[1].getProfileImage(),services:clients_womenHairDressers[1].getServices()[1],location:"Landran",index:5}} /> </div>

        </div>
    <div className="looking-child-component-3">.</div>
   </section>
    </>
}

function ChildComponent1_WomenSection(props){
    //state to keep track of the current image
    let [currentImage,setCurrentImage]=useState(0)

    let womenServices=["Women Hair Style","Women Braids","Take The Whole Space","Women Spa","Women Hair Dye"];
    let womenProducts=["Hair Dryer","Braids","Hair Shampoo","Deep Moisturising masquee","Combs"];
    let hairDryers =["data:image/webp;base64,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","https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRmYtRErTPlK-_aqk8FlwM7pcAlzHw-6XoB8rzTTdytLPo_yESDgGVnt1NRaj82X1U5-sCq5jmeDUmwGYvW53CQe_h3i4lHvDJDzk5Dn_9LtoLsfxPNWYCa6TVyfUNNr7Bnjv3FFw&usqp=CAc","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT82kzXhTqwuLqBmtn29zXhfvbtq-GHKsXIUTdk_3seV4ZrUQ"]
    let braids=["https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRZTzsnpkDWtaO8bm8v30rBU60CLCb2xABuEGUormAac8moQVaB94WFIe0G-4xT8B_p49nl0w-Z5fiwbEGmnAXJxaBjZVvORVmZQJ3W1bqSjD_K5g8KxEEj","https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTBePQTA7AAPrW0SasdDwrxdQYW5nMtN2ye64R6TIwtUzPm8-UcFcHhKsLo0DgQVRhjt2nsKV2Mtuhi--jNMekNu6FmR9tPcwsh2PoDqhWhlbWDzreTFQ","https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQmydBonrFWRTAMuOhYkhARA8T4iB9GtFUOwacswi6FcCe7s1eqZX3bCyFv0LCSBQh7w6AQpYOmJPMtqiB9AeMpYJM2CTaaj70eG5YuMzUYW3jXVmydP0U"];
    let shampoos=["https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRWQ_KaHGkSz6OoRS5xvkHMojP-Es9OT_J5o88IVfW0YTyhAaB1J0dfQA8uiWaX4HWA-iA6j1NYwmNPOZ261YAioAHeRG8fnAmbqgixS5b9o67wckuPJXpQ3w","https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQn0bY-vDO2vOwnXSxP0iLBMdgeTu1cXxVNzIw5TfI4WfvzxW44DADEZSRcycBrIdoNa7rH5z-xlPuys-87Mp7TeSOrdmFJ9GdvI1r1DkrK9bmCV_ND1qM8BA","https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS-yL_ML2kaeNO967qEv4dA3nB5Sl74prKk8Ec_cN5cRrpdzmQm_p7R2wcgxMoW7ESRgdCKVM2eiFFWi-k2IKv9peFNdtSfU17bu7a8smr0GUJexksiqt30Tw"];
    
    let combinedProducts=[];
    function fillBuffer(array,combinedProducts){
        let bufferLength= combinedProducts.length;
        for(let i=0;i<array.length;i++){
            combinedProducts[bufferLength+i]= array[i];
        }

    }
    function fillCombined(hairDryers,braids,shampoos){
       for(let j=0;j<arguments.length;j++){
        fillBuffer(arguments[j],combinedProducts)
       }
    }
    fillCombined(hairDryers,braids,shampoos)
    // console.log("Combined Thing is: ",combinedProducts)

    function imageChanger(){
        let i=0;
        setInterval(()=>{
            let j=Math.floor((Math.random()*100))%(combinedProducts.length-1)
            // console.log(j)
            setCurrentImage(j);
        },7000)
    }
    imageChanger();
    
    
    return <>
    <section className="component1-womenSection-container-mobile-screen">
        <div className="women-section-services-mobile-screen">
            {
                womenServices.map((service)=>(
                    <div key={Math.random()*8000} className="women-section-single-service-mobile-screen" onClick={()=>{
                        props.value.clickFeedBack("generalservices",-1,{content:service,status:true})
                    }}
                    >{service}</div>
                ))
            }
        </div>
        <div className="women-section-products-mobile-screen">
           {/* Gonna have to wait */}
            
        </div>
    </section>
    </>
}

function WomenDeals(props){
    let [idTracker,setIdTracker]=useState(-1);

    useEffect(()=>{
         let obj={};
    key_id_tracker=(key_id_tracker+1)
    obj.keyId=key_id_tracker;
    obj.saloonName=props.value.saloonName;
    obj.service=props.value.services.serviceName;
    obj.price=props.value.services.price;
    obj.location= props.value.location;
    femaleLookUpTable.push(obj)
    setIdTracker(obj.keyId);
    },[])

    let services= props.value.services;

    useEffect(()=>{
        let sample= document.querySelectorAll(".women-deals-sample-image-mobile-screen")


        sample[props.value.index].style.background=`url(${props.value.services.serviceImage})`
        sample[props.value.index].style.backgroundPosition="center"
        sample[props.value.index].style.backgroundSize="cover"
    })

    return<>
    <section className="women-deals-container-mobile-screen">
        <div className="women-deal-details">
            <WomenDeals_Details value={{isProfile:true,content:props.value.saloonName,profImg:props.value.profileImage,saloonDetails:services,index:props.value.index}}/>
            <WomenDeals_Details value={{isService:true,content:props.value.services.serviceName,icon:<CgNametag />}}/>
            <WomenDeals_Details value={{isPrice:true,content:props.value.services.price,icon:<IoPricetagOutline />}}/>
            <WomenDeals_Details value={{isLocation:true,content:props.value.location,icon:<FaLocationDot />}}/>
            <span className="id-tracker-disguise">{idTracker}</span>
           <div className="book-app" id="go-to-payment-container"> <button className="women-deal-book-app-btn" id="go-to-payment">Book Appointment</button></div>
        </div>
        <div className="women-deals-sample-image-mobile-screen" id="female-hair-style-samples"> 
            
        </div>

    </section>
    </>
}

function WomenDeals_Details(props){
    let [currentState,setCurrentState]=useState(0);
    let [sync,setSync]=useState(0)
    let [now,setNow]=useState(false);
    let women_first_className="";
    let women_first_id="";

    useEffect(()=>{
        let c_state= Object.keys(props.value);
        for(let i=0;i<c_state.length;i++){
            if(c_state[i]=="isProfile"){
                setCurrentState(1);
                setSync(sync+1)
                return;
            }
            if(c_state[i]=="isService"){ 
                setCurrentState(2);
                setSync(sync+1)
                return;
            }
            if(c_state[i]=="isPrice"){
                setCurrentState(3);
                setSync(sync+1)
                return;
            }
            if(c_state[i]=="isLocation"){
                setCurrentState(4);
                setSync(sync+1)
                return;
            }
            
        }
        setCurrentState(-1);
        
    },[])


    
    if(currentState==1){
        women_first_className="women-prof-img";
        women_first_id="female-profile"
        
    }
    else{
        women_first_className="women-prof-icon"
       women_first_id="female-icons"
    }

    useEffect(()=>{
        if(currentState==1){
            let saloonDP = document.querySelectorAll(".women-prof-img");
             saloonDP[props.value.index].style.background=`url(${props.value.profImg})`
             saloonDP[props.value.index].style.backgroundSize="cover"
             saloonDP[props.value.index].style.backgroundPosition="center"
            // console.log(saloonDP)
        }
        
        
    })

    return<>
    <section className="women-details-cnt-mobile-screen">
        <div className={women_first_className} id={women_first_id}>
        {  (!currentState==0) &&<span className="women-icon-container">{props.value.icon}</span>}

        </div>
        {(currentState==1) &&<div id="female-profile" className="women-categ" style={{fontWeight:500,fontSize:"14px"}}>{props.value.content}</div>}
        {(currentState==2) &&<div className="women-categ" style={{fontWeight:300,fontSize:"12px"}} >{props.value.content}</div>}
        {(currentState==3) &&<div className="women-categ" style={{color:"green", fontWeight:600}} >{props.value.content.toLocaleString("en-EN",{style:"currency",currency:"INR"})}</div>}
        {(currentState==4) &&<div className="women-categ" style={{fontWeight:500}}>{props.value.content}</div>}
    </section>
    </>
}




export default RootComponent;
export {WomenDeals_Details}