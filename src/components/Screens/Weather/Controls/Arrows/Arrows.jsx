import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function () {
    const useStyles = makeStyles({
        root: {
            minWidth: 275,
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    });

    const classes = useStyles();

    return <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
            <Grid container justify='center'>
                <ArrowBackIosIcon />
                <ArrowForwardIosIcon />
            </Grid>
        </Grid>
    </Grid>
}