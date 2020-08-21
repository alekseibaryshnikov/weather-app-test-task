import React from 'react';
import ListOfWeatherCards from './WeatherCards/ListOfWeatherCards';
import Arrows from './Controls/Arrows';
import Degrees from './Controls/Degrees';
import Chart from './Chart';

export default function () {
    return <>
        <Degrees />
        <Arrows />
        <ListOfWeatherCards />
        <Chart />
    </>
}