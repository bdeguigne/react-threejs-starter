import React from 'react';
import Box from './Box';
import Controls from './Controls';

function Scene() {
    return (
        <group>
            <Controls />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
        </group>
    )
}

export default Scene
