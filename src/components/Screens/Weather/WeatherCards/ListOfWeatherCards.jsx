import React, { useEffect } from 'react';
import { Grid, Container, makeStyles } from '@material-ui/core';
import WeatherCard from './WeatherCard';
import { useDispatch } from 'react-redux';
import { setCards, changeTemperatureType } from '../../../../redux/features/weatherReducer';
import PropTypes from 'prop-types';

ListOfWeatherCards.propTypes = PropTypes.shape({
    cards: PropTypes.object,
    degrees: PropTypes.string
});

export default function ListOfWeatherCards(props) {
    const { cards, degrees } = props;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCards());
    }, []);

    useEffect(() => {
        dispatch(changeTemperatureType(degrees));
    }, [degrees])

    const styles = makeStyles({
        root: {
            marginBottom: '30px'
        }
    })();

    return <Container className={styles.root} maxWidth='lg'>
        <Grid container justify='center' alignItems='stretch' spacing={2}>
            {cards && cards.slice(0, 3).map((value) => (
                <Grid item key={value.date} xs={2}>
                    <WeatherCard data={value} />
                </Grid>
            ))}
        </Grid>
    </Container>;
}