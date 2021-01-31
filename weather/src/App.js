import './App.css';
import React from 'react';
import 'weather-icons/css/weather-icons.css';
import Weather from './components/weather';
import { Container, Row, Col } from 'reactstrap';


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
    temp: undefined,
    temp_max: undefined,
    temp_min: undefined,
    description: '',
    error: false
  };

}



cityHandler = (event) => {
  this.setState({city: event.target.value});
  event.preventDefault();
}

countryHandler = (event) => {
  this.setState({country: event.target.value});
  event.preventDefault();
}



getWeather = async (event) => {

  const city = this.useState('');
  const country = this.useState('');

  if( city && country ) {


    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);

    const response = await api_call.json();

    console.log(response);

    this.setState({
      city:response.name,
      country:response.sys.country,
      temp:response.main.temp,
      temp_max:response.main.temp_max,
      temp_min:response.main.temp_min,
      
    })
  } else {
    this.setState({error: true})
  }


};

render() {
    return (
        <div className='App'>
          <Container className='form-container' fluid={true} >
            <Row>
              <Col>
                <div>
                  <form>
                    <input 
                      type='text'
                      placeholder='Enter City'
                      onChange={this.cityHandler}
                    />      
                    <input 
                      type='text'
                      placeholder='Enter Country'
                      onChange={this.countryHandler}
                    />                    
                  </form>
                  <button 
                    onSubmit={this.getWeather}>
                    Submit
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
          <Weather 
          city={this.state.city} 
          country={this.state.country}
          temp={this.state.temp}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          />
        </div>
    );
  }
}



export default App;
