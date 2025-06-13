//create a hair dresser class

class HairDresser{
    static NumberOfHairDressers=0;
    constructor(fullName){
        this.name=fullName;
        this.details={};
        HairDresser.NumberOfHairDressers++
    }
    initialise(email,phone,companyName,locations,haircuts){
        // this.details.location=locations,
        this.details.email_address=email;
        this.details.phone=phone;
        this.details.companyName=companyName;
       
        this.details.hairCuts=haircuts
    }
    //hair dresser should specify his/her own schedule--pending feature
    //hair dresser should specify his/her own pricing criteria


}


//create a linked list that keeps track of these hairdressers
class ListNode{
    constructor(hairDresser){
        this.hairDresser=hairDresser;    //of type HairDresser
        this.next=null;
        this.prev=null;
        this.status="waiting";
    }
}
class HairDresserList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=null;
    }
    insert(hairDresser){
        let temp = new ListNode(hairDresser)
        if(!this.length){
            this.head=temp;
            this.tail=this.head;
            this.length++;
            return;
        }
        this.tail.next=temp;
        temp.prev=this.tail;
        this.tail=temp;
        this.length++;
        
    }
    search(hairDresserName){
        let temp=this.head;
        while(temp.hairDresser.name!==hairDresserName){
            temp= temp.next;
            if(temp===null){
                break;
            }
        }
        if(temp===null){
            return null;
        }
        return temp;
    }
    delete(hairDresserName){
        //search through the list to find the desired hair dresser and then delete them
        if(!this.length){
            return;
        }
        let temp = this.search(hairDresserName);
        if(!temp){
            return null;
        }
        let current=this.head;
        while(current!==temp){
            current=current.next;
        }
        let prev= current.prev;
        this.length--
        //what if current is the last element
        if(current.next===null){
            prev.next=null;
        }
        else{ 
        prev.next = current.next;
        current.next.prev=prev;
        
        }
        current.prev=null;
        current.next=null;
        return current;
    }
    //search a hairdresser by any criteria;
   

}

//create different hairDresser Profiles:

const hairDresserDataBase=[{
    email:"tilderness42324@gmail.com",
    phone:"+91-32435364",
    fullName:"Tilder Hayenes",
    companyName:"Head Masters",
    location:"Devine Paveleo Sante Majra",
    hairCuts:["mild faint liner","English Cut","James Abbot English"]
},
    {
    email:"erenuld@gmail.com",
    phone:"+91-5463783",
    fullName:"Ryan Renoldes",
    companyName:"Clipper Toastes",
    location:"Devine Paveleo Sante Majra",
    hairCuts:["mild faint liner","English Cut","James Abbot English"]
},
    {
    email:"moolungu@gmail.com",
    phone:"+91-63467353",
    fullName:"Xylem Mutasa",
    location:"Devine Paveleo Sante Majra",
    hairCuts:["mild faint liner","English Cut","James Abbot English"]
},
    {
    email:"jokers4234@gmail.com",
    phone:"+91-23425623",
    fullName:"Martin Joker",
    companyName:"Joker's Palace",
    location:"Devine Paveleo Sante Majra",
    hairCuts:["mild faint liner","English Cut","James Abbot English"]
},
    {
    email:"melborane@gmail.com",
    phone:"+91-5362453",
    fullName:"Andrew Pieres",
    location:"Devine Paveleo Sante Majra",
    hairCuts:["mild faint liner","English Cut","James Abbot English"]
   
},
    {
    email:"mokore4362@gmail.com",
    phone:"+91-34524367",
    fullName:"James Tokiens",
    companyName:"Tokien Machienes",
    location:"Devine Paveleo Sante Majra",
    hairCuts:["mild faint liner","English Cut","James Abbot English"],
    image:"https://media.istockphoto.com/id/1361732125/photo/beauty-portrait-of-african-american-girl-with-afro-hair.jpg?s=1024x1024&w=is&k=20&c=mWe1FoIGqOovTuUfbe2q1_KnGvL44k2nSM1dH8EBWgE="
},
    {
    email:"thomaskazonda@gmail.com",
    phone:"+91-536723456",
    fullName:"Thomas Kazonda",
    companyName:"Black Leaf",
    location:"Devine Paveleo Sante Majra",
    hairCuts:["mild faint liner","English Cut","James Abbot English"]
},
];
//create a hairDresserList 
let customHairDresser_list=new HairDresserList();
for(let i=0;i<hairDresserDataBase.length;i++){
    var dresser= new HairDresser(hairDresserDataBase[i].fullName);
    //now initialise the dresser
    dresser.initialise(hairDresserDataBase[i].email,hairDresserDataBase[i].phone,hairDresserDataBase[i].companyName,hairDresserDataBase[i].location,hairDresserDataBase[i].hairCuts);
    customHairDresser_list.insert(dresser);
}

console.log(customHairDresser_list)


export {customHairDresser_list,hairDresserDataBase}

