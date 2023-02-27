import React from 'react'
import "./opensource.css"
import Spline from '@splinetool/react-spline';

export default function Opensource() {
  return (
            <div className='opensource'>
    <div className = "text-column">
            <h1>Opensource Graphics</h1>
            <p>
            During the 1990s, CAD was beginning to be widespread and accessible to even hobbyists. More reliable, cost-friendly software, such as AutoCAD and Solidworks, and the replacement of IGES with STEP file format. Furthermore, open-source software such as Blender was released, allowing for more commercial and local use.
            </p>
    </div>
    <Spline className = "spline-column spline"
        scene="https://prod.spline.design/vf0NYXgf4mce5cJQ/scene.splinecode" />
    </div>
  );
}

