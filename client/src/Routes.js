import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './components/Home';
import PrivateRoutes from './components/PrivateRoute';
import Signin from './components/Signin';
import Signup from './components/Signup';

class Routes extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/signup" component={Signup} />
					<Route path="/signin" component={Signin} />
				</Switch>
			</div>
		);
	}
}

export default Routes;