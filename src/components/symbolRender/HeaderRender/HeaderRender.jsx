import React from 'react'
import './HeaderRender.css'
import { motion } from 'framer-motion'
import Shape from '../../Shape/Shape';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive'

export default function HeaderRender({text,position=400}) {
    const split = text.split(' ');
    const isMobile = useMediaQuery({ minWidth: 769 })
    const ContainRef = useRef(null);
   return (
            <div key={text} ref={ContainRef} className='HeaderContain'>
               {isMobile ? <Shape ContainRef={ContainRef} />:null}
                <div className="HeaderWrapper" style={{mixBlendMode: isMobile ? 'darken' : 'normal'}} >
                   {
                   split.map(item=>{
                        return <div key={item}>
                            {
                            [...item].map((symbol,index)=>{
                                return <div key={index} style={{display: 'inline-block'}}>
                                        <motion.h1 
                                            className='headerSymbol'
                                            style={{display: 'inline-block'}}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            initial={{y: position,opacity: 0}}
                                            viewport={{ once: true }}
                                            transition={{duration: 1, delay: 0.1*index,ease: 'backInOut'}}
                                        >{symbol}</motion.h1>
                                        </div> 
                                })
                            }
                           {split.slice(-1)!=item ? <h1 style={{display: 'inline-block'}} >&nbsp;</h1> : null }
                        </div>
                    })
                   }
                </div>
            </div>
   )
}
