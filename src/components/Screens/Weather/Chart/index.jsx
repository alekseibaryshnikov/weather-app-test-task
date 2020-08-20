import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '../../../Common/Container';

export default function () {
    const styles = makeStyles({
        root: {
            padding: 12
        }
    })();

    return <Container>
        <Paper className={styles.root}>
            Chart
        </Paper>
    </Container>
}