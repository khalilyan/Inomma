import React from 'react'
import './UnFocusAnimation.css'
import { data } from './data'

export default function UnfocusAnimation() {
  return (
    <div className='unFocusContainer' >
            {
              data.circles.map((item,index)=>{
                return <div key={index} className={'circle circle-'+index}>
                      <img src={item} draggable="false" alt='circle' />
                </div>
              })
            }
    </div>
  )
}
