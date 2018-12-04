import React, { Component } from 'react';
import './form.css';

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.weatherMethod}>
        <input type="text" name="city" placeholder="city name"/>
        <button>get weather</button>
      </form>
    );
  }
}

export default Form ;