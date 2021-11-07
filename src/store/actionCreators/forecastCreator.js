import axios from "axios";
import { FETCH_FORECAST, FETCH_FORECAST_ERROR, FETCH_FORECAST_SUCCESS } from "../types/forecastTypes";
import { FETCH_WEEKLY_FORECAST, FETCH_WEEKLY_FORECAST_ERROR, FETCH_WEEKLY_FORECAST_SUCCESS } from "../types/weeklyForecastTypes";

export const fetchForecast = (city) => {
   return async (dispatch) => {
      try {
         dispatch({type: FETCH_FORECAST});

         const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ab1f82573e4aeaa664a1c2118a4f0b24`);

         dispatch({type: FETCH_FORECAST_SUCCESS, payload: response.data});
      } catch (error) {
         dispatch({
            type: FETCH_FORECAST_ERROR, 
            payload: 'An error occurred while loading forecast!'
         })
      }
   }
}

export const fetchWeeklyForecast = (city) => {
   return async (dispatch) => {
      try {
         dispatch({type: FETCH_WEEKLY_FORECAST});

         const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=ab1f82573e4aeaa664a1c2118a4f0b24`);
         
         dispatch({type: FETCH_WEEKLY_FORECAST_SUCCESS, payload: response.data});
      } catch (error) {
         dispatch({
            type: FETCH_WEEKLY_FORECAST_ERROR, 
            payload: 'An error occurred while loading weekly forecast!'
         })
      }
   }
}