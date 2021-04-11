import React from 'react';
import "./App.css"
import { Canvas } from '@react-three/fiber';
import Scene from "./components/3D/Scene";

import Content from './components/Content/Content/Content';

const App = () => {
  return (
    <>
      <Canvas>
        <Scene />
      </Canvas>

      <Content />
    </>
  );
}

export default App;
