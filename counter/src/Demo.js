import React, { Component } from 'react';
import coffee from './coffee.JPG';
import style from './style.css';
export default class Demo extends Component {
 
 state={
     visible:true
 }

 toggle=()=>{
     this.setState({
         visible:!this.state.visible
     })
 }

render() {
    const {visible}=this.state;
    const styleObj={display:visible?'block':'none'};
    const cn=`image ${visible?'':'hide'}`;
    return (
      <div>
        <div>
        <button onClick={this.toggle}>Toggle</button>
        <hr></hr>
        {visible &&　<img src={coffee}></img>}
        
        <img className={cn} src={coffee}></img>

        </div>
      </div>
    )
  }
}
