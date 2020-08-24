import React, { useState, useEffect, useRef } from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Fab } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setActiveDateForCharts, constants } from '../../../redux/features/settingsReducer';
import * as d3 from 'd3';
import { fahrenheitToCelciusAndViceVers } from '../../../redux/features/weatherReducer';

Chart.propTypes = PropTypes.shape({
    activeDateForChart: PropTypes.number.isRequired,
    weatherData: PropTypes.object.isRequired,
    currentDegrees: PropTypes.string.isRequired
});

export default function Chart(props) {
    const { activeDateForCharts, weatherData, currentDegrees } = props;
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

            const MARGIN = ({ top: 30, right: 0, bottom: 30, left: 40 })
            const HEIGHT = 300;
            const WIDTH = ref.current.getBoundingClientRect().width;

            // SVG
            const svgElement = d3.select(ref.current)
                .append('svg')
                .attr('viewBox', [0, 0, WIDTH, HEIGHT]);

            const g = svgElement
                .append('g');

            // Bars
            const x = d3.scaleBand()
                .domain(d3.range(timeseries.length))
                .range([MARGIN.left, WIDTH - MARGIN.right])
                .padding(0.1);

            const y = d3.scaleLinear()
                .domain([0, d3.max(timeseries, d => d.temperature)]).nice()
                .range([HEIGHT - MARGIN.bottom, MARGIN.top]);

            g.append("g")
                .attr("fill", 'steelblue')
                .selectAll("rect")
                .data(timeseries)
                .join("rect")
                .attr("x", (_, i) => x(i))
                .attr("y", d => y(d.temperature))
                .attr("height", d => y(0) - y(d.temperature))
                .attr("width", x.bandwidth());

            // Axis
            const xScale = g => g
                .attr("transform", `translate(0,${HEIGHT - MARGIN.bottom})`)
                .call(d3.axisBottom(x).tickFormat(i => timeseries[i].hour).tickSizeOuter(0));

            const yScale = g => g
                .attr("transform", `translate(${MARGIN.left},0)`)
                .call(d3.axisLeft(y))
                .call(g => g.select(".domain").remove())
                .call(g => g.append("text")
                    .attr("x", -MARGIN.left)
                    .attr("y", 10)
                    .attr("fill", "currentColor")
                    .attr("text-anchor", "start")
                    .text('Temperature'));

            g.append('g').call(xScale);
            g.append('g').call(yScale);
        }
    }, [timeseries, ref]);

    useEffect(() => {
        if (currentDegrees) {
            console.log('asd')
            setTimeseries(timeseries.map(item => {
                return { ...item, temperature: fahrenheitToCelciusAndViceVers(item.temperature, currentDegrees) };
            }))
        }
    }, [currentDegrees])

    return <>{activeDateForCharts && <Container maxWidth="md">
        <Paper className={styles.root}>
            <Fab className={styles.fab} color="primary" aria-label="add" size='small' onClick={() => dispatch(setActiveDateForCharts(null))}>
                <CloseIcon />
            </Fab>
            <div ref={ref} className={styles.chart}></div>
        </Paper>
    </Container>}</>
}