import React, { useState, useEffect } from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { prevoiusPage, nextPage } from '../../../../redux/features/settingsReducer';
import PropTypes from 'prop-types';

Arrows.propTypes = PropTypes.shape({
    currentPage: PropTypes.number,
    pageSize: PropTypes.number,
    cardsAmount: PropTypes.number
});

export default function Arrows(props) {
    const { currentPage, pageSize, cardsAmount } = props;

    const styles = makeStyles({
        root: {
            marginBottom: '30px'
        },
        rightButton: {
            textAlign: 'right'
        }
    })();

    const dispatch = useDispatch();
    const [previousPageDisabled, setPreviousPageDisabled] = useState(true);
    const [nextPageDisabled, setNextPageDisabled] = useState(true);

    useEffect(() => {
        setPreviousPageDisabled(currentPage <= 1);
        setNextPageDisabled(currentPage >= Math.ceil(cardsAmount/ pageSize))
    }, [cardsAmount, currentPage, pageSize]);

    return <Container className={styles.root} maxWidth='md'>
        <Grid container direction="row" justify="space-between" data-testid="ArrowsComponent">
            <Grid item xs={2}>
                <Button disabled={previousPageDisabled} variant="contained" color="primary" onClick={() => dispatch(prevoiusPage())}>
                    <NavigateBeforeIcon />
                </Button>
            </Grid>
            <Grid className={styles.rightButton} item xs={2}>
                <Button disabled={nextPageDisabled} variant="contained" color="primary" onClick={() => dispatch(nextPage(cardsAmount))}>
                    <NavigateNextIcon />
                </Button>
            </Grid>
        </Grid>
    </Container>
}