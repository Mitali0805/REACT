import React, { Component } from 'react'

class Counter extends Component {

    constructor(){
        super()
        this.state = {
            count:0
        }

    }

    incrementCount(){
        this.setState({                       //object
            count:this.state.count + 1       
        },
        () =>{                                 //callback()
            console.log('Callback value',this.state.count);
        }
    )
        console.log(this.state.count);         //synchronous console log
 }


    render() {
        return (
            <div>
                <br/><br/>
                <hr/>
                This is example of setState
                 <h2>Count-{this.state.count}</h2>
                <button onClick={ () => this.incrementCount()}>Increment</button>
            </div>
        )
    }
}

export default Counter
