import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


const Prescription = () => {

    const [prescriptionId, setPrescriptionId]=useState(null)
    const history = useHistory();

    const handleChange=(e)=>{
        setPrescriptionId(e.target.value);
        console.log(prescriptionId)
    }
     const handleSubmit = ()=>{
        if(prescriptionId){
            history.push('/viewPrescription/'+prescriptionId)
        }
    }

    return (
        <div>
            <h2>Get Prescription</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="id"  placeholder="Patient ID" onChange={handleChange}  />
                <br/>
                <input type="submit" value="View Prescription"/>
               <p>
                    Use this ID to see demo : 5e8f5eb5f55516001812268f
                </p> 
            </form>
        </div>
    );
};

export default Prescription;