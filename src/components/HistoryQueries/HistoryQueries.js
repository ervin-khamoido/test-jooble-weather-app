import React from 'react';
import { useSelector } from 'react-redux';

import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import classes from './HistoryQueries.module.scss';
import {useActions} from '../../hooks/useActions';

const HistoryQueries = () => {
   const {error, loading, lastQuieries} = useSelector(state => state.forecast);
   const {fetchForecast} = useActions();
   const {fetchWeeklyForecast} = useActions();
   
   const repeatedRequestHandler = (city) => {
      fetchForecast(city);
      fetchWeeklyForecast(city);
   };

   if (error) {
      return (
         <div className={classes['HistoryQueries']}>
            <Error error={error} />
         </div>
      )
   }

   if (loading) {
      return (
         <div className={classes['HistoryQueries']}>
            <Loader />
         </div>
      )
   }

   return (
      <div className={classes['HistoryQueries']}>
         <h2>Last 10 quieries</h2>

         <ul>
            {lastQuieries.map((city, index) => 
               <li 
                  onClick={() => repeatedRequestHandler(city)} 
                  key={index}
               >
                  {city}
               </li>)}
         </ul>
      </div>

   );
};

export default HistoryQueries;