import React, { useRef } from 'react'

function Plane(props) {
    const mesh = useRef()

    return (
        <mesh
            {...props}
            receiveShadow
            ref={mesh}
        >
            <planeGeometry args={[100, 100, 10, 10]} />
            <meshStandardMaterial  attach="material" color="white" />
        </mesh>
    )
}

export default Plane
