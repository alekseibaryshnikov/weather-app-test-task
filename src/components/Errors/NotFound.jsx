import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

NotFoundError.propTypes = PropTypes.shape({
    code: PropTypes.number,
    message: PropTypes.string
});

export default function NotFoundError(props) {
    const {code, message} = props;

    return <Grid container>
        <Grid xs={12}>
            <h1>Something goes wrong.. :(</h1>
            <h3>Error code: {code}</h3>
            <p>{message}</p>
        </Grid>
    </Grid>
}