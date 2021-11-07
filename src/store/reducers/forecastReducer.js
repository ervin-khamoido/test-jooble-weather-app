import { FETCH_FORECAST, FETCH_FORECAST_ERROR, FETCH_FORECAST_SUCCESS } from "../types/forecastTypes";

const initialState = {
   city: 'Kyiv',
   error: null,
   loading: false,
   temp: null,
   lastQuieries: [],
   data: {}
}

const handlers = {
   [FETCH_FORECAST]: state => ({
      ...state,
      loading: true,
      error: null,
      data: {}
   }),

   [FETCH_FORECAST_SUCCESS]: (state, action) => {
      const data = action.payload;
      const lastQuieries = [data.name, ...state.lastQuieries];
      const temp = Math.round(data.main.temp - 273.15) > 0
         ? `+${Math.round(data.main.temp - 273.15)}`
         : Math.round(data.main.temp - 273.15);
      
      if (lastQuieries.length > 10) {
         lastQuieries.pop();
      }

      return {
         ...state,
         city: action.payload.name,
         loading: false,
         error: null,
         temp,
         data,
         lastQuieries
      }
   },

   [FETCH_FORECAST_ERROR]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
      data: {}
   }),

   DEFAULT: state => state
}

export const forecastReducer = (state = initialState, action) => {
   const handler = handlers[action.type] || handlers.DEFAULT;
   return handler(state, action)
}