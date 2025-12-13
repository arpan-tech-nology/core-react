"use client"
import React from "react";
class Incremental extends React.Component{
    constructor(props){
        super(props);
        this.state={
            counter:0,
        }
        this.handelCounter=this.handelCounter.bind(this);
    }
     handelCounter(){
    //   this.state.counter=this.state.counter+1;
    this.setState((pre)=>{
        return{
        counter:pre.counter+1,
        }
    })
    }
    render(){
        const {counter} =this.state;
        return(
            <>
            <h1>Counter</h1>
            <p>{counter}</p>
            <button onClick={this.handelCounter}>Click To Increment</button>
            </>
        )
    }
}
export {Incremental};