import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome'
import Users from './Components/Users'
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import ParentComponent from './Components/ParentComponent';
import EventBind from './Components/EventBind';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
     <Greet/>
     <Welcome/>
     <Users title="Users List"/>
        
      <Message/> 
      <Counter/> 

      <FunctionClick/>
      <ClassClick/>

      <EventBind/>
      <ParentComponent/>
      
     </div>
  );
}

export default App;
