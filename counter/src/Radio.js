import React, { Component } from 'react'

export default class Radio extends Component {
  state={
    gender:'male',
    like:{
      male:false,
      female:false
    }
  }
  onChangeGender=(e)=>{
    this.setState({
        gender:e.target.value
    })
  }

  onChangeLike=(e)=>{
    const key=e.target.value;
    this.setState((state)=>({
      like:{
        ...state.like,
        [key]:!state.like[key]
      }
    }));

    //const tmp={...this.state.like,["a"]:'123'};
  }

  render() {
    const {gender,like}=this.state;
    return (
      <div>
        <div>
            <label>
            <input type="radio" value="male" 
            onChange={this.onChangeGender}
            checked={gender=='male'}
            ></input>
            Male</label>
            <label>
            <input type="radio" value="female" 
            onChange={this.onChangeGender}
            checked={gender=='female'}></input>
            Female</label>
        </div>
        <div>
        You like:
        <input type="checkbox" value="male" 
        checked={like.male}
        onChange={this.onChangeLike}></input>
        <label>Male</label>
        <input type="checkbox" value="female" 
        checked={like.female}
        onChange={this.onChangeLike}></input>
        <label>Female</label>
        </div>
        <div>
        {JSON.stringify(this.state,null,2)}
        </div>
      </div>
    )
  }
}
