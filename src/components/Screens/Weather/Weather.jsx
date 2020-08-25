import React from 'react';
import ListOfWeatherCards from './WeatherCards/ListOfWeatherCards';
import Arrows from './Controls/Arrows';
import Degrees from './Controls/Degrees';
import Chart from './Chart';
import { useSelector } from 'react-redux';
import { selectCurrentDegree, selectPageSize, selectCurrentPage, selectActiveDateForCharts } from '../../../redux/features/settingsReducer';
import { selectCards, selectWeatherData } from '../../../redux/features/weatherReducer';
import NotFoundError from '../../Errors/NotFound';


export default function () {
    const cards = useSelector(selectCards);
    const currentDegrees = useSelector(selectCurrentDegree);
    const pageSize = useSelector(selectPageSize);
    const currentPage = useSelector(selectCurrentPage);
    const activeDateForCharts = useSelector(selectActiveDateForCharts);
    const weatherData = useSelector(selectWeatherData);
    const cardsAmount = cards ? cards.length : 0;

    if (!weatherData) {
        return <NotFoundError code={404} message="Can't fetch data from server.." />
    }

    return <>
        <Degrees degrees={currentDegrees} />
        <Arrows pageSize={pageSize} currentPage={currentPage} cardsAmount={cardsAmount} />
        <ListOfWeatherCards cards={cards} degrees={currentDegrees} currentPage={currentPage} pageSize={pageSize} />
        <Chart activeDateForCharts={activeDateForCharts} weatherData={weatherData} currentDegrees={currentDegrees} />
    </>
}