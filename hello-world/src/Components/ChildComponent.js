import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <hr/>
            <button onClick={() =>{props.greetHandler('child')}}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
