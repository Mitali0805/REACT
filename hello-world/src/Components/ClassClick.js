import React,{ Component } from 'react'

class ClassClick extends Component{

    clickHandler(){
        console.log('clicked the button')
    }

    render(){
        return(
            <div>
                <hr/>
                example of ClassClick<br/>
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default ClassClick