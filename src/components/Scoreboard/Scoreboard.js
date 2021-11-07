import React from 'react';
import { useSelector } from 'react-redux';

import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import classes from './Scoreboard.module.scss';

const Scoreboard = () => {
	const {data, temp, loading, error} = useSelector(state => state.forecast);

   if (error) {
      return <Error error={error} />
   }

   if (loading) {
      return <Loader />
   }

   return (
      <h1 className={classes['Scoreboard']}>{data.name} (Today): {temp}°С</h1>
   )
}

export default Scoreboard;