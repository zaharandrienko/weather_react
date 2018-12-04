import React, { Component } from 'react';
import './result.css';

class Result extends Component {
  render() {
    return (
      <div className="result">
        {this.props.city &&
          <div>
            <h1>City : {this.props.city}</h1>
            <h2>Temperature : {this.props.temp}</h2>
            <h2>Sunrise : {this.props.sunrise}</h2>
          </div>
        }
        <h1>{this.props.error}</h1>
      </div>
    );
  }
}

export default Result;