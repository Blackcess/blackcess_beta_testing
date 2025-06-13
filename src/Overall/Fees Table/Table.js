import React from 'react'
import "./Table.css"
let tutionFeePayable= 12600;
let accumulated = 0.0;
let totalFeePayable = tutionFeePayable + accumulated


 function Table() {
 
  return (
    <>
   
    <div id='Table'>

    
    <div className='primary-row'>
        <div className='fee-head'> Fees Head</div>
        <div className='fee-amount'> Amount</div>
    </div>
   

   <div className='secondary-row'>
    <div className='tuition-fee'>Tuition Fee(USD)-584</div>
    <div className='tuition-amount'>
        <span className='rupee'>Rs:</span>
        <span className='rupee-amount'>{tutionFeePayable}</span>
    </div>
   </div>

   <div className='secondary-row' >
    <div className='tuition-fee' id='tertiaryRow'>Total</div>
    <div className='tuition-amount'>
        <span className='rupee' id='tertiaryRow'>Rs:</span>
        <span className='rupee-amount' id='tertiaryRow'>{totalFeePayable}</span>
    </div>
   </div>


   <div className='cheque-row'>
        <div className='total'> Total (Twelve Thousand Six Hundred Only)</div>
        <div className='total-amount'>
        <span className='rupee'>Rs:</span>
        <span className='rupee-amount'>{totalFeePayable}</span>
        </div>
   </div>
   
   </div>
    </>
  )
}
export default Table;