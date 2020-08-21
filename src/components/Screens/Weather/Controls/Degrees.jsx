import React from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio, Grid, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentDegree, constants, changeDegree } from '../../../../redux/features/settingsReducer';

export default function () {
    const dispatch = useDispatch();
    const currentDegree = useSelector(selectCurrentDegree);
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
        <Grid item xs={3}>
            <FormControl className={styles.root} component="fieldset">
                <RadioGroup className={styles.group} row aria-label="position" name="position" defaultValue="top">
                    <FormControlLabel
                        value={constants.CELCIUS}
                        control={<Radio color="primary" checked={currentDegree === constants.CELCIUS} />}
                        label="Celcius"
                        labelPlacement="end"
                        onClick={() => dispatch(changeDegree(constants.CELCIUS))}
                    />
                    <FormControlLabel
                        value={constants.FAHRENHEIT}
                        control={<Radio color="primary" checked={currentDegree === constants.FAHRENHEIT} />}
                        label="Fahrenheit"
                        labelPlacement="end"
                        onClick={() => dispatch(changeDegree(constants.FAHRENHEIT))}
                    />
                </RadioGroup>
            </FormControl>
        </Grid>
    </Grid>
}