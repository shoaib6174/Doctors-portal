import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';

import Auth, { AuthContextProvider } from './Components/useAuth';
import { useState } from 'react';
import Appoinments from './Components/Appoinments/Appoinments';
import Summary from './Components/Summary/Summary';



function App() {


  

  const handler=()=>{
    console.log()
  }

  return (
    <div className="App">

<AuthContextProvider>


      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/summary">Summary</Link>
            </li>
            <li>
              <Link to="/dashboard">Patient's dashboard</Link>
            </li>
            <li>
              <Link to="/appointments">Appointments</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/dashboard">
              <Dashboard handler={handler}></Dashboard>
          </Route>
          <Route path="/appointments">
              <Appoinments></Appoinments>
          </Route>
          <Route path="/summary">
           <Summary> </Summary>
          </Route>
        </Switch>
      </div>
    </Router>
  </AuthContextProvider>
      
    </div>
  );
}

export default App;
