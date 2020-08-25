import React from 'react';
import Chart from '../Chart';
import { render } from '../../../../testing-utils';
import '@testing-library/jest-dom/extend-expect';

const mockData = {
    activeDateForCharts: new Date().getTime(),
    weatherData: {
        properties: {
            timeseries: [

            ]
        }
    },
    currentDegrees: 'celcius'
};

test('test data rendering', () => {
    const { container } = render(<Chart {...mockData}/>);
    expect(container.querySelector('div')).toBeTruthy();
    expect(container.querySelector('svg')).toBeTruthy();
});
