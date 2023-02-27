import React from 'react'
import "./cad.css"
import Spline from '@splinetool/react-spline';

export default function CAD() {
  return (
    <div className='cad'>
       <Spline className = "spline-column spline"
        scene="https://prod.spline.design/gm6PCcJXZAkDIYZ3/scene.splinecode" />
        <div className = "text-column">
                <h1>CAD Modeling: Sketchpad</h1>
                <p>
                Sketchpad or dubbed “Robot Draftsman,” developed by Evan Sutherland, was the first three-dimensional graphic design system. Written for his thesis at MIT, it allowed users to sketch mechanical parts and the computer to calculate the design of the part. General Motors and IBM also collaborated to create DAC-1, Design Augmented by Computer, during this time, which was the first instance of computer visualization optimizing workflow.
                </p>
        </div>
    </div>
  );
}

