import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Counter extends Component {
  //state={
  //    count:0,
  //    step:1
  //}
  //static defaultProps={
  //  initCount:0
  //}
  //static propTypes={
  //  initCount:PropTypes.number
  //}
  constructor(props){
    //super means 'Counter'
    super(props);
    this.state={
      count:props.initCount,
      step:1
    }
  }

  addCount=()=>{
    const {count,step}=this.state;

    //setState是非同步所以改用以下寫法可以同步處理
    //this.setState(state=>({
    //  count:state.count+1
    //}));
    //this.setState(state=>({
    //  count:state.count+1
    //})); 
    //this.setState(state=>({
    //  count:state.count+1
    //}));

    // this.setState({
    //   count:this.state.count+1
    // });    
    this.setState(
    {
      count:count+1
    },
    //callback
    ()=>{
      this.sendCount();
    });
  }

  sendCount=()=>{
    fetch(`/api/count?value${this.state.count}`);
  }
  
    render() {
    const {count,step}=this.state;
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={this.addCount}>+{step}</button>
      </div>
    )
  }
}

Counter.defaultProps={
  initCount:0
}

Counter.propTypes={
  initCount:PropTypes.number
}