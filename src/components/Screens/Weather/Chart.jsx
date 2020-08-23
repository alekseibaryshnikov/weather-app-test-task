import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

export default function () {
    const styles = makeStyles({
        root: {
            padding: 12
        }
    })();

    return <Container maxWidth="md">
        <Paper className={styles.root}>
            Chart
        </Paper>
    </Container>
}