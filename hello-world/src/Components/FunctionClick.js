import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log('button is clicked');
    }

    return (
        <div>
           <hr/>
           example of FunctionClick<br/>
           <button onClick={clickHandler}>Click Button</button> 
        </div>
    )
}

export default FunctionClick
