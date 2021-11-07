import { combineReducers } from "redux";
import { forecastReducer } from "./forecastReducer";
import { weeklyForecastReducer } from "./weeklyForecastReducer";

export const rootReducer = combineReducers({
   forecast: forecastReducer,
   weeklyForecast: weeklyForecastReducer
});