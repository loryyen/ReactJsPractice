import React, { Component } from 'react'

export default class Weather extends Component {
  
  state={
    album:""
  }
  componentDidMount = async () => {
    const data = await fetch('https://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=e6831708-02b4-4ef8-98fa-4b4ce53459d9').then(response => response.json());
    this.setState({
      album: data,
    });
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.state,null,2)}
      </div>
    )
  }
}
