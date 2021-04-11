import React, { useState, useEffect } from 'react';
import Box from './Box';
import Controls from './Controls';
import Environement from './Environement';
import Plane from './Plane'

function Scene() {
    const [boxes, setBoxes] = useState([]);

    useEffect(() => {
        renderBoxes();
    }, [])

    const renderBoxes = () => {
        const boxesArray = [];
        for (let x = -8; x < 8; x++) {
            for (let y = -8; y < 8; y++) {
                boxesArray.push(<Box position={[Math.random() + x * 5, Math.random() * 4.0 + 2.0, Math.random() + y * 5]} />);
            }
        }

        setBoxes(boxesArray);
    }
    return (
        <group>
            <Environement />
            <ambientLight intensity={0.5} />
            <directionalLight
                color="white"
                target-position={[0, 0, 0]}
                intensity={1}
                position={[20, 100, 10]}
                castShadow
                shadow-bias={-0.001}
                shadow-mapSize-height={2048}
                shadow-mapSize-width={2048}
                shadow-camera-near={0.1}
                shadow-camera-far={500.0}
                shadow-camera-left={100}
                shadow-camera-right={-100}
                shadow-camera-top={100}
                shadow-camera-bottom={-100}
            />
            <Controls />
            <Plane rotation={[-Math.PI / 2, 0, 0]} />
            <Box position={[-1.2, 1, 0]} />
            {boxes.map(rbox => rbox)}

        </group>
    )
}

export default Scene
