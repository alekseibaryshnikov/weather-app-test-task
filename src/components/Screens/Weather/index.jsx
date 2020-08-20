import React from 'react';
import WeatherCard from './WeatherCards';
import Arrows from './Controls/Arrows';
import Degrees from './Controls/Degrees';
import Chart from './Chart';

export default function () {
    return <>
        <Degrees />
        <Arrows />
        <WeatherCard />
        <Chart />
    </>
}