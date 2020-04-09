import React from 'react';
import "./Homepage.css"
import { Card, CardBody } from 'react-simple-card';
import { Container, Row, Col } from 'react-grid-system';
import { useHistory } from "react-router-dom";

const Homepage = () => {
    const history = useHistory();

    return (
        <div className='homepage'>
            <div className='buttons'>
                <Container>
                <Row>

            
                <div className='for-patient'>
                    <Card style={{width:'350px', height:'200px', backgroundColor:'green', border:'none'}} >
                        <CardBody style={{ width:'350px', height:'200px',backgroundColor:'lightgreen',paddingTop:'.05%',margin:'5px'}}>
                            <h6>For Patient</h6>
                            <button onClick={()=>history.push('/patients/setappointments')}>Book an Appointment</button>
                            <button onClick={()=>history.push('/patients/viewprescription')}>View Prescription</button>
                        </CardBody>
                    </Card>
                </div>
                <div className='for-doctor'>
                <Card style={{width:'350px', height:'200px', backgroundColor:'green', border:'none'}} >
                    <CardBody style={{ width:'350px', height:'200px',backgroundColor:'lightgreen',paddingTop:'.05%',margin:'5px'}}>
                        
                            <h6>For Doctors</h6>
                            <button onClick={()=>history.push('/doctor/appointments')}>View Appointments</button>
                            <button onClick={()=>history.push('/doctor/summary')}>View Patients' Summary</button>
                        </CardBody>
                    </Card>
                </div>
                </Row>
                </Container>
            </div>
        </div>
    );
};

export default Homepage;