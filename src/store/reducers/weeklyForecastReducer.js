import { FETCH_WEEKLY_FORECAST, FETCH_WEEKLY_FORECAST_ERROR, FETCH_WEEKLY_FORECAST_SUCCESS } from "../types/weeklyForecastTypes";

const initialState = {
   error: null,
   loading: false,
   weeklyForecast: []
}

const handlers = {
   [FETCH_WEEKLY_FORECAST]: (state) => ({
      ...state,
      loading: true,
      error: null,
      weeklyForecast: {}
   }),

   [FETCH_WEEKLY_FORECAST_SUCCESS]: (state, action) => {
      const weeklyForecast = [];

      for (let i = 0; i < action.payload.list.length; i += 8) {
         weeklyForecast.push(action.payload.list[i])
      }
      
      return {
         ...state,
         loading: false,
         error: null,
         weeklyForecast
      }
   },

   [FETCH_WEEKLY_FORECAST_ERROR]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
      weeklyForecast: {}
   }),

   DEFAULT: state => state
}

export const weeklyForecastReducer = (state = initialState, action) => {
   const handler = handlers[action.type] || handlers.DEFAULT;
   return handler(state, action)
}