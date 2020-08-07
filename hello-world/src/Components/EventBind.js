import React, { Component } from 'react'

export class EventBind extends Component {
   
   constructor(props){
       super(props)

       this.state={
           message:'Hello'
       }

       //this.clickHandler = this.clickHandler.bind(this)   //3)binding in constructor (best approach)
   }

  // clickHandler(){
  //     this.setState({
  //        message:'Good Day!'
  //     })
  //    console.log(this)     //'this' is undefined so event bindind is must
   //}


   clickHandler = () => {
       this.setState({
           message:'Good Day'      //4)4th approach
       })
   }
   
    render() {
        return (
            <div>
                <hr/>
                <div>{this.state.message}</div>
               { /* 1) <button onClick={this.clickHandler.bind(this)}>Click</button>*/}  

               {/*2) <button onClick={() => this.clickHandler()}>Click</button> */}

                 <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
