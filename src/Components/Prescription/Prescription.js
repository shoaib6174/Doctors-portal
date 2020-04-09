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
            <form onSubmit={handleSubmit}>
                <input type="text" name="id"  placeholder="Prescription ID" onChange={handleChange}  />
                <br/>
                <input type="submit" value="View Prescription"/>
            </form>
        </div>
    );
};

export default Prescription;