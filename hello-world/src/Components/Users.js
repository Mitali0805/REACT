import React,{ Component } from 'react'
import User from './User'

class Users extends Component{
    render(){
        return (
            <div>
                <hr/>
                example of props
                <h1>{this.props.title}</h1>
                <User age="20">Harry</User>
                <User age="21">Hermaini</User>
                <User age="23">Ron</User>
            </div>
        )
    }
}

export default Users