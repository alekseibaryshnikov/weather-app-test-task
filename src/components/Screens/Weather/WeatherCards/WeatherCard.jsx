import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';

WeatherCard.propTypes = PropTypes.shape({
    data: PropTypes.shape({
        temperature: PropTypes.number,
        pressure: PropTypes.number,
        weatherType: PropTypes.string,
        date: PropTypes.date
    })
});

export default function WeatherCard(props) {
    const { data } = props;
    const date = new Date(data.date);

    return <Card>
        <CardContent>
            <p>Temperature: {data.temperature}</p>
            <p>Pressure: {data.pressure}</p>
            <p>Weather: {data.weatherType}</p>
            <p>Date: {`${date.getDate()}.${date.getUTCMonth()}`}</p>
        </CardContent>
    </Card>;
}