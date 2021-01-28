import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Index from './components/Index';
import AboutUs from './components/AboutUs';

const Routes: React.FC = () => {
	return(
		<Switch>
			<Route path="/" exact component={Index} />
			<Route path="/sobre-nos" component={AboutUs} />
		</Switch>
	)
}

export default Routes;