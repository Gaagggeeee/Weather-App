import './App.css';
import React, { Component } from 'react';
import 'weather-icons/css/weather-icons.css';
import Weather from './components/weather';
import Form from './components/form';


// API key for open weather map
const API_key = '42ea349f33694ffd730b3434800860ce';

class App extends Component { 
  constructor(){
    super();
    this.state = {
      city: undefined,
      country: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      celsius: undefined,
      description: '',
      error: false
    };

  

  }


// Calculate Celsius 
  calCelsius(temp){
    let cell = Math.floor(temp - 273.15)
    return cell;
  }


  // Function to get weather stats
  getWeather = async (e) => {

    e.preventDefault();

    const city = e.target.elements.city.value; 
    const country = e.target.elements.country.value;

    if(city && country) {
      
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`)

      const response = await api_call.json();

      console.log(response);

      this.setState({
        city: response.name,
        country: response.sys.country,
        celsius: this.calCelsius(response.main.temp),
        temp: response.main.temp,
        temp_max: this.calCelsius(response.main.temp_max),
        temp_min: this.calCelsius(response.main.temp_min),
        humidity: response.main.humidity,
        description: response.weather.[0].description
      });

    } else {
      this.setState({error: true})
    }



  }

  render(){
    return(
      <>
        <Form 
          loadweather={this.getWeather}
        />
        <Weather 
          city={this.state.city}
          country={this.state.country}
          celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          humidity={this.state.humidity}
          description={this.state.description}
        />
      </>
    );
  }

}


export default App;
