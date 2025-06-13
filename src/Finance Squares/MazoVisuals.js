import { useEffect,useState,useRef} from "react";
import "./Sage Intacct/MazoVisuals.css"
import styled from "styled-components";
import { sort } from "../PositionAllocationTable";
import { TfiTarget } from "react-icons/tfi";


class GraphBar{
    constructor(identifier){
        //default bar properties
        this.barLength=0;
        this.barHeight=50;
        this.barWidth=20;
        this.barColor="black";
        this.barValue=0;
        this.barIdentifier= identifier;
    }
    addValue(value){
        this.barValue=value;
    }
    addHeight(height){
        this.barHeight=height;
    }
    addWidth(width){
        this.barWidth=width;
    }
    addColor(color){
        this.barColor=color;
    }
    changeIdentifier(newIdentifier){
        this.barIdentifier=newIdentifier;
    }
    barInitialise(value,height,width,color){
        this.addColor(color)
        this.addHeight(height);
        this.addWidth(width);
        this.addValue(value);
        return  {value:value,
                 height:height,
                 width:width,
                 color:color
        }
        
    }
}



function MazoVisuals(){
    let [synchronousState,setSynchronousState]=useState(0)
    let [graphScale,setGraphScale]=useState(0)
    let [yaxisOffset,setYaxisOffet]=useState(0);
    let days =["Monday","Tuesday","Wednesday","Thursday","Friday"];
    let  values=[14,34,66,10,14];
    let yAxisValues=[];
    let maximum = (array)=>{
        let biggets = array[0];
        for(let i=1;i<array.length;i++){
            if(array[i]>biggets){
                biggets= array[i];
            }
        }
        return biggets;
} 
   //added intel 
    let scaleFactor = (300)/maximum(values);
    console.log("tHE sCALE fACTOR iS  ",scaleFactor)
    //Creating a copy of the values for the ppurpose of the y axis computation
    for(let i=0;i<=10;i++){
        if(i===0){
            yAxisValues[i]=0;
        }
        else{
        yAxisValues[i]= Math.floor(i * (maximum(values)/10));
        }
    }
    // for(let i=0;i<values.length+1;i++){
    //     if(i===0){
    //         yAxisValues[i]=0;
    //     }
    //     else{
    //     yAxisValues[i]= values[i-1];
    //     }
    // }


    // for(let i=0; i<yAxisValues.length;i++){
    //     let smallest = yAxisValues[i];
    //     for(let j=i+1;j<yAxisValues.length;j++){
    //         if(yAxisValues[j]<yAxisValues[smallest]){
    //             let temp= smallest;
    //             smallest = yAxisValues[j]
    //             yAxisValues[j]=temp;
    //         }
    //     }
    // }
    sort (yAxisValues)

    // console.log("The sorted array now is: ",yAxisValues)
    let exhihibitARef= useRef(null);
    let yAxisRef=useRef(null)

    let [bars_underscore,setBars_Underscore]=useState([]);
    // let bars_underscore=[];



    useEffect(()=>{
        setSynchronousState(synchronousState+1);
        if(!synchronousState){ 
            for(let i=0;i<days.length;i++){
                let temp = new GraphBar(days[i]);
                temp.addHeight(values[i]*scaleFactor);
                let obj = {};
                obj.bar=temp;
                obj.index=i;
                // bars_underscore.push(obj);
                if(bars_underscore.length<=days.length){
                    setBars_Underscore(prevObj=>[...prevObj,obj]);
                }
                else{
                    setBars_Underscore(prevObj=>[...prevObj])
                }
            }
        }
        
    },[])


    useEffect(()=>{
        console.log("Introducing Exhibit A: ",exhihibitARef.current.offsetHeight)
        if(exhihibitARef.current){
            const compStyles = window.getComputedStyle(exhihibitARef.current)
            let compStylePaddingTop= (parseInt(compStyles.paddingTop.split("p")[0]))
            let compStylePaddingLeft =(parseInt(compStyles.paddingLeft.split("p")[0]))
            let elementHeight = exhihibitARef.current.offsetHeight;
            let scaleValue = Math.floor((elementHeight-compStylePaddingTop)/yAxisValues.length)
            console.log("Proposed Scale is : ",scaleValue)
            setGraphScale(scaleValue)
        }
    })

    useEffect(()=>{
        // console.log('   Introducing yAxis Ref :', yAxisRef.current.offsetLeft)
        setYaxisOffet(yAxisRef.current.offsetLeft);
    })



    
   
    let YTranslation = styled.div`
    transform:translateX(-${()=>{return (yaxisOffset+12)}}px);
    // transform:translateY(10px);
    `
    //declare a useRef hook for the bar-wrapper
    let barWrapperRef = useRef(null);

    //create a state to determine the cursor p[osition
    let [pageX,setPageX] = useState(0);
    let [pageY,setPageY]=useState(0);
    useEffect(()=>{
        let barWrapper = document.querySelectorAll(".bar-wrapper");
        //get the whole graph
        let globalScope = document.querySelector(".analysis-center-template");
        let targetCursor = document.querySelector(".target-cursor")
        if(barWrapperRef.current){
            // console.log(window.getComputedStyle(barWrapperRef.current))
            // console.log(barWrapperRef.current.offsetLeft)
            console.log("Globakl Scope ",targetCursor)
        }
       
    })

    //function to handle events
    let cursorTar= useRef(null);
    let moveCursor= (x,y,cursor)=>{
        cursor.style.left=`${x}px`
        cursor.style.top=`${y}px`
    }
    let handleScopeMove = (event)=>{
        moveCursor(event.pageX,(event.pageY-20),cursorTar.current);
        console.log("PageX: ",event.pageX);
        console.log("PageY: ",event.pageY);
        console.log(cursorTar.current.offsetLeft)
        setPageX(event.pageX)
        setPageY(event.pageY)
    }






    return <>
    <section className="analysis-center-template" >
      
        {/* <div className="graph-analyser"> */}
        
        <div ref={exhihibitARef} className="analysis-exhibit-a" onMouseMove={handleScopeMove}>
         <span className="target-cursor" ref={cursorTar}><TfiTarget /> </span>
         <div className="analysis-exhibit-a-b">
            
        {/* <div className="analysis-bar-1  default-bar"></div>
        <div className="analysis-bar-2 default-bar"></div>
        <div className="analysis-bar-3 default-bar"></div>
        <div className="analysis-bar-4 default-bar"></div>
        <div className="analysis-bar-5 default-bar"></div>
        <div className="analysis-bar-6 default-bar"></div>
        <div className="analysis-bar-7 default-bar"></div> */}


            {/* <IndividualBar/>
            <IndividualBar/>
            <IndividualBar/>
            <IndividualBar/>
            <IndividualBar/>
            <IndividualBar/>
            <IndividualBar/>
            <IndividualBar/> */}


<YTranslation ref ={yAxisRef} className="y-axis-scale-labels">
        {
            yAxisValues.map((value)=>(
                <span className="y-axis-values">{value}</span>
            ))
        }
    </YTranslation>

            {
                bars_underscore.map((barEL)=>( 
                    <span ref={barWrapperRef} className="bar-wrapper"> 
                <IndividualBar  value={{bar:barEL,barDetails:barWrapperRef}}/>
                </span>
                ))
            }

</div>
        </div>
        {/* </div> */}
    </section>
    </>
}
function IndividualBar(props){

    let [nav_lineStatus,setNav_lineStatus]= useState(false);

    //create a styled bar

    let StyledBar = styled.div`
    height:${()=>{return props.value.bar.bar.barHeight}}px ;
    background-color: ${()=>{return  props.value.bar.bar.barColor}};
    width: ${()=>{return props.value.bar.bar.barWidth}}px;
    position: relative;


    &::before{ 
    content: "${()=>{return props.value.bar.bar.barIdentifier}}";
    position: absolute;
    top: 100%;
    transform: skewY(15deg);
    height: max-content;
    width: fit-content;
    font-size: 10px;
    padding-top:10px;
    }

    &:hover{
        cursor: pointer;
    background-color: gray;
    }

    &::after{
    content:"";
    width:0px;
    height:0px;
    background-color:black;
    position:absolute;
    right:0%;
    }
    `;

    useEffect(()=>{
        console.log(props.value.barDetails.current.children)
        //Its always giving me the last one ALWAYS............
    })
    

    return<>
        {/* <div className="analysis-bar-1  default-bar">.</div> */}
        <StyledBar></StyledBar>
    </>
}

export default MazoVisuals;