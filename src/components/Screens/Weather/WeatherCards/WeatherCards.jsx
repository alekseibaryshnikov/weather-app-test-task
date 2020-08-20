import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Container from '../../../Common/Container/Container';

export default function () {
    return <Container>
        <Grid container justify="center" spacing={2}>
            {[0, 1, 2].map((value) => (
                <Grid key={value} item>
                    <Card>
                        <CardContent>
                            asd
                            </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Container>;

}