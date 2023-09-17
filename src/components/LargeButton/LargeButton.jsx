import React from 'react'
import './LargeButton.css'
import SymbolRender from '../symbolRender/SymbolRender'
import RightBorderSVG from './RightBorder'
import LeftBorderSVG from './LeftBorder'


export default function LargeButton() {
  return (
    <div className="all-works-btn-wrapper">
          <button className='sc-dkPtRN bcdGUd buttonHover  primary-small-button all-works-btn'>
               
               <div className="button-right-border"><RightBorderSVG/></div>
                <div className="button-top-icons">
                    <svg xmlns="http://www.w3.org/2000/svg" width='100px' height='100px' viewBox="0 0 164.188 164.463" focusable="false" aria-hidden="true"><g data-name="Group 1896"><path data-name="Union 4" d="M85.08 49.797 60.648 106.39 4.514 82.156a74.184 74.184 0 0 1 14.718-19.881C32.039 49.895 53.533 38.33 85.08 49.797Zm51.938 66.373L80.882 91.937l24.433-56.593c53.459 26.91 31.703 80.826 31.703 80.826Z" fill="#ffc200" stroke="rgba(0,0,0,0)" strokeMiterlimit="10" strokeWidth="0.99999"></path></g></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width='100px' height='100px' viewBox="0 0 148.725 147.101" focusable="false" aria-hidden="true"><g data-name="Group 1548" transform="translate(-2689.845 -152.194)" fill="#fa6e00"><ellipse data-name="Ellipse 32" cx="55.789" cy="24.262" rx="55.789" ry="24.262" transform="rotate(-40 1720.34 -3607.07)"></ellipse><ellipse data-name="Ellipse 33" cx="55.789" cy="15.526" rx="55.789" ry="15.526" transform="rotate(-40 1678.396 -3591.801)"></ellipse><ellipse data-name="Ellipse 34" cx="55.789" cy="9.923" rx="55.789" ry="9.923" transform="rotate(-40 1651.843 -3582.137)"></ellipse></g></svg>
                </div>
                    <SymbolRender text={'View All Projects'} />
                <div className="button-bottom-icons">
                    <svg xmlns="http://www.w3.org/2000/svg" width='100px' height='100px' viewBox="0 0 130 151.628" focusable="false" aria-hidden="true"><g data-name="Group 1549" fill="#fa6e00"><path data-name="Path 52856" d="M130 40.493A47.55 47.55 0 0 1 43.952-.001Z"></path><path data-name="Path 52857" d="M110.264 82.433a47.55 47.55 0 0 1-86.049-40.494Z"></path><path data-name="Path 52858" d="M90.527 124.372A47.55 47.55 0 1 1 4.479 83.877Z"></path></g></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width='100px' height='100px' viewBox="0 0 160 125.895"  focusable="false" aria-hidden="true"><g data-name="Group 1552" fill="#2bd4db"><g data-name="Group 1550"><path data-name="Path 52859" d="M53.334 53.333S54.551 3.042 106.667 0v53.333Z"></path><path data-name="Path 52860" d="M106.667 53.333S107.884 3.042 160 0v53.333Z"></path></g><g data-name="Group 1551"><path data-name="Path 52861" d="M106.667 72.561s-1.217 50.292-53.333 53.334V72.561Z"></path><path data-name="Path 52862" d="M53.334 72.561S52.117 122.853 0 125.895V72.561Z"></path></g></g></svg>
                </div>
                <div className="button-left-border"><LeftBorderSVG/></div>
            </button>        
    </div>
  )
}
