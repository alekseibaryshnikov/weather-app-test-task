import React, { useEffect, useState } from 'react';
import { Grid, Container, makeStyles } from '@material-ui/core';
import WeatherCard from './WeatherCard';
import { useDispatch } from 'react-redux';
import { setCards, changeTemperatureType } from '../../../../redux/features/weatherReducer';
import PropTypes from 'prop-types';

ListOfWeatherCards.propTypes = {
    cards: PropTypes.array,
    degrees: PropTypes.string,
    pageSize: PropTypes.number,
    currentPage: PropTypes.number
};

export default function ListOfWeatherCards(props) {
    const { cards, degrees, currentPage, pageSize } = props;
    const dispatch = useDispatch();
    const [slicedCards, setSlicedCards] = useState([]);

    useEffect(() => {
        dispatch(setCards());
    }, [dispatch]);

    useEffect(() => {
        dispatch(changeTemperatureType(degrees));
    }, [degrees, dispatch])

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

    return <Container className={styles.root} maxWidth='md' data-testid='ListOfWeatherCardsComponent'>
        <Grid container justify='center' alignItems='stretch' spacing={2}>
            {slicedCards && slicedCards.map((value, idx) => (
                <Grid item key={`${idx}-${value.date}`} sm={4} xs={12}>
                    <WeatherCard data={value} />
                </Grid>
            ))}
        </Grid>
    </Container>;
}