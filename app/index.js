import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useTransition, animated } from 'react-spring';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useLocation,
} from 'react-router-dom';
import loadable from '@loadable/component';

import './index.scss';

import Wrapper from './util/wrapper/wrapper';
import Topbar from './util/navigation/navigation';

// Preload Sites
const ExampleOne = loadable( () => import( /* webpackChunkName: "example01" */ './examples/01_example/index' ) );
const HelloCube = loadable( () => import( /* webpackChunkName: "example02" */ './examples/02_own-example/index' ) );
const SplitText = loadable( () => import( /* webpackChunkName: "example03" */ './examples/03_split_text/index' ) );
const NotFound = loadable( () => import( /* webpackChunkName: "notFound" */ './util/NotFound/404' ) );

const App = () => {
	const location = useLocation();
	const transitions = useTransition( location, locationItem => locationItem.pathname, {
		from: { opacity: 0, transform: 'translate(100%, 0)' },
		enter: { opacity: 1, transform: 'translate(0%, 0)' },
		leave: { opacity: 0, transform: 'translate(-50%, 0)' },
	});

	useEffect( () => {
		// animation
		console.log( 'triggered animation', location.pathname );
	}, [location.pathname]);

	return (
		<>
			<Topbar />
			{transitions.map( ({ item, props, key }) => (
				<animated.div key={key} style={props}>
					<Switch location={item}>
						<Route exact path="/">
							<Wrapper>
								<HelloCube />
							</Wrapper>
						</Route>
						<Route path="/example_1">
							<Wrapper>
								<ExampleOne />
							</Wrapper>
						</Route>
						<Route path="/splitText">
							<Wrapper>
								<SplitText />
							</Wrapper>
						</Route>
						<Route path="*">
							<Wrapper>
								<NotFound />
							</Wrapper>
						</Route>
					</Switch>
				</animated.div>
			) )}
		</>
	);
};

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById( 'app' ),
);
