import React from 'react'
import '../../src/App.css'

export default function ScrollToTop() {
    const scrollToTop = () =>{
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  return (
    <div className="scrollTopWrapper">
        <svg onClick={scrollToTop} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" className="sc-bdvvtL wRmES MuiSvgIcon-root MuiSvgIcon-fontSizeMedium show" focusable="false" aria-hidden="true"><path d="M0 28V13.979A15.986 15.986 0 0 0 13.823 0S14.743 10.884 28 14.336V28s-13.4-1.546-13.922-14.078C14.077 13.922 14.979 25.75 0 28Z"></path></svg>
    </div>
  )
}
