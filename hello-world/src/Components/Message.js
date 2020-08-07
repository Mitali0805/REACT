import React,{ Component } from 'react';

class Message extends Component{

    constructor(){
        super()
        this.state = {
            message:'Welcome to Hogwarts'
        }
        
    }

    changeMessage(){
        this.setState({
            message:"Thanks for Subscribing"
        })
    }

    render(){
        return (
            <div>
                <br/><br/>
                <hr/>
                 example of state
                <h1>{ this.state.message }</h1>
                <button onClick = { ()=> this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message