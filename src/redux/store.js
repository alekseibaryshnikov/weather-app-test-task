import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './features/weatherReducer';

export default configureStore({
    reducer: {
        weather: weatherReducer
    }
});