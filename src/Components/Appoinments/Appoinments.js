import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

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
        <div>
            <div className="calender">
                <Calendar onChange={onDateChange}  onSelect={(e)=>{
                        
                }} ></Calendar>
                {String(newDate)}
            </div>
            <div className='appoinments'>
                {
            
            
                  appointments &&  appointments.map(a=>{
                     
                   
                        if(a.date===String(newDate)){
                            
                            onDateApp.push(a)
                            
                            
                        }
                        
                    })
                }
            </div>
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
                        
                    </tr>
                   
                {
                  appointments &&  onDateApp.map(app=>(
                       <tr>
                            <td><li></li></td>
                            <td>{app.date}</td>
                            <td>{app.time}</td>
                            <td>{app.name}</td>
                            <td>{app.type}</td>
                            <td>{app.phone}</td>
                            

                            
                        </tr>
                       
                    ))
                }
                </ol>
            </table>
            </div>
            
        
        </div>
    );
};

export default Appoinments;