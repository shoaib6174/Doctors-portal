import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Card, CardBody } from 'react-simple-card';
import './Dashboard.css'
import { Container, Row, Col } from 'react-grid-system';
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';





const Dashboard = () => {
    
    const history = useHistory()
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
        setType(props.t)
    }

    //for BOOKING
    const [appoinmentData, setAppoinmentData]=useState({
        date: newDate,
        type: type,
        name: '',
        phone:'',
        time: '7',
        status: 'pending',
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

const [id, setId] = useState(null)
    const handleSubmit=(e)=>{
       e.preventDefault()
        //post
fetch('https://dry-anchorage-14580.herokuapp.com/addappointment', {
    method:'POST',
    
    headers: {
       "Content-type": "application/json; charset=UTF-8"
    },
    body:JSON.stringify(appoinmentData)
})
.then(res =>res.json())
.then(data => {
    
    setId(data._id)
   
})

    }
    const treatments = ['Dermatologists' ,'Ophthalmologists','Cardiologists','Endocrinologists','Medicine','Obstetrician']



    


    return (
        <div className='patientDashboard'>
            { !type &&
            <div className='appoinment-booking'>
                <div className="calender">
                    <Calendar  onChange={onDateChange}  />
                    
                </div>
    <p>Appoinments for {String(newDate)}</p>
                <div className="appoinments">
                    <br/>
                    <Container style={{backgroundColor:"none",marginLeft:'5%',marginRight:'auto'}}>
                        <Row debug>
                            
                                {
                                    treatments.map(t=>(

                                <Col md={4}>

                                    
                                <Card >
                                    <CardBody className = "card-body">
                                        <h3>{t}</h3>
                                        
                                        <p><small> Spaces available</small></p>
                                        <button onClick={()=>handleBooking({t})}>Book Appoinment</button>
                                    </CardBody>
                                </Card>
                                
                                </Col>     ))
                            }
                            
                        </Row>
                    </Container>
                </div>
            </div>
}
            <div className="booking">
                 {
                  type &&   
                  <div>
                        
                        

                        <form onSubmit={handleSubmit}>
                            <h3>Appointment for:  {type}</h3>
                            <input type="text" name='date' defaultValue={newDate}/>
                            <br/>
                            <input type="text" name='name' placeholder='name' onChange={handleChange}/>
                            <br/>
                            <input type="text" name='phone' placeholder='Phone No' onChange={handleChange} />
                            <br/>
                            <select  name='time' placeholder='time' onChange={handleChange}>
                                <option value="7:00AM-10:00AM">7:00AM-10:00AM</option>
                                <option value="10:00AM-1:00PM">10:00AM-1:00PM</option>
                                <option value="3:00PM-6:00PM">3:00PM-6:00PM</option>
                                <option value="7:00PM-10:00PM">7:00PM-10:00PM</option>
                                
                            </select>
                            <br/>
                            
                            <button onClick={handleSubmit}>Confirm Appointment</button>
                            <br/>
                            {
                                
                                id && <div>
                                    <br/>
                                     <h3> Thank You for booking Appointment. </h3> 
                                    
                                    Your Patient ID: {id}
                                </div>
                            }
                        </form>
                        
                </div>   
                 }   
            </div>
            
        </div>
    );
};

export default Dashboard;