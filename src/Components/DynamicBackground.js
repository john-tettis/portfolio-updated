import React, { useEffect, useRef } from 'react';
import Sketch from "../Boid/Sketch";
import '../styles/DynamicBackground.css'
import p5 from 'p5';

const DynamicBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const sketch = Sketch(canvasRef.current)

    // Initialize p5 sketch
    const p = new p5(sketch, canvasRef.current);

    // Clean up p5 instance on component unmount
    return () => {
      p.remove();
    };
  }, []);

  return <div id="dynamic-background" ref={canvasRef}></div>;
};

export default DynamicBackground;
