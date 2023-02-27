import React from 'react'
import "./prehistory.css"
import Spline from '@splinetool/react-spline';

export default function Prehistory() {
  return (
    <div className='prehistory'>
        <div className = "text-column">
                <h1>History of Prehistoric Graphics</h1>
                <p>
                Many concepts of 3D visualization dated from old geometrical ideas, such as coordinate geometry from the 1600s. Furthermore, matrix multiplication and linear algebra, fundamentals of computer graphics, were further developed at 18th Century with mathematician James Joseph Sylvester. 
                </p>
        </div>
        <Spline className = "spline-column spline"
        scene="https://prod.spline.design/eVMC4fTKChvlFRz8/scene.splinecode" />
    </div>
  );
}

