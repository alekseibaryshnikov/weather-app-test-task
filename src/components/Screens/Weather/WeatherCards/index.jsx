import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '../../../Common/Container';
import WeatherCard from './WeatherCard';
import { useSelector, useDispatch } from 'react-redux';
import { selectCards, setCards, changeTemperatureType } from '../../../../redux/features/weatherReducer';
import { selectCurrentDegree } from '../../../../redux/features/settingsReducer';

export default function () {
    const cards = useSelector(selectCards);
    const degree = useSelector(selectCurrentDegree);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCards());
    }, []);

    useEffect(() => {
        dispatch(changeTemperatureType(degree));
    }, [degree])

    return <Container>
        <Grid container justify="center" spacing={2}>
            {cards && cards.map((value) => (
                <Grid item key={value.date}>
                    <WeatherCard data={value} />
                </Grid>
            ))}
        </Grid>
    </Container>;
}