import React,{Component} from 'react';

class Message extends Component{
    state={
        text:'Hello',
    }
    constructor(props){
        super(props);
        //this.sayHi=this.sayHi.bind(this);
    }
    sayHi=()=>{
        this.setState({
        text:'Hi'
        })
    }
    render(){
        return (           
            <div>
            <h1></h1>
            <h3>{this.state.text}</h3>
            <button onClick={this.sayHi}>say Hi</button>
            </div>
        );
    }
}

export default Message;