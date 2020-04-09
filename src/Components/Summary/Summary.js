import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import './Summary.css'
import { Card, CardBody } from 'react-simple-card';

const Summary = () => {

    const[appointments, setAppointments]= useState(null)
    const history = useHistory();
    const [ pending , setPending]=useState(0)
    const[total, setTotal]=useState(0)
    let p = 0
    const load = ()=>{
        fetch('https://dry-anchorage-14580.herokuapp.com/appointments')
        .then(res => res.json())
        .then(data => {
            setAppointments(data)
        })
    }


    useEffect(()=>{
        load();
    },[])

    useEffect(()=>{
      calculation()
    },[appointments])

    const calculation = ()=>{
        if(appointments){
            setTotal(appointments.length)
        }
         appointments && appointments.map(app=>{
              if(app.status==='complete'){
                  p = p+1
              }
              setPending(appointments.length-p)
          })
    }

    //update appoinmt
    const update = appo=>{
        
        

        fetch('https://dry-anchorage-14580.herokuapp.com/updateappointment', {
            method:'POST',
            body:JSON.stringify(appo),
            headers: {
               "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => res.json())
        .then(data => {
            
        })
    }


    
    const changeStatus = app=>{
        
        let {_id, status} = app;
        const btn = document.getElementById('status'+_id).innerHTML
        
        if(btn==='pending'){
            status= 'complete'
            const appo = {_id, status}
            update(appo)
            const btn = document.getElementById('status'+_id).innerHTML =status;
            setPending(pending-1)
        }
        else{
            status= 'pending'
            const appo = {_id, status}
            update(appo)
            const btn = document.getElementById('status'+_id).innerText =status;
            setPending(pending+1)
          
        }
    
    }

    //handle view & add

    const handleprescription = app=>{
        let {_id, status} = app;
        const btn = document.getElementById('prescription'+_id).innerHTML
       console.log(btn)
        if(btn==='add'){
            
            
            history.push('/addPrescription/'+_id)
        }
        else if(btn==='view'){
            
            
            history.push('/viewPrescription/'+_id)

        }
    
    }



    return (
        <div style={{marginLeft:'10%'}}>
           <h2> Patients Summary  </h2>
            <div className="count">
                <Card style={{width:'400px',height:'50px'}}> 
                    <CardBody style={{paddingTop: '20px'}}>
                        Total Appointments : {total}
                    </CardBody>
                </Card>
                <Card style={{width:'400px',height:'50px'}}> 
                    <CardBody style={{paddingTop: '20px'}}>
                        Pending Appointments : {pending}
                    </CardBody>
                </Card>
                <Card style={{width:'400px',height:'50px'}}> 
                    <CardBody style={{paddingTop: '20px'}}>
                        Completed Appointments: {total - pending}
                    </CardBody>
                </Card>
            </div>
<div>
    <h4>Patients List</h4>
            <table className='css-serial'>
                
                    <tr>
                        <th>Serial No</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Phone no</th>
                        <th>Prescription</th>
                        <th>Status</th>
                    </tr>
                   
                {
                  appointments &&  appointments.map(app=>(
                    
                        
                    
                       <tr>
                            <td></td>
                            <td>{app.date}</td>
                            <td>{app.time}</td>
                            <td>{app.name}</td>
                            <td>{app.type}</td>
                            <td>{app.phone}</td>
                            <td>
                                  <button type="button" id={'prescription'+app._id} onClick={()=>handleprescription(app)}>{app.prescription? 'view' : 'add' }</button>
                            </td>
                            <td>
                                <button type="button" id={'status'+app._id} onClick={()=>changeStatus(app)}>{app.status}</button>
                            </td>

                            
                        </tr>
                       
            ))
                }
                
            </table>
            </div>
        </div>
    );
};

export default Summary;