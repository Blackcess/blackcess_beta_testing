import "./NixedExpensesUI.css";
import {createContext, useContext, useState,useReducer} from "react"
import {myImages} from "../../../Fonts and Images/stolenImages.js"


function MixedUI(){
    let days= [1,2,3,4,5,6,7,8];
    return (
        <>
        <div className="display-table">
        <div className="column1">
        {/* {
            days.map((day)=>(
                <div key={Math.random()*5}>{day}</div>
            ))
        } */}
        {/* //creating dynamically */}
        {Array.from({length:30,data:"my data"},((currentValue,index,me)=>(
            <div key={Math.random()+67} className="month-day">{index+ 1}</div>
        )))
        
        }
</div>
        <div className="column2">
            {
                Array.from({length:30},(_,index)=>(
                    <div key={Math.random()+90} className="month-dates">{index+1}/11/2024</div>
                ))
            }
        </div>
        <div className="column3">
            <p>My Time = {["yesterday", "Now", "tomol"]}</p>
        </div>
        <div className="column4"></div>
        <div className="column5"></div>
        </div>
        
        </>
    )
}

// Practice Components (Not Part O f the main project)

function Card(props){
    console.log(props.render)

    return <>
    
    <div className="my-container">
    <img src={props.render} alt="rendered image" className={props.class}/>
    </div>
    
    </>
}
function Heart(){

    return <>
    <div className="beating-heart">.</div>
    </>
}

function ControlSystem(){
    let [PPA,setPPA]=useState(0);
    let [PDR,setPDR]=useState(0);
    let [IPF,setIPF]=useState(0);
    //generating a random number
    function generateFrequency(){
        let frequency = Math.random()*11245;
        return frequency;
    }
    function updateSignals(){
        function interval(){
            setInterval(()=>{
                let genFqn= generateFrequency();
                setPPA(genFqn.toFixed(3))
                setPDR((genFqn/43.535).toFixed(3))
                setIPF((genFqn-54.653).toFixed(3))


            },7000)
        }
        interval();
    }
    updateSignals();

    return <>
    <div className="control-terminal">
    <div className="pixel-data">
        <div className="pixel-per-area">
            <span>PPA:</span>
            <span>{PPA}</span>
        </div>
        <div className="pixel-per-area">
            <span>PDR:</span>
            <span>{PDR}</span>
        </div>
        <div className="pixel-per-area">
            <span>IPF:</span>
            <span>{IPF}</span>
        </div>
    </div>

    </div>
    
    </>
}

function Apps(){
    let [search,setSearch]= useState(" ")
    let keysArr= Object.keys(myImages);
    var imgVar;
    let runSearch= (event)=>{
        setSearch(event.target.value)
    }
    let handleSubmit= (event)=>{
        event.preventDefault();
        // Code to be put later
    }

    return <>
    <div className="app-wrapper">
        <div className="app-sidebar">
            <div className="search-container">
           <input type="text" className="search-image" placeholder="Search..." value={search} onChange={runSearch}/>
           <button id="search-submit" type="submit" onClick={handleSubmit}>search</button>
           </div>
        </div>
    <div id="mydiv-container" key={Math.random() * 200} className="pic-grid">
        {
            keysArr.map((index)=>(
                imgVar= myImages[index],
                <Card render={imgVar} class="img"/>
            ))
        }
    </div>
    <div className="image-summary">
        <div className="summary-title">
            <ControlSystem/>
        </div>
        <div className="summary-main">
            {
                keysArr.map(index=>(
                    imgVar= myImages[index],
                    <div className="summary-pic" key = {Math.random()*500}>
                    <Card render={imgVar} class="summaryCard"/>
                    </div>
                ))
            }
        </div>
        <div className="summary-footer">
            <img src="" alt="super mazo"/>
        </div>

    </div>
    </div>
    </>
}


export default  Apps