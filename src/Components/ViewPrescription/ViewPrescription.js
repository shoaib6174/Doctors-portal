import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewPrescription = () => {
    const _id = useParams()._id
    const [info,setInfo]= useState(null)
    console.log(info)

    const load = ()=>{
        fetch('https://dry-anchorage-14580.herokuapp.com/viewprescription/'+_id)
        .then(res => res.json())
        .then(data => {
           setInfo(data.prescription)
           console.log(info,data)
        })
    }


    useEffect(()=>{
        load();
    },[])



    return (
        <div>
            <h3>Prescription</h3>
            <br/>
            {info && <div>
                    Patient's Name: {info.name}
                    <br/>
                    Age : {info.age}
                    <br/>
                    Weight: {info.weight}
                    <br/>
                    Symptoms: {info.symptoms}
                    <br/>
                    Diagnosis: {info.diagnosis}
                    <br/>
                    Prescription: {info.prescription}
                </div> }
        </div>
    );
};

export default ViewPrescription;