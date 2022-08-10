import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import { OrbitControls } from '@react-three/drei';
import Funko from "../Model3d/Funko";


export const Model3d = () => {
    const [boxPosition, setBoxPosition] = useState([0,-7,-7])
    const [boxSize, setBoxSize] = useState([1,1,1])
    const [boxRotation, setBoxRotation] = useState([0,0,0])
    //const [boxAnimation, setBoxAnimation] = useState("")
  
    const handleReposition = (e) => {
      const newPosition = [...boxPosition]
      newPosition[e.target.name] = e.target.value
      setBoxPosition(newPosition)
    }
  
    const handleResize = (e) => {
      const newSize = [...boxSize]
      newSize[e.target.name] = e.target.value
      setBoxSize(newSize)
    }
  
    const handleRotation = (e) => {
      const newRotation = [...boxRotation]
      newRotation[e.target.name] = e.target.value
      setBoxRotation(newRotation)
    }
  
    // const handleAnimation = (e) => {
    //   setBoxAnimation(e.target.value)
    // }
  
    return (
      <div >
        {/* <label>X-Position</label>
        <input type='number' value={boxPosition[0]} name="0" onChange={handleReposition} />
        <label>Y-Position</label>
        <input type='number' value={boxPosition[1]} name="1" onChange={handleReposition} />
        <label>Z-Position</label>
        <input type='number' value={boxPosition[2]} name="2" onChange={handleReposition} />
        <label>Width</label>
        <input type='number' value={boxSize[0]} name="0" onChange={handleResize} />
        <label>Height</label>
        <input type='number' value={boxSize[1]} name="1" onChange={handleResize} />
        <label>Depth</label>
        <input type='number' value={boxSize[2]} name="2" onChange={handleResize} />
        <label>pitch</label>
        <input type='number' value={boxRotation[0]} name="0" onChange={handleRotation} />
        <label>yaw</label>
        <input type='number' value={boxRotation[1]} name="1" onChange={handleRotation} />
        <label>roll</label>
        <input type='number' value={boxRotation[2]} name="2" onChange={handleRotation} />
        <select name="animation">
          <option value="">No animation</option>
          <option value="">Spinner</option>
          <option value="">HeartBeat</option>
          <option value="">Camaleon</option>
          <option value=""></option>
        </select> */}
        <div >
        <Canvas style={{height:"400px"}}>
          <OrbitControls />
          {/* <ambientLight intensity={0.1} /> */}
          <directionalLight color={0xFFFFFF} position={[0, 0, 5]} />
          {/* <directionalLight color={0x2C2C7C} position={[5, 0, 0]} /> */}
          <Funko newPos={boxPosition} />     
        </Canvas>
        </div>
      </div>
    );
  }
