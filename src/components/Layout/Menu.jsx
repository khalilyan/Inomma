import React from 'react'
import './Menu.css'
import logo from './logo.svg'
import Navigation from './Navigation/Navigation'
import { useMediaQuery } from 'react-responsive'
import MobMenu from './MobileMenu/MobMenu'

export default function Menu() {
  const isMobile = useMediaQuery({ minWidth: 769 })
  return (
    <div className='MenuContainer' >

        <a href="#">
          <img src={logo}  />
        </a>
        {
          isMobile ? <Navigation/> : <MobMenu/> 
        }
    </div>
  )
}
