import React, { Component } from 'react';
import './App.css';
import Content from "./components/content"
import Form from "./components/form"
import Result from "./components/result"


const API_KEY = "987c0f266dfe1fd5acc66406faf05271" ;
class App extends Component {


state = {
  city : undefined,
  temp : undefined,
  sunrise : undefined ,
  error : undefined
}



getWeather = async (e) => {
  e.preventDefault();
  const city = e.target.elements.city.value;
  // const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
  // const data = await  api_url.json();
  if(city){
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await  api_url.json();


    var sunrise = data.sys.sunrise;
    var date = new Date();
    date.setTime(sunrise);
    var sunrise_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() ; 


    this.setState({
      temp : data.main.temp,
      city : data.name,
      sunrise : sunrise_date,
      error : undefined
    });
  }else{
    this.setState({
      city : undefined,
      temp : undefined,
      sunrise : undefined ,
      error : "Введіть назву міста"
    })
  }

  // this.setState({
  //   temp : data.main.temp,
  //   city : data.name,
  //   sunrise : data.sys.sunrise,
  //   error : "" 
  // });
}

  render() {
    return (
      <div className="general">
        <Content></Content>
        <Form weatherMethod={this.getWeather}></Form>
        <Result
          temp={this.state.temp}
          city={this.state.city}
          sunrise={this.state.sunrise}
          error={this.state.error}
        ></Result>
      </div>
    );
  }
}

export default App;
