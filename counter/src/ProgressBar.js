import React, { Component,PureComponent } from 'react'

//class component
export default class ProgressBar extends Component {
  render() {
    const {value}=this.props;
    return (
      <div className="bar-outer">
        <div className="bar-inner"
        style={{width:`${value}%`}}
        >
        {value}%
        </div>
      </div>
    )
  }
}


// //Pure class component 
// //Shallow compare
// class ProgressBar extends PureComponent {
//     render() {
//       const {value}=this.props;
//       return (
//         <div className="bar-outer">
//           <div className="bar-inner"
//           style={{width:`${value}%`}}
//           >
//           {value}%
//           </div>
//         </div>
//       )
//     }
//   }
  

// Stateless functional component
//const ProgressBar = (props)=> {
//    const {value}=props;
//    render() {
//      const {value}=this.props;
//      return (
//         <div className="bar-outer">
//           <div className="bar-inner"
//           style={{width:`${value}%`}}
//           >
//           {value}%
//           </div>
//         </div>
//       )
//     }
//   }