import React, { Component } from "react";

export default class File extends Component {
  state = {
    file:null,
    img: '',
  };
  onChange = e => {
    const file = e.target.files.item(0);
    const fr = new FileReader();
    fr.addEventListener("load", this.fileLoad);
    fr.readAsDataURL(file);
  };

  fileLoad = e => {
    this.setState({
      img: e.target.result
    });
  };

  submit=()=>{
    //json base64  
    //axios.post
    
    //multipart
    const form=new FormData();
    form.append(this.state.file);
    axios.post('./img',{form});
  }
  render() {
    return (
      <div>
        <input type="file" onChange={this.onChange} />
        <img src={this.state.img} width="100%"/>
        <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
}
