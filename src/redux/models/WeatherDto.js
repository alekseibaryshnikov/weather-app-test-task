// import PropTypes from 'prop-types';

// const Geometry = {
//     type: PropTypes.string,
//     coordinates: PropTypes.arrayOf(PropTypes.number),
// }

// const Meta = {
//     updated_at: PropTypes.string,
//     units: Units
// }

// const Units = {
//     air_pressure_at_sea_level: PropTypes.string,
//     air_temperature: PropTypes.string,
//     cloud_area_fraction: PropTypes.string,
//     precipitation_amount: PropTypes.string,
//     relative_humidity: PropTypes.string,
//     wind_from_direction: PropTypes.string,
//     wind_speed: PropTypes.string
// }

// const Timeseries = {
//     time: PropTypes.string,
//     data: PropTypes.shape({
//         instant: PropTypes.shape({
//             details: PropTypes.shape({
//                 air_pressure_at_sea_level: PropTypes.number,
//                 air_temperature: PropTypes.number,
//                 cloud_area_fraction: PropTypes.number,
//                 relative_humidity: PropTypes.number,
//                 wind_from_direction: PropTypes.number,
//                 wind_speed: PropTypes.number
//             }),
//             next_12_hours: NextHours,
//             next_6_hours: NextHours,
//             next_1_hours: NextHours
//         })
//     })
// }

// const NextHours = {
//     summary: PropTypes.shape({
//         symbol_code: PropTypes.string
//     }),
//     details: PropTypes.shape({
//         precipitation_amount: PropTypes.number
//     })
// };

// export default {
//     type: PropTypes.string,
//     geometry: Geometry,
//     properties: {
//         meta: Meta,
//         timeseries: Timeseries
//     }
// };

// export { Geometry, Meta, Units, Timeseries, NextHours };