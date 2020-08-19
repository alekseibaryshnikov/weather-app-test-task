import React, { useEffect, useState } from 'react';
import './App.css';
import Loading from './components/Screens/Loading/Loading';
import Weather from './components/Screens/Weather/Weather';
import { fetchWeather, selectWeatherData } from './redux/features/weatherReducer';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const weatherData = useSelector(selectWeatherData);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(fetchWeather());
  }, []);

  useEffect(() => {
    setLoaded(Boolean(weatherData));
  }, [weatherData])

  return (
    <div className="App">
      {loaded ? <Weather/> : <Loading />}
    </div>
  );
}

export default App;
