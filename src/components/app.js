import React, { Component } from 'react';
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Sadiel Almanza PortFolio</h1>
        <div>
          {moment().format("MMM Do YYYY, h:mm:ss a")}
        </div>
      </div>
    );
  }
}
