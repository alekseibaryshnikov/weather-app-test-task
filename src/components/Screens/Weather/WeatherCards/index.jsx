import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '../../../Common/Container';
import WeatherCard from './WeatherCard';
import { useSelector } from 'react-redux';
import { selectWeatherData } from '../../../../redux/features/weatherReducer';


export default function () {
    const weatherData = useSelector(selectWeatherData);
    const cards = prepareCards(weatherData);

    return <Container>
        <Grid container justify="center" spacing={2}>
            {[0, 1, 2].map((value) => (
                <Grid item key={value}>
                    <WeatherCard />
                </Grid>
            ))}
        </Grid>
    </Container>;
}

function prepareCards(weatherData) {
    const cards = [];
    const today = new Date();

    for (let i = 0; i < 5; i++) {
        if (i > 0) {
            today.setDate(today.getDate() + 1);
        }

        const tmp = summarize(today, weatherData);
        cards.push(tmp)
    }

    return cards;
}

function summarize(referenceDate, weatherData) {
    const summarizedDay = weatherData.properties.timeseries.filter(item => {
        const itemDate = new Date(item.time);
        const equalDates = itemDate.getFullYear() === referenceDate.getFullYear() &&
            itemDate.getMonth() === referenceDate.getMonth() &&
            itemDate.getDate() === referenceDate.getDate();
        const dayTime = itemDate.getHours() > 10 && itemDate.getHours() < 20;

        return equalDates && dayTime;
    }).reduce((acc, curr, idx, src) => {
        const { data: { instant: { details: { air_temperature, air_pressure_at_sea_level } } } } = curr;

        if (idx === 0) {
            const middle = src[Math.floor(src.length / 2)];
            const { data: { next_6_hours: { summary: { symbol_code } } } } = middle;
            acc.weatherType = symbol_code;
            acc.date = referenceDate;
        }
        
        acc.temperature = air_temperature + acc.temperature;
        acc.pressure = air_pressure_at_sea_level + acc.pressure;
        acc.counter = acc.counter + 1;
        acc.date = acc.date ? acc.date : referenceDate;

        return acc;
    }, { temperature: 0, pressure: 0, counter: 0, date: null, weatherType: null });

    return {
        temperature: Math.round(summarizedDay.temperature / summarizedDay.counter),
        pressure: Math.round(summarizedDay.pressure / summarizedDay.counter),
        weatherType: summarizedDay.weatherType,
        date: summarizedDay.date
    };
}