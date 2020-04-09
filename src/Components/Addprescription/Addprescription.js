import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Addprescription = () => {

    const _id = useParams()

    const addprescription = (prescription)=>{

        const pres = {_id: _id._id , prescription}
        
        console.log('pres',pres)
        fetch('https://dry-anchorage-14580.herokuapp.com/updateprescription', {
            method:'POST',
            body:JSON.stringify(pres),
            headers: {
               "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => res.json())
        .then(data => {
            
        })
    }

    const [prescription, setPrescription]=useState({
        name: '',
        age:'',
        weight: '',
        symptoms:'',
        diagnosis:'',
        prescription:','
    })


    const handleChange=(e)=>{
        const info = prescription;
        
        info[e.target.name]=e.target.value;
        setPrescription(info);

    }


    const handleSubmit=(e)=>{
        
        addprescription(prescription)
    }
    
    return (
        <div>
            <form >
                <input type="text" name='name' placeholder='name' onChange={handleChange}/><br/>
                <input type="text" name='age' placeholder='age' onChange={handleChange}/><br/>
                <input type="text" name='weight' placeholder='weight' onChange={handleChange}/><br/>
                <input type="text" name='symptoms' placeholder='symptoms' onChange={handleChange}/><br/>
                <input type="text" name='diagnosis' placeholder='diagnosis' onChange={handleChange}/><br/>
                <input type="text" name='prescription' placeholder='prescription' onChange={handleChange}/><br/>
                <input type="submit" value='save'/>
                <button onClick={handleSubmit}>add</button>
            </form>
        </div>
    );
};

export default Addprescription;