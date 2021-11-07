import React, { useEffect, useState } from 'react';

import { useActions } from '../../hooks/useActions';
import classes from './SearchInput.module.scss';

const SearchInput = () => {
   const [city, setCity] = useState('Kyiv');
   const {fetchForecast} = useActions();
   const {fetchWeeklyForecast} = useActions();

	useEffect(() => {
		fetchForecast(city);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

   const searchHandler = (city) => {
      if (city) {
         fetchForecast(city);
         fetchWeeklyForecast(city);
         setCity('');
      }
   };

   return (
      <div className={classes['SearchWrapper']}>
         <div className={classes['InputWrapper']}>
            <input
               type="text"
               placeholder="City"
               value={city}
               onChange={e => setCity(e.target.value)}
            />
         </div>

         <button onClick={() => searchHandler(city)}>Search</button>
      </div>
   );
};

export default SearchInput;