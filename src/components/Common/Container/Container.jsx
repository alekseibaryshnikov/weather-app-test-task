import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function Container (props) {
    const styles = makeStyles({
        root: {
            minWidth: 275,
            marginBottom: 12,
            marginTop: 12
        }
    })();

    return <Grid container className={styles.root}>
        <Grid item xs={12}>
            <Grid container justify='center'>
                <Grid item>
                    {props.children}
                </Grid>
            </Grid>
        </Grid>
    </Grid>
}