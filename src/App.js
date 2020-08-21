import React, { useEffect, useState } from 'react';
import Loading from './components/Screens/Loading';
import Weather from './components/Screens/Weather/Weather';
import { fetchWeather, selectWeatherData } from './redux/features/weatherReducer';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const weatherData = useSelector(selectWeatherData);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  useEffect(() => {
    setLoaded(Boolean(weatherData));
  }, [weatherData])

  return <>
    {loaded ? <Weather /> : <Loading />} 
  </>;
}

export default App;
