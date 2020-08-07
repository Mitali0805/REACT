import React, { Component } from 'react'
import './Clear.css'

export class Clear extends Component {
    render() {
        return (
            <div className="clr-btn"
            onClick={()=>this.props.handleClear()}>
               {this.props.children} 
            </div>
        )
    }
}

export default Clear
