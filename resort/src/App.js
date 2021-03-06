import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "./pages/Home";
import Error from "./pages/Error";
import SingleRoom from "./pages/SingleRoom";
import Rooms from "./pages/Rooms";
import Navbar from "./components/Navbar";

import './App.css';

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/rooms" component={Rooms} />
				<Route exact path="/rooms/:slug" component={SingleRoom} />
				<Route component={Error}/>
			</Switch>
		</React.Fragment>
	);
}

export default App;
