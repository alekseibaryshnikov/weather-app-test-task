import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'
import weatherReducer from './redux/features/weatherReducer';
import settingsReducer from './redux/features/settingsReducer';

function render(
  ui,
  {
    initialState,
    store = configureStore({
      reducer: {
          weather: weatherReducer,
          settings: settingsReducer
      }
  }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }