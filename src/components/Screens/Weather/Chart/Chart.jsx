import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function () {
    return <Grid container>
        <Grid item xs={12}>
            <Grid container justify='center'>
                <Grid item>
                    <Paper>
                    Chart
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
}