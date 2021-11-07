import React from 'react';
import classes from './WeeklyForecastItem.module.scss';

const WeeklyForecastItem = ({date, temp}) => {
   const tempCelsius = Math.round(temp - 273.15);
   const temperature = tempCelsius > 0 ? `+${tempCelsius}` : tempCelsius;
   const dayOfTheWeek = new Date(date.slice(0, 10)).getDay();

   const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
   ];

   return (
      <div className={classes['WeeklyForecastItem']}>
         <div className="info">
            <h2>{days[dayOfTheWeek]}</h2>
            <h2>{temperature}°С</h2>
         </div>
      </div>
   );
};

export default WeeklyForecastItem;