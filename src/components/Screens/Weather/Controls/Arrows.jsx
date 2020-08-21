import React from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

export default function () {
    const styles = makeStyles({
        root: {
            marginBottom: '30px'
        },
        rightButton: {
            textAlign: 'right'
        }
    })();
    return <Container className={styles.root} maxWidth='lg'>
        <Grid container direction="row" justify="space-between">
            <Grid item xs={2}>
                <Button variant="contained" color="primary">
                    <NavigateBeforeIcon />
                </Button>
            </Grid>
            <Grid className={styles.rightButton} item xs={2}>
                <Button variant="contained" color="primary">
                    <NavigateNextIcon />
                </Button>
            </Grid>
        </Grid>
    </Container>
}