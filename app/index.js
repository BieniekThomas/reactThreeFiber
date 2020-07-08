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
const ExampleOne = loadable( () => import( /* webpackPrefetch: true */ './examples/01_example/index' ) );
const HelloCube = loadable( () => import( /* webpackPrefetch: true */ './examples/02_own-example/index' ) );
const SplitText = loadable( () => import( /* webpackPrefetch: true */ './examples/03_split_text/index' ) );
const NotFound = loadable( () => import( /* webpackPrefetch: true */ './util/NotFound/404' ) );

const App = () => {
	const location = useLocation();
	const transitions = useTransition( location, locationItem => locationItem.pathname, {
		from: { opacity: 0, transform: 'translate(100%, 0)' },
		enter: { opacity: 1, transform: 'translate(0%, 0)' },
		leave: { opacity: 0, transform: 'translate(-50%, 0)' },
	});

	useEffect( () => {
		// animation
		console.log( 'triggered animation' );
	}, [location]);

	return (
		<>
			<Topbar />
			<Wrapper>
				{transitions.map( ({ item, props, key }) => (
					<animated.div key={key} style={props}>
						<Switch location={item}>
							<Route exact path="/" component={HelloCube} />
							<Route path="/example_1" component={ExampleOne} />
							<Route path="/splitText" component={SplitText} />
							<Route path="*" component={NotFound} />
						</Switch>
					</animated.div>
				) )}
			</Wrapper>
		</>
	);
};

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById( 'app' ),
);
