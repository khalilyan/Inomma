import React, { useEffect, useLayoutEffect } from 'react'
import './Carousel.css'
import './Responsive.css'
import { useRef,useState } from 'react';
import arrowRight from '../../assets/arrow-right.svg'
import { memo } from 'react';
import { useCallback } from 'react';

export default memo(function Carousel({content}) {
    const slider = useRef(),
          carousel = useRef();
      
    const [current,setCurrent] = useState(1)

    const next = () => {
        slider.current.style.transform = `translate(-29%)`;
      }
    
    const handleListOrder = useCallback(()=>{
            slider.current.appendChild(slider.current.firstElementChild);
            slider.current.style.transition = 'none'
            slider.current.style.transform = 'translate(-4%)'
            setTimeout(()=>{
                slider.current.style.transition = 'all 2s'
                setCurrent(preValue => (preValue+=1)%4)
                if(current===0){
                    setCurrent(1)
                }
            })
            setTimeout(() => {
                next()
            }, 10000); 
    },[])
   
   useEffect(() => {
     if(current===0){
        setCurrent(1);
     }
   }, [current])

   
   useLayoutEffect(()=>{
    setTimeout(() => {
        next()
        handleListOrder()
    }, 2000);
   },[])
    
  return (
    <div className="container">
        
            <div className="carousel" onTransitionEnd={handleListOrder} ref={carousel}>
                <div className="frame"></div>
                <div ref={slider} className="slider">
            
                    {
                        content.map( (item,index) =>{
                            return (
                                <section  id='section' key={index} >
                                    <h6 >{item.header}</h6>
                                    <span>
                                    {item.text.split('.').map((word,i)=>{
                                        return <p key={i}>{word}</p>
                                    })}
                                    </span>
                                    <label>{item.number}</label>
                                </section>
                            )
                        })
                    }                     
                </div>
            <div className="controls">
            
                <span onClick={next}  className="arrow next"><img src={arrowRight} /></span>
                <span className='loaction' >{`${current}/${document.querySelectorAll('section').length}`}</span>
            </div>
            </div>
    </div>
  )
})
