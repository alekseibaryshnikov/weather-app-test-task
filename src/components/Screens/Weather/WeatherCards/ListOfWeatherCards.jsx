import React, { useEffect, useState } from 'react';
import { Grid, Container, makeStyles } from '@material-ui/core';
import WeatherCard from './WeatherCard';
import { useDispatch } from 'react-redux';
import { setCards, changeTemperatureType } from '../../../../redux/features/weatherReducer';
import PropTypes from 'prop-types';

ListOfWeatherCards.propTypes = PropTypes.shape({
    cards: PropTypes.object,
    degrees: PropTypes.string,
    pageSize: PropTypes.number,
    currentPage: PropTypes.number
});

export default function ListOfWeatherCards(props) {
    const { cards, degrees, currentPage, pageSize } = props;
    const dispatch = useDispatch();
    const [slicedCards, setSlicedCards] = useState([]);

    useEffect(() => {
        dispatch(setCards());
    }, []);

    useEffect(() => {
        dispatch(changeTemperatureType(degrees));
    }, [degrees])

    useEffect(() => {
        if (cards) {
            const page = currentPage - 1 >= 0 ? currentPage - 1 : 0;
            setSlicedCards(cards.slice(page, pageSize + page));
        }
    }, [currentPage, pageSize, cards])

    const styles = makeStyles({
        root: {
            marginBottom: '30px'
        }
    })();

    return <Container className={styles.root} maxWidth='lg'>
        <Grid container justify='center' alignItems='stretch' spacing={2}>
            {slicedCards && slicedCards.map((value) => (
                <Grid item key={value.date} xs={2}>
                    <WeatherCard data={value} />
                </Grid>
            ))}
        </Grid>
    </Container>;
}