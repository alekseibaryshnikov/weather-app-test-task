import React from 'react';
import Weather from '../Weather';
import { render, fireEvent, screen } from '../../../../testing-utils';
import '@testing-library/jest-dom/extend-expect';
import { createStore } from '@reduxjs/toolkit';
import { waitForDomChange } from '@testing-library/react';

import store from '../../../../redux/store';
import { Provider } from 'react-redux';
import { setWeather, setCards } from '../../../../redux/features/weatherReducer';

const mockState = {
    weather: {
        data: {
            type: 'Feature',
            geometry: {
                type: "Point",
                cooridnates: [
                    37.61438,
                    55.70887,
                    130
                ]
            },
            properties: {
                meta: {
                    updated_at: "2020-08-25T01:26:02Z",
                    utins: {
                        air_pressure_at_sea_level: "hPa",
                        air_temperature: "celsius",
                        cloud_area_fraction: "%",
                        precipitation_amount: "mm",
                        relative_humidity: "%",
                        wind_from_direction: "degrees",
                        wind_speed: "m/s"
                    }
                },
                timeseries: [
                    {
                        time: "2020-08-25T07:00:00Z",
                        data: {
                            instant: {
                                details: {
                                    air_pressure_at_sea_level: 1013.5,
                                    air_temperature: 20.6,
                                    cloud_area_fraction: 70.3,
                                    relative_humidity: 64.7,
                                    wind_from_direction: 241.1,
                                    wind_speed: 1.9
                                }
                            },
                            next_12_hours: {
                                summary: {
                                    symbol_code: "partlycloudy_day"
                                }
                            },
                            next_6_hours: {
                                summary: {
                                    symbol_code: "cloud"
                                }
                            },
                            next_1_hours: {
                                summary: {
                                    symbol_code: "cloud"
                                }
                            }
                        }
                    },
                    {
                        time: "2020-08-26T07:00:00Z",
                        data: {
                            instant: {
                                details: {
                                    air_pressure_at_sea_level: 1013.5,
                                    air_temperature: 20.6,
                                    cloud_area_fraction: 70.3,
                                    relative_humidity: 64.7,
                                    wind_from_direction: 241.1,
                                    wind_speed: 1.9
                                }
                            },
                            next_12_hours: {
                                summary: {
                                    symbol_code: "partlycloudy_day"
                                }
                            },
                            next_6_hours: {
                                summary: {
                                    symbol_code: "cloud"
                                }
                            },
                            next_1_hours: {
                                summary: {
                                    symbol_code: "cloud"
                                }
                            }
                        }
                    },
                    {
                        time: "2020-08-27T07:00:00Z",
                        data: {
                            instant: {
                                details: {
                                    air_pressure_at_sea_level: 1013.5,
                                    air_temperature: 20.6,
                                    cloud_area_fraction: 70.3,
                                    relative_humidity: 64.7,
                                    wind_from_direction: 241.1,
                                    wind_speed: 1.9
                                }
                            },
                            next_12_hours: {
                                summary: {
                                    symbol_code: "partlycloudy_day"
                                }
                            },
                            next_6_hours: {
                                summary: {
                                    symbol_code: "cloud"
                                }
                            },
                            next_1_hours: {
                                summary: {
                                    symbol_code: "cloud"
                                }
                            }
                        }
                    }
                ]
            }
        },
        cards: [
            {
                temperature: 18,
                pressure: 760,
                weatherType: "sun",
                date: "2020-08-25T07:00:00Z",
                degrees: "celcius",
            },
            {
                temperature: 19,
                pressure: 761,
                weatherType: "rain",
                date: "2020-08-26T07:00:00Z",
                degrees: "celcius",
            },
            {
                temperature: 20,
                pressure: 762,
                weatherType: "cloud",
                date: "2020-08-27T07:00:00Z",
                degrees: "celcius",
            }
        ]
    },
    settings: {
        degree: 'celcius',
        currentPage: 1,
        pageSize: 3,
        activeDateForCharts: null
    }
};

test('test rendering components', () => {
    const store = createStore(() => ({ ...mockState }))
    const { getByTestId } = render(<Weather />, { store });
    expect(getByTestId('DegreesComponent')).toBeTruthy();
    expect(getByTestId('ArrowsComponent')).toBeTruthy();
    expect(getByTestId('ListOfWeatherCardsComponent')).toBeTruthy();
});

test('test rendering error component', () => {
    const { getByTestId } = render(<Weather />);
    expect(getByTestId('NotFoundErrorComponent')).toBeTruthy();
});

test('test ChartComponent renderning and enable/disable chart', () => {
    const { getAllByTestId, getByTestId, rerender } = render(
        <Provider store={store}>
            <Weather />
        </Provider>
    )

    store.dispatch(setWeather(mockState.weather.data));
    store.dispatch(setCards());

    const cards = getAllByTestId('WeatherCardComponent');
    
    // Enable Chart by clicking ont the card
    fireEvent.click(cards[0]);
    expect(getByTestId('ChartComponent')).toBeTruthy();
    
    // Disable Chart by clicking on the same card.
    fireEvent.click(cards[0]);
    expect(() => getByTestId('ChartComponent')).toThrow();
});