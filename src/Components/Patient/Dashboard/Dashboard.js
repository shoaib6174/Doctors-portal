import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {

    const [date, setDate] = useState(new Date())


    const onDateChange =(date)=>{
        setDate(date)
    }


    return (
        <div>
            <h1>hi</h1>
            <Calendar onChange={onDateChange} value={date}></Calendar>
            {console.log(date)}
            {String(date)}
        </div>
    );
};

export default Dashboard;