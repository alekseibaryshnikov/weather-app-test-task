import React from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio, Grid, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { constants, changeDegree } from '../../../../redux/features/settingsReducer';
import PropTypes from 'prop-types';

Degrees.propTypes = PropTypes.shape({
    degrees: PropTypes.string
});

export default function Degrees(props) {
    const {degrees} = props;
    const dispatch = useDispatch();
    const styles = makeStyles({
        root: {
            width: '100%',
            padding: '30px 0'
        },
        group: {
            justifyContent: 'center'
        }
    })();

    return <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12}>
            <FormControl className={styles.root} component="fieldset">
                <RadioGroup className={styles.group} row aria-label="position" name="position" defaultValue="top">
                    <FormControlLabel
                        value={constants.CELCIUS}
                        control={<Radio color="primary" checked={degrees === constants.CELCIUS} />}
                        label="Celcius"
                        labelPlacement="end"
                        onClick={() => dispatch(changeDegree(constants.CELCIUS))}
                    />
                    <FormControlLabel
                        value={constants.FAHRENHEIT}
                        control={<Radio color="primary" checked={degrees === constants.FAHRENHEIT} />}
                        label="Fahrenheit"
                        labelPlacement="end"
                        onClick={() => dispatch(changeDegree(constants.FAHRENHEIT))}
                    />
                </RadioGroup>
            </FormControl>
        </Grid>
    </Grid>
}