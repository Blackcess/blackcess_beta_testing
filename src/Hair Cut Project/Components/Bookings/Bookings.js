import "./Bookings.css"
import { femaleLookUpTable } from "../Look Up Tables (Only For Design Purposes)/WomenQuickLookUpTable";
import { clients_womenHairDressers } from "../../WomenDeals/DealTemplate";
import { useState,useEffect,useRef,useContext,createContext } from "react";
// import { rootChildClose,greenAck } from "../Hair Dresser/HairDresser_Profile";
import PreInvoice from "../Payment Proccessing/PreInvoice";





let dateStructures=[];

class BookingStructure{

    constructor(id){
        this.booking_id=id;
        this.saloon={name:"Blackcess Proffessional",img:"data:image/jpeg;base64,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"};
        this.price={};
        this.time={};
        this.payment_method={direct:false,indirect:true};
        this.blackcess_bonus=100;
        this.service={};
        this.bookingStatus="";
        this.generalDate={};
    }
    init_saloon_details(name,profPic){
        if(name!==""){
             this.saloon.name=name;
        }
        if(profPic!==""){
             this.saloon.img=profPic;
        }
    }
    init_price(actual){
        this.price.actual_price=actual;
        this.price.blackecess_bonus= this.blackcess_bonus;
        this.price.total=(actual-this.blackcess_bonus);
    }
    init_time(dateObj){
        let current_date = new Date();
        let day= current_date.getDate();
        let month= current_date.getMonth()+1;
        let year = current_date.getFullYear();
        let fullDate = current_date.toLocaleDateString("fr-FR");
        this.generalDate.dateObj=dateObj;
         if(dateObj.toLocaleDateString("fr-FR")===fullDate){
            this.time.date="Today";
         }
         else{
            this.time.date=dateObj.toLocaleDateString("fr-FR");
         }
         this.time.time=dateObj.toLocaleTimeString();
    }
    init_service(name,img){
        this.service.serviceName=name;
        if(img!==undefined){
            this.service.sample=img;
        }
        else{
            this.service.sample="";
        }
    }
    init_bookingStatus(status){
        if(status===""){
            this.bookingStatus="completed";
        }
        else{
            this.bookingStatus=status;
        }
    }
}



function MyBookings(props){

    let [bookingSelect,setBookingSelect]=useState(false);
    // let myDate = new Date(2023,11,25);
    // myDate.setHours(10,14,23);
    // console.log(myDate.toLocaleDateString("fr-FR"), myDate.toLocaleTimeString())
    // console.log(props.value)
    let year = 2025;
    let months= [0,1,2,3,4,5];
    let days=[];
    let hours=[9,10,11,12,1,2,3,4,5,6,7];
    let mins=[];
    let sec=[];
    let saloons =["Better Day Saloon","Sharon Saloon"];
    for(let i=0;i<28;i++){
        days[i]=i+1;
    }
    for(let i=0;i<=60;i++){
        mins[i]=i;
        sec[i]=i;
    }
    
    for(let i=0;i<=3;i++){
        let temp ={};
        temp.id=i;
        temp.day=days[Math.floor((Math.random() * 100))% days.length];
        temp.month=months[Math.floor((Math.random() * 100)) % months.length];
        temp.year=year;
        let myDate = new Date(2025,temp.month,temp.day);
        myDate.setHours(hours[Math.floor((Math.random() * 100))%hours.length],mins[Math.floor((Math.random() * 100))%mins.length],sec[Math.floor((Math.random() * 100))%sec.length])
        temp.fullDate=myDate.toLocaleDateString("fr-FR");
        temp.time=myDate.toLocaleTimeString();
       
        let myBookingStructure= new BookingStructure(temp.id);
        let fromDataBase= (femaleLookUpTable[props.value.keyId])
        // console.log(fromDataBase)
        var hairD = undefined;
        for(let i=0;i<clients_womenHairDressers.length;i++){
            if(fromDataBase.saloonName===clients_womenHairDressers[i].getSaloonName()){
                hairD=clients_womenHairDressers[i];
                break;
            }
        }
        myBookingStructure.init_saloon_details(hairD.getSaloonName(),hairD.getProfileImage());
        myBookingStructure.init_price(hairD.getServices().price)
        myBookingStructure.init_service(hairD.getServices().serviceName,hairD.getServices().serviceImage)
        myBookingStructure.init_time(myDate);
        myBookingStructure.init_bookingStatus("Completed");
     dateStructures.push(myBookingStructure);

    }
    // console.log(dateStructures)
    // console.log(clients_womenHairDressers)

    //sort bookings in order by dates;
    function  sort(arr){
    for(let i=0;i<arr.length;i++){
        let smallest = arr[i];
        for(let j=i+1;j<arr.length;j++){
           if(arr[j].generalDate.dateObj.getMonth()+1<smallest.generalDate.dateObj.getMonth()+1){
            let temp =  arr[j];
            arr[j]=arr[i];
            arr[i]=temp;
            smallest=arr[i]        
           }
           else{
           if(arr[j].generalDate.dateObj.getMonth()+1===smallest.generalDate.dateObj.getMonth()+1){
                if(arr[j].generalDate.dateObj.getDate()<smallest.generalDate.dateObj.getDate()){
                    let temp =  arr[j];
            arr[j]=arr[i];
            arr[i]=temp;
            smallest=arr[i]    
                }
           }
        }
        }
        // console.log(arr[i].generalDate.dateObj.getMonth()+1)
    }
    
 }

    sort(dateStructures);

    let getSelectDataFromFirstBooking=(data)=>{
        setBookingSelect(data);
    }




    
    return <>
    <section className="overall-booking">
    {(!bookingSelect) && <div className="my-bookings-template">
        {/* <div className="no-booking-time">No Bookings Recorded</div> */}
        <div className="component-heading"> <h2>Booking History</h2></div>
        <div className="booking-first-section">
        {
         (dateStructures.length) ?  dateStructures.map((bookingSystem,index)=>[
              <div className="book-temp" key={index}>
                 <FirstBooking value={{bookingSystem:bookingSystem,index:index,feedBack:getSelectDataFromFirstBooking}}/>
                 </div>
            ])
            :
            <div className="no-recorded-history"><h3>No History Yet</h3></div>
        }
        </div>
    </div>
  }
  {(bookingSelect) &&
    <div className="booking-level-2">
        {/* <h1>Into The Next Layer</h1> */}
        <PreInvoice value={{keyId:3,distressCall:getSelectDataFromFirstBooking,greenDotAck:props.value.greenDotAck,deployedFrom:"booking",alreadyOccupied:props.value.alreadyOccupied}}/>
    </div>
  }
    </section>
    </>
}

function FirstBooking(props){

    return<>
    <section className="first-booking-template" >
        <div className="booking-saloon-name">{props.value.bookingSystem.saloon.name} <span className="booking-status"><b id="p-period-bold">.</b>{props.value.bookingSystem.bookingStatus}</span></div>
        <div className="booking-time-slot"> {props.value.bookingSystem.time.date}-{props.value.bookingSystem.time.time}</div>
        <button className="history-rebook"  onClick={()=>{
        props.value.feedBack(true)
    }}>Rebook</button>
    </section>
    </>
}

export default MyBookings;
export {dateStructures}