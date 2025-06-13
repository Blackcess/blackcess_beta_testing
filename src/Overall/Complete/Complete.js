import React from 'react'
import "./Complete.css"
import Navigation from '../Navigation/Navigation';
import FirstRow from '../First Row/FirstRow';
import Table from '../Fees Table/Table';
import QuestStamp from '../College Stamp/Stamp.js';


 function Complete() {
  return (
    <>
    <div className='thomas-receipt' >
        <div className='nav'>
        <Navigation/>
        </div>
        <div className='body'>
        <FirstRow/>
        <Table/>
        </div>
        <div>
          
           </div>
    </div>
    <div className="stamp" >
      <QuestStamp/>
    </div>
    
    </>
  )
}
export default Complete;