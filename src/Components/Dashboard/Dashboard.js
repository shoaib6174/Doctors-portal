import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Card, CardBody } from 'react-simple-card';
import './Dashboard.css'
import { Container, Row, Col } from 'react-grid-system';

import { useEffect } from 'react';





const Dashboard = () => {
    

    const dateWriter = date =>{
        const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
        const  d = monthNames[date.getMonth()] +' '+ date.getDate()   + ', ' +  date.getFullYear()
        return d
    }

    const [newDate , setNewDate]= useState( dateWriter( new Date()))
    const [type, setType]= useState(null)


    const onDateChange =(date)=>{
        setNewDate(dateWriter(date))
    }

    const handleBooking=(props)=>{
        setType(props)
    }

    //for BOOKING
    const [appoinmentData, setAppoinmentData]=useState({
        date: newDate,
        type: type,
        name: '',
        phone:'',
        time: '7',
        status: 'pending'
    })


    const handleChange=(e)=>{
        const info = appoinmentData;
        console.log(e.target.value)
        info[e.target.name]=e.target.value;
        setAppoinmentData(info);

    }
    useEffect(()=>{
        const info = appoinmentData;
        info.date=newDate;
        info.type=type;
        
    },[type,newDate])


    const handleSubmit=()=>{
       
        //post
fetch('https://dry-anchorage-14580.herokuapp.com/addappointment', {
    method:'POST',
    body:JSON.stringify(appoinmentData),
    headers: {
       "Content-type": "application/json; charset=UTF-8"
    }
})
.then(res =>{
    res.json()
    console.log(res)
} )
.then(data => {
    console.log('dataaaaaaaaaa',data);
    //clean
    //show success message
   
})
    }

    const addItems=()=>{
        const aa = [ appoinmentData]
        //post
        fetch('https://dry-anchorage-14580.herokuapp.com/addappointment', {
            method:'POST',
            body:JSON.stringify(aa),
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


    return (
        <div className='patientDashboard'>
            <div className="calender">
                <Calendar onChange={onDateChange}  onSelect={(e)=>{
  console.log(e);
}} ></Calendar>
                {String(newDate)}
                <p></p>
            </div>
            <div className="appoinments">
                <Container>
                     <Row debug>
                        
                        
                        <Col md={4} debug>
                            <Card className = "card">
                                <CardBody className = "card-body">
                                    <h3>Teeth Orthodontics</h3>
                                    <p>8.00 AM - 9.00 AM</p>
                                    <p><small>10 spaces available</small></p>
                                    <button onClick={()=>handleBooking('teeth')}>Book Appoinment</button>
                                </CardBody>
                            </Card>
                        </Col>
                        
                       
                        
                    </Row>
                </Container>
                
                
            </div>
            <div className="booking">
                 {
                  type &&   
                  <div>
                        booking
                        <br/>
                        
                        {String(newDate)}
                        <br/>
                        

                        <form onSubmit={handleSubmit}>
                            <h3>{type}</h3>
                            <input type="text" name='date' defaultValue={newDate}/>
                            <br/>
                            <input type="text" name='name' placeholder='name' onChange={handleChange}/>
                            <br/>
                            <input type="text" name='phone' placeholder='Phone No' onChange={handleChange} />
                            <br/>
                            <select  name='time' placeholder='time' onChange={handleChange}>
                                <option value="7">7:00AM-10:00AM</option>
                                <option value="11">10:00AM-1:00PM</option>
                                <option value="15">3:00PM-6:00PM</option>
                                <option value="19">7:00PM-10:00PM</option>
                                
                            </select>
                            <br/>
                            <input type="submit" value="Submit" />
                            
                        </form>
                        <br/>
                        <button onClick={addItems}> add</button>
                </div>   
                 }   
            </div>
            
        </div>
    );
};

export default Dashboard;