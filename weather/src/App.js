import './App.css';
import React from 'react';
import './components/weather';
import 'weather-icons/css/weather-icons.css';
import Weather from './components/weather';


const API_key = '42ea349f33694ffd730b3434800860ce';

class App extends React.Component {
  constructor(){
  super();
  this.state = {
    city: undefined,
    country: undefined,
    icon: undefined,
    main: undefined,
    celsius: undefined,
    temp_max: undefined,
    temp_min: undefined,
    description: '',
    error: false
  };
  this.getWeather = {};
}



getWeather = async () => {
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}`);

  const response = await api_call.json();

  console.log(response);

  this.setState({
    city:response.name,
    country:response.sys.country
  })
};

  render() {
    return (
        <div className='App'>
          <Weather 
          city={this.state.city} 
          country={this.state.country}
          />
        </div>
    );
  }
}



export default App;
