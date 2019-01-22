import React, { Component } from 'react'

export default class Counter2 extends Component {
state={
    count:0,
    step:1
}

addCount=()=>{
    const {count,step}=this.state;
    this.setState({
        count:count+step,
        step:step+1
    });
}

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.addCount}>+1</button>
      </div>
    )
  }
}
