import React from 'react'
import './SymbolRenderAnimations.css'
import './Responsive.css'

export default function SymbolRender({text}) {
   const split = text.split(' ');
   return (
   <div >
            
             <div className='SymbolWrapper'>
               {
                  split.map((item,i)=>{
                   return (  <div key={i}>
                        {
                           [...item].map((symbol,index)=>{
                           return <div key={index} className="pseudo-text-effect" data-after={symbol} style={{display: 'inline-block',transitionDelay: `calc(0.05s * ${index})`}}>
                                       <p style={{display: 'inline-block'}}>{symbol} </p>
                                    </div> 
                           })
                        }
                        {split.slice(-1)!=item ? <h1 style={{display: 'inline-block'}} >&nbsp;</h1> : null }
                     </div>
                   )
                  })
               }
             </div>
            </div>
        
   )
}
