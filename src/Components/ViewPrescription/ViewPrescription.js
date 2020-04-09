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
        <div style={{marginLeft:"40%"}}>
            
            <br/>
            {info && 
            <table>
                <body>
                    <tr>
                        <td>Patient's Name: </td>
                        <td>{info.name}</td>
                    </tr>
                    <tr>
                        <td>Age : </td>
                        <td>{info.age}</td>
                    </tr>
                    <tr>
                        <td>Weight: </td>
                        <td>{info.weight}</td>
                    </tr>
                    <tr style={{height:'100px'}}>
                        <td>Symptoms: </td>
                        <td>{info.symptoms}</td>
                    </tr >
                    <tr style={{height:'100px'}}>
                        <td>Diagnosis: </td>
                        <td>{info.diagnosis}</td>
                    </tr>
                    <tr style={{height:'100px'}}>
                        <td>Prescription: </td>
                        <td>{info.prescription}</td>
                    </tr>
                </body>
            </table>
             }
        </div>
        </div>
    );
};

export default ViewPrescription;