import React, { Component } from 'react'
import axios from 'axios';

export default class Weather extends Component {

  state = {
    data: {},
    weather: []
  }
  // componentDidMount = async () => {
  //   const data = await fetch('https://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=e6831708-02b4-4ef8-98fa-4b4ce53459d9').then(response => response.json());
  //   this.setState({
  //     album: data,
  //   });
  // }

  componentDidMount() {
    this.getData();
    // const response = axios.get('https://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=e6831708-02b4-4ef8-98fa-4b4ce53459d9')
    //   .then(res => {
    //     this.setState({
    //       data: res.data,
    //       weather: res.data.result.results,
    //     });
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // always executed
    //   });
  }

  getData = async () => {
    // const response = await fetch('https://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=e6831708-02b4-4ef8-98fa-4b4ce53459d9');
    // const res = await response.json();
    // this.setState({
    //   data: res.result,
    //   weather: res.result.results,
    // });

    const response2 = await axios.get('https://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=e6831708-02b4-4ef8-98fa-4b4ce53459d9');
    this.setState({
      data: response2.data,
      weather: response2.data.result.results,
    });

  }

  renderWeathers = () => {
    const { data } = this.state;
    if (data.result && data.result.results) {
      return data.result.results.map(w =>
        <div>{w.locationName} {w.parameterName1} {w.parameterName2}{w.parameterUnit2}</div>
      )
    }
    else {
      return null;
    }
  }


  render() {
    const { weather, results } = this.state;
    return (
      <div>
        {this.renderWeathers()}
        {JSON.stringify(this.state)}
      </div>
    )
  }
}
