import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             parentName:'Parent'
        }

        this.greetParent= this.greetParent.bind(this);
    }


    greetParent(childName){                                        //template-literals
        alert(`Hello ${this.state.parentName} from ${childName}`)      //as we are using this keyword in the method we have to bind the method
    }
    
    
    render() {
        return (
            <div>
              <ChildComponent greetHandler={this.greetParent}/>  
            </div>
        )
    }
}

export default ParentComponent
