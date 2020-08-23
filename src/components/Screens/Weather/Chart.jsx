import React, { useState, useEffect, useRef } from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Fab } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setActiveDateForCharts } from '../../../redux/features/settingsReducer';
import * as d3 from 'd3';

Chart.propTypes = PropTypes.shape({
    activeDateForChart: PropTypes.number.isRequired,
    weatherData: PropTypes.object
});

export default function Chart(props) {
    const { activeDateForCharts, weatherData } = props;
    const styles = makeStyles({
        root: {
            padding: 30,
            position: 'relative',
            '.bar': {
                fill: 'blue'
            }
        },
        fab: {
            right: -15,
            top: -15,
            position: 'absolute'
        },
        chart: {
            width: '100%'
        }
    })();
    const dispatch = useDispatch();
    const [timeseries, setTimeseries] = useState([]);

    const ref = useRef();

    useEffect(() => {
        if (weatherData && activeDateForCharts) {
            setTimeseries(weatherData.properties.timeseries.filter(item => {
                const activeDate = new Date(activeDateForCharts);
                const itemDate = new Date(item.time);

                return activeDate.getDate() === itemDate.getDate() && activeDate.getMonth() === itemDate.getMonth();
            }).map(item => {
                const { data: { instant: { details } } } = item;

                return {
                    temperature: details.air_temperature,
                    pressure: details.air_pressure_at_sea_level,
                    windSpeed: details.wind_speed,
                    windDirection: details.wind_from_direction,
                    humanity: details.relative_humidity,
                    clouds: details.cloud_area_fraction,
                    hour: new Date(item.time).getHours()
                };
            }));
        }

    }, [weatherData, activeDateForCharts]);

    useEffect(() => {
        if (ref.current) {
            ref.current.innerHTML = '';
            
            const temperatureList = timeseries.map(item => item.temperature);
            const hoursList = timeseries.map(item => item.hour);
            const { min: minHour, max: maxHour } = getMinAndMax(hoursList);
            const { min: minTemperature, max: maxTemperature } = getMinAndMax(temperatureList);
            const MARGIN = 30;
            const HEIGHT = (maxTemperature - minTemperature) * MARGIN;
            const WIDTH = ref.current.getBoundingClientRect().width;
            const svgElement = d3.select(ref.current)
                .append('svg')
                .attr('width', WIDTH)
                .attr('height', HEIGHT + MARGIN)
                .append('g')
                .attr('transform', `translate(${MARGIN}, 0)`);
            const xScale = d3.scaleLinear()
                .domain([minHour - 1, maxHour + 1])
                .range([0, WIDTH - MARGIN / 2]);
            const yScale = d3.scaleLinear()
                .domain([minTemperature, maxTemperature])
                .range([HEIGHT, 0]);
            const axisGeneratorX = d3.axisBottom().scale(xScale);
            const axisGeneratorY = d3.axisLeft().scale(yScale);
            svgElement.append('g').attr('transform', `translate(0, ${HEIGHT})`).call(axisGeneratorX);
            svgElement.append('g').call(axisGeneratorY);
        }
    }, [timeseries, ref]);

    return <>{activeDateForCharts && <Container maxWidth="md">
        <Paper className={styles.root}>
            <Fab className={styles.fab} color="primary" aria-label="add" size='small' onClick={() => dispatch(setActiveDateForCharts(null))}>
                <CloseIcon />
            </Fab>
            <div ref={ref} className={styles.chart}></div>
        </Paper>
    </Container>}</>
}

function getMinAndMax(arr) {
    return {
        min: Math.min.apply(null, arr),
        max: Math.max.apply(null, arr)
    }
}