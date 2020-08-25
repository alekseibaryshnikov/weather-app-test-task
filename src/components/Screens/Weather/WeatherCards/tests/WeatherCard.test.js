import React from 'react';
import WeatherCard from '../WeatherCard';
import { render } from '../../../../../testing-utils';
import '@testing-library/jest-dom/extend-expect';

const mockData = {
    temperature: 12,
    pressure: 1023,
    weatherType: 'cloudy',
    date: new Date()
};

test('test data rendering', () => {
    const { date } = mockData;
    const { getByText } = render(<WeatherCard data={mockData} />);
    expect(getByText('1023')).toBeTruthy();
    expect(getByText('12°')).toBeTruthy();
    expect(getByText('cloudy')).toBeTruthy();
    expect(getByText(date.toLocaleDateString())).toBeTruthy();
});
