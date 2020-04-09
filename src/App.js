import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';

import  { AuthContextProvider } from './Components/useAuth';
import Appoinments from './Components/Appoinments/Appoinments';
import Summary from './Components/Summary/Summary';
import Addprescription from './Components/Addprescription/Addprescription';
import ViewPrescription from './Components/ViewPrescription/ViewPrescription';
import Prescription from './Components/Prescription/Prescription';
import Header from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';



function App() {


  

  const handler=()=>{
    console.log()
  }

  return (
    <div className="App">

<AuthContextProvider>


      <Router>
      <div>
        
      <Header></Header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/">
              
              <Homepage/>
          </Route>
          <Route exact path="/patients/setappointments">
              
              <Dashboard handler={handler}></Dashboard>
          </Route>
          <Route path="/doctor/appointments">
              <Appoinments></Appoinments>
          </Route>
          <Route path="/doctor/summary">
           <Summary> </Summary>
          </Route>
          <Route path="/addprescription/:_id">
           <Addprescription/>
          </Route>
          <Route path="/viewprescription/:_id">
           <ViewPrescription/>
          </Route>
          <Route path="/patients/viewprescription">
           <Prescription/>
          </Route>


        </Switch>
      </div>
    </Router>
  </AuthContextProvider>
      
    </div>
  );
}

export default App;
