import React from 'react';
import { Grid } from '@material-ui/core';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Card } from '@material-ui/core';
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
                <FormControl component="fieldset">
                    <RadioGroup row aria-label="position" name="position" defaultValue="top">
                        <FormControlLabel
                            value="Celcius"
                            control={<Radio color="primary" checked={true} />}
                            label="Celcius"
                            labelPlacement="right"
                        />
                        <FormControlLabel
                            value="Fahrenheit"
                            control={<Radio color="primary" />}
                            label="Fahrenheit"
                            labelPlacement="right"
                        />
                    </RadioGroup>
                </FormControl>
            </Grid>
        </Grid>
    </Grid>
}