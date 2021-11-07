import React from "react";

import HistoryQueries from "./components/HistoryQueries/HistoryQueries";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import SearchInput from "./components/SearchInput/SearchInput";
import WeeklyForecast from "./components/WeeklyForecast/WeeklyForecast";

import Container from './hoc/Container/Container';

import classes from './App.module.scss';
import './index.module.scss';

function App() {
	return (
		<Container>
			<h1 className={classes['Title']}>Weather Forecast</h1>

			<div className={classes['RowHeader']}>
				<SearchInput />
				<Scoreboard />
			</div>

			<HistoryQueries />
			<WeeklyForecast />
		</Container>
	);
}

export default App;
