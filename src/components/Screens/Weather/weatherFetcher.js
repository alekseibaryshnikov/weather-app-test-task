import { getWeather } from '../../../api/yrNoApi';

export const fetchWeather = () => {
    return async (dispatch, getState) => {
        try {
            const oldWeather = getState();
            const weather = await getWeather();
            dispatch({...oldWeather, ...weather});
        } catch (error) {
            console.error(error);
        }
    };
}