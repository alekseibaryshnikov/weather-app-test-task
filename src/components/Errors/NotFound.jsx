import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

NotFoundError.propTypes = {
    code: PropTypes.number,
    message: PropTypes.string
};

export default function NotFoundError(props) {
    const {code, message} = props;

    return <Grid container data-testid='NotFoundErrorComponent'>
        <Grid item xs={12}>
            <h1>Something goes wrong.. :(</h1>
            <h3>Error code: {code}</h3>
            <p>{message}</p>
        </Grid>
    </Grid>
}