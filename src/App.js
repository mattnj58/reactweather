/**
 * Followed this tutorial
 * https://www.youtube.com/watch?v=IxuqmfO6p28&t=2s 
 * */


//Components
import React from 'react';
import Weather from './app_components/weather.component';
import Form from './app_components/form.component';
import './App.css';

/** Dependencies*/
import "weather-icons/css/weather-icons.css"; //git project from https://github.com/erikflowers/weather-icons
import "bootstrap/dist/css/bootstrap.min.css";
import Forecast from './app_components/forecast.component';
require('dotenv').config();

let envKey = process.env.REACT_APP_API_URL;

/**
 * Here is the api documentation for openweathermap
 * https://openweathermap.org/api
 */
const apiKey = {
  key: "7b7154eb47e573afde1536472685b7fb",
  base: 'https://api.openweathermap.org/data/2.5/'
}

const currentDate=(d)=>{
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${month} ${date}, ${year}`
}

class App extends React.Component{
 constructor(){
   super();
   this.state={
     date:undefined,
     city:undefined,
     country:undefined,
     icon:undefined,
     main:undefined,
     temp:0,
     temp_max:0,
     temp_min:0,
     description:"",
     error:false,
     forecast:undefined,
     fIcons:undefined,
     lat: 0,
     long: 0,
     daily:"",
     hourly:""
   }
   
   this.weatherIcon={
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-showers",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog"
   }
 }

 componentDidMount(){
   this.getPosition()
   .then((position) => {
     this.getGeoWeather(position.coords.latitude, position.coords.longitude)
  })
  .catch((err) => {
    if(err.code === err.PERMISSION_DENIED){
      //TODO: need to figure out a way for the user to search if they deny geolocation permission
    }
    console.log(err.message);
  })
}

getPosition = () => {
  return new Promise(function (resolve, reject){
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

getGeoWeather = async (latitude,longitude) => {
  const forCall = await fetch(`${apiKey.base}onecall?appid=${apiKey.key}&lat=${latitude}&lon=${longitude}&units=imperial&exclude=minutely`);
  const data = await forCall.json();

  this.setState({
    date: currentDate(new Date()),
    city: data.name,
    temp: Math.round(data.current.temp),
    icon: this.getWeatherIcon(data.current.weather[0].icon),
    description: data.current.weather[0].description,
    forecast: data.daily,
    // daily: data.daily,
    // hourly:data.hourly
    resStatus:200
  });

  this.getWeatherIcon(this.weatherIcon, data.current.weather[0].id);
}

 getWeatherIcon(icons, rangeId){
  switch(true){
    case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
  }
 }

 getWeather = async(e) => {

  e.preventDefault();

  const city = e.target.elements.city.value;
  //const country = e.target.elements.country.value;

  if(city){
    const api_call = await fetch(`${apiKey.base}weather?APPID=${apiKey.key}&q=${city},us&units=imperial`);
    const forecast_call = await fetch(`${apiKey.base}forecast?APPID=${apiKey.key}&q=${city},us&units=imperial&cnt=360`);
    const res = await api_call.json();
    const for_res = await forecast_call.json();

    if(api_call.status===200){

      let days=for_res.list;

      let forIcons=[];

      for (var fIcon = 0; fIcon < days.length; fIcon++) {
        forIcons.push(days[fIcon].weather[0].icon);
      }

      this.setState({
        date:currentDate(new Date()),
        city:`${res.name}`,
        temp:Math.round(res.main.temp),
        temp_max:Math.round(res.main.temp_max),
        temp_min:Math.round(res.main.temp_min),
        description:res.weather[0].description,
        icon: this.getWeatherIcon(res.weather[0].icon),
        error:false,
        resStatus:api_call.status
      });

      this.getWeatherIcon(this.weatherIcon, res.weather[0].id);

      }else{ 

        this.setState({resStatus: api_call.status})

      }

    } else {
      this.setState({error:true})
    }
}
  render(){
    return(
      <div className='App'>
        <h1>React Weather</h1>
        <Form loadweather={this.getWeather} resStatus={this.state.resStatus}/>
        <Weather 
        date={this.state.date}
        city={this.state.city}
        temp={this.state.temp}
        temp_max={this.state.temp_max}
        temp_min={this.state.temp_min}
        description={this.state.description}
        weatherIcon={this.state.icon}/>
        <Forecast forecast={this.state.forecast} icon={this.weatherIcon}/>
      </div>
    );
  }
}

export default App;
