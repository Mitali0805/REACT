import React, { Component } from 'react';
import './App.css';
import Button from './component/Button'
import Input from './component/Input'
import Clear from './component/Clear'

class App extends Component {

  constructor(props){
    super(props);

    this.state ={
      input:"",
      prevNumber:"",
      currentNumber:"",
      operator:""
    }
  }

  addToInput = val =>{
    this.setState({ input:this.state.input +val})
  }

  addZeroToInput = val =>{
    //if this.state.input is not empty then only add zero
    if(this.state.input !==""){
      this.setState({
        input:this.state.input+val
      })
    }
  }

  addDecimal = val =>{
    //onle ad decimal if no other decimal
    if(this.state.input.indexOf(".")===-1){
      this.setState({ input:this.state.input+val})
    }
  }

  clearInput = () =>{
    this.setState({
      input:""
    })
  }

  //operations

  add =()=>{
    this.state.prevNumber = this.state.input;
    this.setState({
      input:""
    })
    this.state.operator = "plus";
  }

  subtract =()=>{
    this.state.prevNumber = this.state.input;
    this.setState({
      input:""
    })
    this.state.operator = "minus";
  }

  multiply =()=>{
    this.state.prevNumber = this.state.input;
    this.setState({
      input:""
    })
    this.state.operator = "mul";
  }

  divide =()=>{
    this.state.prevNumber = this.state.input;
    this.setState({
      input:""
    })
    this.state.operator = "div";
  }

  //equal
  evaluate =()=>{
    this.state.currentNumber = this.state.input;

    //plus
    if(this.state.operator === "plus"){
      this.setState({
        input:parseFloat(this.state.prevNumber) +
              parseFloat(this.state.currentNumber)
      });
    }
    
    //minus
    
    if(this.state.operator === "minus"){
      this.setState({
        input:parseFloat(this.state.prevNumber) -
              parseFloat(this.state.currentNumber)
      });
    }

    //multiply
    if(this.state.operator === "mul"){
      this.setState({
        input:parseFloat(this.state.prevNumber) *
              parseFloat(this.state.currentNumber)
      });
    }

     //division
     if(this.state.operator === "div"){
      this.setState({
        input:parseFloat(this.state.prevNumber) /
              parseFloat(this.state.currentNumber)
      });
    }

  }

  render(){
  return (
    <div className="App">
      <div className ="calc-wrapper">
        <div className="row">
          <Input>{this.state.input}</Input>
        </div>

        <div className="row">
          <Clear handleClear={this.clearInput}>Clear</Clear>
        </div>

        <div className="row">
        <Button handleClick={this.addToInput}>7</Button>
        <Button handleClick={this.addToInput}>8</Button>
        <Button handleClick={this.addToInput}>9</Button>
        <Button handleClick={this.divide}>/</Button>
        </div>
        <div className="row">
        <Button handleClick={this.addToInput}>4</Button>
        <Button handleClick={this.addToInput}>5</Button>
        <Button handleClick={this.addToInput}>6</Button>
        <Button handleClick={this.multiply}>*</Button>
        </div>
        <div className="row">
        <Button handleClick={this.addToInput}>1</Button>
        <Button handleClick={this.addToInput}>2</Button>
        <Button handleClick={this.addToInput}>3</Button>
        <Button handleClick={this.add}>+</Button>
        </div>
        <div className="row">
        <Button handleClick={this.addDecimal}>.</Button>
        <Button handleClick={this.addZeroToInput}>0</Button>
        <Button handleClick={this.evaluate}>=</Button>
        <Button handleClick={this.subtract}>-</Button>
        </div>
      </div>
      
    </div>
  );
}
}

export default App;
