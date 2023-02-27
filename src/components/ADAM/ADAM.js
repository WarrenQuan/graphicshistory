import React from 'react'
import "./adam.css"
import Spline from '@splinetool/react-spline';

export default function ADAM() {
  return (
    <div className='adam'>
    <div className = "text-column">
            <h1>ADAM, Research, Teapot</h1>
            <br></br>
            <p>
            ADAM, a new CAD system released in 1971, promoted the accessibility of 3D modeling. Furthermore, universities were researching advancements in rendering and visualization. Specifically, Gouraud and Phong developed more efficient technologies, algorithms, and lighting models at the University of Utah. To test graphical research, most used the Utah teapot model, pioneered by Martin Newell due to its variety of structures, complex shadows, and structure.
            </p>
    </div>
            <Spline className = "spline-column spline"
        scene="https://prod.spline.design/13wdQjFfkWeiCaaV/scene.splinecode" />
</div>
  );
}

