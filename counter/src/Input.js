import React, { Component,createRef } from 'react'

export default class Input extends Component {
  myInput=createRef();

  componentDidMount() {
    this.myInput.current.focus();
  }
  //setRef=(input)=>{
  //  input.focus();
  //};

  render() {
    return (
      <div>
        <h3>Enter your name</h3>
        <input type="text" ref={this.myInput}></input>
      </div>
    )
  }
}
