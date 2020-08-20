import React from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import Container from '../../../../Common/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentDegree, constants, changeDegree } from '../../../../../redux/features/settingsReducer';

export default function () {
    const dispatch = useDispatch();
    const currentDegree = useSelector(selectCurrentDegree);

    return <Container>
        <FormControl component="fieldset">
            <RadioGroup row aria-label="position" name="position" defaultValue="top">
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
    </Container>;
}