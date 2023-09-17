import React from 'react'
import './Cursor.css'
import { useState } from 'react';
import { memo } from 'react';

export default memo(function Cursor() {
    const [cursorX,setCursorX] = useState();  
    const [cursorY,setCursorY] = useState();

   document.addEventListener('mousemove',(e)=>{
    setCursorX(e.clientX)
    setCursorY(e.clientY)
   })
   
  return (
        <div 
            className="cursor"
            style={{
                position: 'fixed',
                zIndex: 100000000,
                transform: `translate(${cursorX}px,${cursorY}px)`,
                transition: 'all 0.5s',
                transitionTimingFunction: 'ease-out'
            }}    
        ></div>
  )
})
