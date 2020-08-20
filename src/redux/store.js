import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './features/weatherReducer';
import settingsReducer from './features/settingsReducer';

export default configureStore({
    reducer: {
        weather: weatherReducer,
        settings: settingsReducer
    }
});