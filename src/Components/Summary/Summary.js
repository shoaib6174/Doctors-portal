import React, { useEffect, useState } from 'react';

const Summary = () => {
    const [newDate , setNewDate]= useState(new Date())
    const[appointments, setAppointments]= useState(null)


    const onDateChange =(date)=>{
        setNewDate(String(date))
        
    }
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


    //update appoinmt
    const update = appo=>{
        //post
        console.log('appo',appo)
        //const a = [appo]
       // console.log('appo',appo,a)

        fetch('https://dry-anchorage-14580.herokuapp.com/updateappointment', {
            method:'POST',
            body:JSON.stringify(appo),
            headers: {
               "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log('daaaaaaaaata',data);
            //clean
            //show success message
        })
    }


    
    const changeStatus = app=>{
        let {_id, status} = app;
        const btn = document.getElementById(_id).innerHTML
       
        if(btn==='pending'){
            status= 'complete'
            const appo = {_id, status}
            update(appo)
            const btn = document.getElementById(_id).innerHTML =status;
         //   btn.innerText = status
           

        }
        else{
            status= 'pending'
            const appo = {_id, status}
            update(appo)
            const btn = document.getElementById(_id).innerText =status;

        //    btn.innerText = status
        console.log('safa',btn)
          
        }
    
    }


    return (
        <div>
            <table>
                <ol>
                    <tr>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                    </tr>
                   
                {
                  appointments &&  appointments.map(app=>(
                    
                        
                    
                       <tr>
                            <td><li></li></td>
                            <td>{app.date}</td>
                            <td>{app.time}</td>
                            <td>{app.name}</td>
                            <td>{app.type}</td>
                            <td>{app.phone}</td>
                            <td><button>view</button></td>
                            <td>
                                
                  <button type="button" id={app._id} onClick={()=>changeStatus(app)}>{app.status}</button>
                            </td>

                            
                        </tr>
                       
            ))
                }
                </ol>
            </table>
        </div>
    );
};

export default Summary;