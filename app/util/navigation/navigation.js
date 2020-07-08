import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.scss';

export default () => (
	<div id="navigation">
		<nav>
			<NavLink exact to="/" activeClassName="active">
				HelloCubes
			</NavLink>
			<NavLink to="/example_1" activeClassName="active">
				Example_1
			</NavLink>
			<NavLink to="/splitText" activeClassName="active">
				SplitText
			</NavLink>
		</nav>
	</div>
);
