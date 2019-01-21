import React, { Component } from 'react'

export default class Child extends Component {
 //state={
 ///  count:0
 //}
 
 //addCount=()=>{
 //   this.setState({
 //     count:this.state.count+1
 //   })
 //}
  render() {
    const {count,addParentCount,addChildCount} =this.props;
    return (
      <div>
        <h2>Child:{count}</h2>
        <button onClick={addParentCount}>+Parent</button>
        <button onClick={addChildCount}>+Child</button>
      </div>
    )
  }
}
