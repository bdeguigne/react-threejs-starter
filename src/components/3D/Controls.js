import React, { useRef } from 'react'
import { useFrame, useThree, extend } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

extend({ OrbitControls })

function Controls() {
    const controls = useRef()

    const {
        camera,
        gl: { domElement }
    } = useThree()

    /* Invoke the OrbitControls' update function on every frame */
    useFrame(() => controls.current.update())

    return <orbitControls args={[camera, domElement]} ref={controls} enableDamping/>
}

export default Controls