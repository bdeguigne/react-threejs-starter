import React from 'react';
import "./App.css"
import { Canvas } from '@react-three/fiber';
import Scene from "./components/3D/Scene";

import Content from './components/Content/Content/Content';

const App = () => {
  return (
    <>
      <Canvas  camera={{fov: 60, near: 1.0, far: 1000.0, position: [75, 20, 0]}} shadows>
        <Scene />
      </Canvas>

      <Content />
    </>
  );
}

export default App;
