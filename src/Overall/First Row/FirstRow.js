import React from 'react'
import "./FirstRow.css"
import personaFiles from '../Receipt Library files/contentVariables.js'
    let date = "9/Jan/2025";
    // let paymentMode= "Cash";
    // let receiptIdNo =45678 ;
    // let collegeRegNo = 23003;
    // let universityRegNo = 2305336;
    // let studentName= "THOMAS ISHEANESU KAZONDA";
    // let fatherName = "THOMAS KAZONDA";
    // let collegeName= "QUEST INFOSYS FOUNDATION GROUP OF INSTITUTIONS";
    // let courseName = "B.TECH.(CSE)(2023-27)";
    // let feeSession = "JAN-JUN 25"

    
 function FirstRow() {
  return (
    <>
   
    <div className='receipt-body'>
    <div className='first-row'>
        <div className='receipt-id'>
            <div className='receipt-id-content'>Receipt Id.</div>
            <div className='receipt-id-info'>{personaFiles.receiptIdNo}</div>
        </div>


        <div className='transaction-number'>
            <div className='transaction-number-content'>Manual Receipt/Transaction No.</div>
            <div className='transaction-number-info'></div>
        </div>

        <div className='date'>
            <div className='date-content'> Receipt Date</div>
            <div className='date-info'>{personaFiles.date}</div>
        </div>


    </div>


    <div className='first-row'>
        <div className='receipt-id'>
            <div className='receipt-id-content'>College Registration No.</div>
            <div className='receipt-id-info'>{personaFiles.collegeRegNo}</div>
        </div>


        <div className='transaction-number'>
            <div className='transaction-number-content'>University Roll No.</div>
            <div className='transaction-number-info'>{personaFiles.universityRegNo}</div>
        </div>

        <div className='date'>
            <div className='date-content'> Payment Mode</div>
            <div className='date-info'>{personaFiles.paymentMode}</div>
        </div>


    </div>

    <div className='third-row'>
        <div className='student-name-content'>Student's Name</div>
        <div className='student-name-info'>{personaFiles.studentName}</div>
    </div>

    <div className='third-row'>
        <div className='student-name-content'>Father's Name</div>
        <div className='student-name-info'>{personaFiles.fatherName}</div>
    </div>



    <div className='fifth-row'>
        <div className='institute-name'>
        <div className='institute-name-content'> Institute</div>
        <div className='institute-name-info'> {personaFiles.collegeName}</div>

        </div>

        <div className='course-name'>
            <div className='course-name-content'>Course</div>
            <div className='course-name-info'>{personaFiles.courseName}</div>
        </div>


        
    </div>


    <div className='fifth-row'>
        <div className='institute-name'>
        <div className='institute-name-content'> Transaction Date</div>
        <div className='institute-name-info'> {personaFiles.date}</div>

        </div>

        <div className='course-name'>
            <div className='course-name-content'>Receipt By</div>
            <div className='course-name-info'></div>
        </div>


        
    </div>

    



    </div>
    <div className='session'> {personaFiles.feeSession}</div>

    </>
  )
}
export default FirstRow;
