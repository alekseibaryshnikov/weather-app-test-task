import React, { useState, useEffect } from 'react';
import { Grid, Container, makeStyles } from '@material-ui/core';
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

    const styles = makeStyles({
        root: {
            marginBottom: '30px'
        }
    })();

    return <Container className={styles.root} maxWidth='lg'>
        <Grid container justify='space-between' spacing={2}>
            {cards && cards.map((value) => (
                <Grid item key={value.date} xs={2}>
                    <WeatherCard data={value} />
                </Grid>
            ))}
        </Grid>
    </Container>;
}