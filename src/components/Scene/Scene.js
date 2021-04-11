import React, { useEffect } from 'react';
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import "./scene.css"

const Scene = () => {
    let scene, container, camera, renderer, cube, controls;

    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    useEffect(() => {
        init()

        window.addEventListener("resize", handleWindowResize);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const init = () => {
        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Controls
        controls = new OrbitControls(camera, container)
        controls.enableDamping = true

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        renderer = new THREE.WebGLRenderer();
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        container.appendChild(renderer.domElement);

        animate();
    }

    const animate = function () {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        controls.update();

        renderer.render(scene, camera);
    };

    const handleWindowResize = () => {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight

        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    return <div
        ref={(containerRef) => {
            container = containerRef;
        }}
        className="webgl">
    </div>
}

export default Scene;