import React from 'react';
import './App.css';
import {BrowserRouter as Router,NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route'


function App() {
  return (
    <Router>
    <div className="App">
      
      <ul>
      <li><NavLink   className="nav" to="/" activeStyle={{color:"green"}} exact strict>Home</NavLink></li>
      <li><NavLink   className="nav" to="/projects" activeStyle={{color:"green"}} exact strict>Projects</NavLink></li>
      <li><NavLink  className="nav" to="/services" activeStyle={{color:"green"}} exact strict>Services</NavLink></li>
      <li><NavLink  className="nav" to="/contact" activeStyle={{color:"green"}} exact strict>Contact</NavLink></li>
      </ul>
      

      <Route path="/" exact strict render={
        ()=>{
          return <h1>You Chose HOME</h1>
        }
      } />

    <Route path="/projects" exact strict render={
        ()=>{
          return <h1>You Chose PROJECTS</h1>
        }
      } />

      <Route path="/services" exact strict render={
        ()=>{
          return <h1>You Chose SERVICES</h1>
        }
      } />

     <Route path="/contact" exact strict render={
        ()=>{
          return <h1>You Chose CONTACT</h1>
        }
      } />
    </div>
    </Router>
  );

  
}

export default App;
