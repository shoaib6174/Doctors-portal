import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Appointments.css'

const Appoinments = () => {
    const dateWriter = date =>{
        const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
        const  d = monthNames[date.getMonth()] +' '+ date.getDate()   + ', ' +  date.getFullYear()
        return d
    }

    const [newDate , setNewDate]= useState( dateWriter( new Date()))
    const[appointments, setAppointments]= useState(null)


    const onDateChange =(date)=>{
        setNewDate(dateWriter(date))
        
    }
    useEffect(()=>{
        fetch('https://dry-anchorage-14580.herokuapp.com/appointments')
        .then(res => res.json())
        .then(data => {
            setAppointments(data)
        })
    },[])
    
    const onDateApp=[]

    return (
        <div className='appoinments-list'>
            <div className="appointments-calender">
                <Calendar onChange={onDateChange}  onSelect={(e)=>{
                        
                }} ></Calendar>
                
            </div>
            <div className='appoinments'>
                {
                  appointments &&  appointments.map(a=>{
                        if(a.date===String(newDate)){
                            onDateApp.push(a)
                        }  
                    })
                }
             
                <body>
                <h5>Appointments for {String(newDate)}</h5>   
                <table className='css-serial'>
                    <tbody>
                        <tr>
                            <th>Serial No</th>
                            
                            <th>Time</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Phone No</th>
                            
                        </tr>
                    
                    {
                    appointments &&  onDateApp.map(app=>(
                        <tr>
                                <td></td>
                                
                                <td>{app.time}</td>
                                <td>{app.name}</td>
                                <td>{app.type}</td>
                                <td>{app.phone}</td>
                                

                                
                            </tr>
                        
                        ))
                    }
                    </tbody>
                </table>
                </body>
            </div>
            
        
        </div>
    );
};

export default Appoinments;