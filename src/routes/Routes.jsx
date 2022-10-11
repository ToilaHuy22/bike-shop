import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Adventure from '../pages/Adventure';
import DirtJump from '../pages/DirtJump';
import Ebike from '../pages/Ebike';
import Junior from '../pages/Junior';
import Mtp from '../pages/Mtp';
import Road from '../pages/Road';
import Urban from '../pages/Urban';

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/adventure" component={Adventure} />
			<Route path="/dirt-jump" component={DirtJump} />
			<Route path="/e-bike" component={Ebike} />
			<Route path="/junior" component={Junior} />
			<Route path="/mtp" component={Mtp} />
			<Route path="/road" component={Road} />
			<Route path="/Urban" component={Urban} />
		</Switch>
	);
};

export default Routes;
