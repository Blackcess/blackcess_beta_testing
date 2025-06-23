class W_HarstlyeManager {
    static counter = 0;
    constructor(name){
        W_HarstlyeManager.counter++
        this.name= name;
        this.id = W_HarstlyeManager.counter;
        this.samples=[];
    }
    addSample(desc,img){
        let temp ={};
        temp.desc= desc;
        temp.img=img;
        this.samples.push(temp)
    }
    
}


let buffer =[];
let hc=["Hot Braids","Blond Twist Out","Defined Short Twist Out","Box Braids Bob with Curls","Curly Bob Braids with Corn rows","Half Up Kinky Twist Bob Braids",
    "Natural Black","Butterfly Faux Loc Bob Braids","Auburn Bohemian Bob", "Jumbo Braids With Curly Ends",
    "Fulani Bob Braids","Half up Spring Twist Bob","Spring Twist Bulk Human Hair Loose Twists","Koroba Braids Bob",
    "Criss cross Kinky Twist Braids Bob", "Mixed colored Bob Braids"
];
let samples=[
   [  {desc:"",img:"https://cache.hotbraids.com/7/9/b/3bd37b54cabb7ebec343ad39fa6d733e.jpg"} ],
   [  {desc:"",img:"https://cache.hotbraids.com/3/e/6/10f4b22a735461d42348698b7b61770e.jpg"} ],
   [  {desc:"",img:"https://image.hotbraids.com/upload/assets/20250110/17365084518045.jpeg"} ],
   [  {desc:"",img:"https://image.hotbraids.com/upload/assets/20250110/17365084519300.jpeg"} ],
   [  {desc:"",img:"https://image.hotbraids.com/upload/assets/20250110/17365084514698.jpeg"} ],
   [  {desc:"",img:"https://image.hotbraids.com/upload/assets/20250110/17365084515314.jpeg"} ],
   [  {desc:"",img:"https://cache.hotbraids.com/c/6/5/0080e1eba2a814a0fc5aadf643ca3a87.jpg"} ],
   [  {desc:"",img:"https://image.hotbraids.com/upload/assets/20250110/17365084514453.jpeg"} ],
   [  {desc:"",img:"https://image.hotbraids.com/upload/assets/20250110/17365084513762.jpeg"} ],
   [  {desc:"",img:"https://image.hotbraids.com/upload/assets/20250110/17365084524097.jpeg"} ],
   [  {desc:"",img:"https://image.hotbraids.com/upload/assets/20250110/17365084518450.jpeg"} ],
   [  {desc:"",img:"https://image.hotbraids.com/upload/assets/20250110/17365084514826.jpeg"} ],
   [  {desc:"",img:"https://cache.hotbraids.com/e/3/4/db3e6e1e1895796d5eb95164980f7efb.jpg"} ],
   [  {desc:"",img:"https://image.hotbraids.com/upload/assets/20250110/17365084517471.jpeg"} ],
   [  {desc:"",img:"https://image.hotbraids.com/upload/assets/20250110/173650845291.jpeg"} ],
   [  {desc:"",img:"https://image.hotbraids.com/upload/assets/20250110/17365084516100.jpeg" }],
];

for(let i=0;i<hc.length;i++){
    let temp = new W_HarstlyeManager(`${hc[i]}`);
    for(let j=0;j<samples[i].length;j++){
        temp.addSample(samples[i][j].desc,samples[i][j].img);
    }
    buffer.push(temp);
    // console.log("Samples length is ",samples.length, "HC LENGRTHl: ",hc.length)
}
console.log(buffer)

