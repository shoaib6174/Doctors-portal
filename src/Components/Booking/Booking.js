import React from 'react';
import Auth from '../useAuth';
import { useEffect } from 'react';
import { useState } from 'react';


const Booking = (props) => {
  
    const auth = Auth()
    
    const [type, setType]= useState('bydoe')

    useEffect(()=>{
        console.log('hiiiii',auth.treatmentType)
        setType(auth.treatmentType)
    },[auth.treatmentType])
    
    return (
        <div>
            booking
            <br/>
            {auth.treatmentType}
        </div>
    );
};

export default Booking;