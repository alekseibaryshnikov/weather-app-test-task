import { createSlice } from '@reduxjs/toolkit';

export const constants = {
    CELCIUS: 'celcius',
    FAHRENHEIT: 'fahrenheit'
};

export const slice = createSlice({
    name: 'settings',
    initialState: {
        degree: constants.CELCIUS,
        currentPage: 1,
        pageSize: 3,
        activeDateForCharts: null
    },
    reducers: {
        changeDegree(state, action) {
            state.degree = action.payload
        },
        nextPage(state, action) {
            const itemAmount = action.payload;
            const pageAmount = Math.ceil(itemAmount / state.pageSize);
            const nextPageNumber = state.currentPage + 1;

            state.currentPage = nextPageNumber > pageAmount ? state.currentPage : nextPageNumber;
        },
        prevoiusPage(state) {
            const previousPage = state.currentPage - 1;

            state.currentPage = previousPage > 0 ? previousPage : state.currentPage;
        },
        setActiveDateForCharts(state, action) {
            if (action.payload == null) {
                state.activeDateForCharts = null;
            } else {
                const payloadDate = new Date(action.payload).getTime();
                const stateDate = new Date(state.activeDateForCharts).getTime();

                state.activeDateForCharts = payloadDate === stateDate ? null : payloadDate;
            }
        }
    }
});

export const { changeDegree, nextPage, prevoiusPage, setActiveDateForCharts } = slice.actions;

export const selectCurrentDegree = state => state.settings.degree;
export const selectCurrentPage = state => state.settings.currentPage;
export const selectPageSize = state => state.settings.pageSize;
export const selectActiveDateForCharts = state => state.settings.activeDateForCharts;

export default slice.reducer;