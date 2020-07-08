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

// const fov = 75;
// const aspect = 2; // the canvas default
// const near = 0.1;
// const far = 5;
// const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
// camera.position.z = 2;
// const scene = new THREE.Scene();

// const boxWidth = 1;
// const boxHeight = 1;
// const boxDepth = 1;
// const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
// const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 });
// const cube = new THREE.Mesh(geometry, material);

// scene.add(cube);

// return (
//   <div id="cube">
//     <Canvas camera={camera}></Canvas>Hello Cube
//   </div>
// );
// };

// export default helloCube;
