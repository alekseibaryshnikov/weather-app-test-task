import { createSlice } from '@reduxjs/toolkit';
import WeatherDto from '../models/WeatherDto';
import { getWeather } from '../../api/yrNoApi';

export const slice = createSlice({
    name: 'weather',
    initialState: {},
    reducers: {
        setWeather: (state, action) => {
            state.data = { ...state, ...action.payload }
        }
    }
});

export const { setWeather } = slice.actions;

export const fetchWeather = () => {
    return async dispatch => {
        try {
            const weather = await getWeather();
            dispatch(setWeather(weather));
        } catch (error) {
            console.error(error);
        }
    };
}

export const selectWeatherData = state => state.weather.data;

export default slice.reducer;