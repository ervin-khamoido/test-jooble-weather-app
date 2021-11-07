import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useActions } from '../../hooks/useActions';
import classes from './WeeklyForecast.module.scss';
import WeeklyForecastItem from './WeeklyForecastItem/WeeklyForecastItem';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';

const WeeklyForecast = () => {
   const {city} = useSelector(state => state.forecast);
   const {weeklyForecast, error, loading} = useSelector(state => state.weeklyForecast);
   const {fetchWeeklyForecast} = useActions();

   useEffect(() => {
      fetchWeeklyForecast(city);
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   if (loading) {
      return (
         <div className={classes['WeeklyForecast']}>
            <Loader />
         </div>
      )
   }

   if (error) {
      return (
         <div className={classes['WeeklyForecast']}>
            <Error error={error} />
         </div>
      )
   }
   
   return (
      <div className={classes['WeeklyForecast']}>
         {weeklyForecast.map(item => (
            <WeeklyForecastItem key={item.dt} date={item.dt_txt} temp={item.main.temp} />
         ))}
      </div>
   );
};

export default WeeklyForecast;