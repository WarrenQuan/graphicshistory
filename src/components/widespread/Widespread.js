import React from 'react'
import "./widespread.css"
import Spline from '@splinetool/react-spline';

export default function Widespread() {
  return (
    <div className='widespread'>
        
        <Spline className = "spline-column spline"
        scene="https://prod.spline.design/l7VT8SnGkyBoH0Yc/scene.splinecode" />
    <div className = "text-column">
            <h1>Widespread Graphics</h1>
            <p>
            IBM PC allowed for the widespread use of CAD in more industries, including commercial and marketing businesses. Software like UniSolids CAD became more industry standard. This also came at a time when computers were cheaper and required less maintenance. Furthermore, AutoCAD was released in 1983 with many more developing throughout the rest of the decade. The development of the IGES file format allowed for the accessible transfer of 3D designs between different software. 
            </p>
    </div>
    </div>
  );
}

