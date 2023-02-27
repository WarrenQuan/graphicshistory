import React from 'react'
import "./modern.css"
import Spline from '@splinetool/react-spline';

export default function Modern() {
  return (
    <div className='modern'>
        <Spline className = "spline-column spline"
        scene="https://prod.spline.design/469IVG3u7ntgSBPt/scene.splinecode" />
    <div className = "text-column">
            <h1>Modern Graphics</h1>
            <p>
            Automotive industries have continuously used CAD, as it creates accurate models and simulations. This is the same for the aerospace industries which eliminates mistakes and risks for aerodynamic calculations. Furthermore, 3D modeling has also revolutionized animation. Pixar movies have pushed what can be done, and modeling software has simplified the work and allowed capturing of dynamic scenes and imagery. 3D printing has turned the digital models we create into physical products, allowing for powerful uses. As AR and VR have been a rising trend, 3D models have been implemented in many immersive environments as well. 
            </p>
    </div>
    </div>
  );
}

