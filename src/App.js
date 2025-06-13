import React from "react"
import { picDataBase } from "./Finance Squares/accountPicsDataBase";
import "./App.css"
// import {December2024} from "./Finance Squares/ProjectObjects.js"
function App (){
  return <>
  <div className="cloud">
  {picDataBase.map((element)=>(
        <div>
    <h1>{element.refAccount}</h1>
    <img src={element.img}/>
    </div>
      ))}

  </div>
   
    
   



    
  </>
}
    

export default App;
