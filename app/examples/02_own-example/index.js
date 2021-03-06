import './styles.scss';
import React from 'react';
import { Canvas } from 'react-three-fiber';
import Box from './box';

const scene = () => (
	<Canvas>
		<ambientLight />
		<pointLight position={[10, 10, 10]} />
		<Box position={[-1.2, -1.2, 0]} />
		<Box position={[1.2, -1.2, 0]} />
		<Box position={[1.2, 1.2, 0]} />
		<Box position={[-1.2, 1.2, 0]} />
	</Canvas>
);

export default scene;
