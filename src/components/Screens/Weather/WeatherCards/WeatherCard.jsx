import React from 'react';
import PropTypes from 'prop-types';
import { Paper, makeStyles } from '@material-ui/core';

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
    const styles = makeStyles({
        root: {
            height: '100%',
            boxSizing: 'border-box',
            padding: 10
        }
    })();

    return <Paper className={styles.root}>
        <p>Temperature: {data.temperature}</p>
        <p>Pressure: {data.pressure}</p>
        <p>Weather: {data.weatherType}</p>
        <p>Date: {`${date.getDate()}.${date.getUTCMonth()}`}</p>
    </Paper>;
}