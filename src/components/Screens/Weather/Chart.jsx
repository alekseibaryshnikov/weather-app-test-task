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
            
            const MARGIN = 30;
            const HEIGHT = 300;
            const WIDTH = ref.current.getBoundingClientRect().width;
            
            // Axis
            const svgElement = d3.select(ref.current)
                .append('svg')
                    .attr('width', WIDTH)
                    .attr('height', HEIGHT + MARGIN);
            const g = svgElement        
                .append('g')
                    .attr('transform', `translate(${MARGIN}, 0)`);
            const xScale = d3.scaleLinear()
                .domain([d3.min(timeseries, d => d.hour), d3.max(timeseries, d => d.hour) + 1])
                .range([0, WIDTH - MARGIN / 2])
                .nice();
            const yScale = d3.scaleLinear()
                .domain([d3.min(timeseries, d => d.temperature), d3.max(timeseries, d => d.temperature)])
                .range([HEIGHT, 0]);
            const axisGeneratorX = d3.axisBottom().scale(xScale).ticks(2);
            const axisGeneratorY = d3.axisLeft().scale(yScale);
            g.append('g')
                .attr('transform', `translate(0, ${HEIGHT})`)
                .call(axisGeneratorX);
            g.append('g')
                .call(axisGeneratorY);

            // Bars
            const x = d3.scaleBand()
                .domain(d3.range(timeseries.length))
                .range([1, WIDTH - MARGIN]);
            const y = d3.scaleLinear()
                .domain([0, d3.max(timeseries, d => d.temperature)]).nice()
                .range([HEIGHT, MARGIN]);
            g.append("g")
                .attr("fill", 'steelblue')
              .selectAll("rect")
              .data(timeseries)
              .join("rect")
                .attr("x", (_, i) => x(i))
                .attr("y", d => y(d.temperature))
                .attr("height", d => y(0) - y(d.temperature))
                .attr("width", x.bandwidth());
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