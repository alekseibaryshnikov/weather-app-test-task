import React from 'react';
import ListOfWeatherCards from './WeatherCards/ListOfWeatherCards';
import Arrows from './Controls/Arrows';
import Degrees from './Controls/Degrees';
import Chart from './Chart';
import { useSelector } from 'react-redux';
import { selectCurrentDegree, selectPageSize, selectCurrentPage } from '../../../redux/features/settingsReducer';
import { selectCards } from '../../../redux/features/weatherReducer';


export default function () {
    const cards = useSelector(selectCards);
    const currentDegrees = useSelector(selectCurrentDegree);
    const pageSize = useSelector(selectPageSize);
    const currentPage = useSelector(selectCurrentPage);
    const cardsAmount = cards ? cards.length : 0;

    return <>
        <Degrees degrees={currentDegrees} />
        <Arrows pageSize={pageSize} currentPage={currentPage} cardsAmount={cardsAmount} />
        <ListOfWeatherCards cards={cards} degrees={currentDegrees} currentPage={currentPage} pageSize={pageSize} />
        <Chart />
    </>
}