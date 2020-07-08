import React, { useState, useEffect } from 'react';
import { useTrail, animated, config } from 'react-spring';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './index.scss';

export default () => {
	if ( typeof window !== 'undefined' ) {
		gsap.registerPlugin( ScrollTrigger );
		gsap.core.globals( 'ScrollTrigger', ScrollTrigger );
	}
	const defaultText = 'Lorem ipsum dolor sit amet consectetur!';
	const [text, setText] = useState( defaultText );
	const reset = () => {
		setText( defaultText );
	};

	const [toggle, setToggle] = useState( true );
	const [items, setItems] = useState( text.split( ' ' ) );

	useEffect( () => {
		console.log( 'useEffect triggered' );
		setItems( text.split( ' ' ) );
	}, [text]);

	const trail = useTrail( items.length, {
		config: config.slow,
		opacity: toggle ? 1 : 0,
		height: toggle ? 40 : 0,
		from: { opacity: 0, x: 20, height: 0 },
	});


	return (
		<div>
			<input onChange={e => setText( e.currentTarget.value )} value={text} />
			<button type="button" onClick={() => reset()}>Reset</button>
			<button type="button" onClick={() => setToggle( !toggle )}>Toggle Animation</button>
			<div className="bigBold">
				{trail.map( ({ x, height, ...rest }, index ) => (
					<animated.div
						key={index}
						className="trails-text"
						style={{ ...rest, transform: x.interpolate( x => `translate3d(0,${x}px,0)` ) }}
					>
						<animated.div style={{ height }}>{items[index]}</animated.div>
					</animated.div>
				) )}
			</div>
		</div>
	);
};
