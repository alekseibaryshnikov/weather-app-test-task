import { createSlice } from '@reduxjs/toolkit';

export const constants = {
    CELCIUS: 'celcius',
    FAHRENHEIT: 'fahrenheit'
};

export const slice = createSlice({
    name: 'settings',
    initialState: {
        degree: constants.CELCIUS
    },
    reducers: {
        changeDegree: (state, action) => {
            state.degree = action.payload
        }
    }
});

export const { changeDegree } = slice.actions;

export const selectCurrentDegree = state => state.settings.degree;

export default slice.reducer;