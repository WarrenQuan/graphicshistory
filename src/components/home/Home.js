import React from 'react'
import "./home.css"
import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <div className='home'>
            <div className = "wrapper">
                <div className='text'>
                <h1>History of Computer Graphics</h1>
                <p>
                Made by Warren Quan
                </p>
                </div>
            </div>
            <Spline className="splines"
        scene="https://prod.spline.design/kcf4vfdlm7z8-OHd/scene.splinecode" />
    </div>
  );
}

