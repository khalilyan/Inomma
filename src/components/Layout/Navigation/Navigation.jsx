import React from 'react'
import './Navigation.css'
import SymbolRender from '../../symbolRender/SymbolRender'

export default function Navigation() {
  return (
    <nav id='navigation' >
        <li>
          <a href="/about">
            <SymbolRender header={false} text={'About'}/>
          </a>
        </li>
        <li>
          <a href="/projects">
          <SymbolRender header={false} text={'Projects'}/>
          </a>
        </li>
        <li>
          <a href="/contacts">
          <SymbolRender header={false} text={'Contact'}/>
          </a>
        </li>
    </nav> 
  )
}
