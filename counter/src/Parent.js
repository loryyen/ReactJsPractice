import React, { Component,createRef } from 'react'
import Child from './Child';

export default class Parent extends Component {
  ChildRef=createRef();  
  
  state={
      count:0,
      childCount:0
  }

  addCount=()=>{
      this.setState({
        count:this.state.count+1
      });
  }

  addChildCount=()=>{
    //this.ChildRef.current.addCount();
    this.setState({
      childCount:this.state.childCount+1
    })
  }

    render() {
    return (
      <div>
        <h1>Parent:{this.state.count}</h1>
        <button onClick={this.addCount}>+Parent</button>
        <button onClick={this.addChildCount}>+Child</button>
        <Child count={this.state.childCount} 
        ref={this.ChildRef} 
        addParentCount={this.addCount} 
        addChildCount={this.addChildCount}></Child>      
      </div>
    )
  }
}
