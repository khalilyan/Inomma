import React from 'react'
import './Shape.css'
import { useState } from 'react';
import { memo } from 'react';

export default memo(function Shape({ContainRef}) {
    const [cursorBehindX,setCursorBehindX] = useState();  
    const [cursorBehindY,setCursorBehindY] = useState();


    
   window.addEventListener('mousemove',(e)=>{
    setCursorBehindX(e.pageX-ContainRef.current.offsetLeft-50)
    setCursorBehindY(e.pageY-ContainRef.current.offsetTop-200)
   })
   
   
  return (
    <div className='shapeContain'>
        <div 
            className="Circle white"
            style={{
                 transform: `translate(${cursorBehindX}px,${cursorBehindY}px)`,
                 transition: 'all 0.5s',
                transitionTimingFunction: 'ease-out',
                }}
        ></div>
        <div
            className="Circle orange"
            style={{
                transform: `translate(${cursorBehindX}px,${cursorBehindY}px)`,
                transition: 'all 0.8s',
                transitionTimingFunction: 'ease-out',
            }}
        ></div>
        <div 
            className="Circle yellow"
            style={{
                transform: `translate(${cursorBehindX}px,${cursorBehindY}px)`,
                transition: 'all 1s',
                transitionTimingFunction: 'ease-out',
            }}
        ></div>
        <div 
            className="Circle blueBehind"
            style={{
                transform: `translate(${cursorBehindX}px,${cursorBehindY}px)`,
                transition: 'all 1.1s',
                transitionTimingFunction: 'ease-out',
            }}
        ></div>
    </div>
  )
})
