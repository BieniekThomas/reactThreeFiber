import React, { useState, useRef } from 'react';
import { useFrame } from 'react-three-fiber';

const box = ( props ) => {
	const mesh = useRef();

	const [hovered, setHover] = useState( false );
	const [active, setActive] = useState( false );

	useFrame( () => ( mesh.current.rotation.x = mesh.current.rotation.y += 0.01 ) );

	return (
		<mesh
			{...props}
			ref={mesh}
			scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
			onClick={() => setActive( !active )}
			onPointerOver={() => setHover( true )}
			onPointerOut={() => setHover( false )}
		>
			<boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
			<meshStandardMaterial
				attach="material"
				color={hovered ? 'hotpink' : 'orange'}
			/>
		</mesh>
	);
};

export default box;
