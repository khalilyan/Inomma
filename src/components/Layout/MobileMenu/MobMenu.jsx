import React, { useState } from 'react'

export default function MobMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div onClick={handleOpen} class="burger-menu">
        {
            isOpen ? 
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="sc-bdvvtL wRmES MuiSvgIcon-root MuiSvgIcon-fontSizeMedium" focusable="false" aria-hidden="true" data-test="bi-icon" style={{fill: 'currentcolor', width: '24px', height: '24px', fontSize: '24px', lineHeight: '24px'}}><g data-name="menu close"><g data-name="menu close"><g data-name="Group 1414" transform="translate(0 6.547)"><rect data-name="Rectangle 8897" width="24" height="3" rx="1" transform="rotate(-45 16.773 3.477)"></rect><rect data-name="Rectangle 8899" width="24" height="3" rx="1" transform="rotate(45 7.227 3.477)"></rect></g></g><path data-name="Rectangle 8984" fill="none" d="M0 0h24v24H0z"></path></g></svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="sc-bdvvtL wRmES MuiSvgIcon-root MuiSvgIcon-fontSizeMedium" focusable="false" aria-hidden="true" data-test="bi-icon" style={{fill: 'currentcolor', width: '24px', height: '24px', fontSize: '24px', lineHeight: '24px'}}><g data-name="menu" transform="translate(-269 -21)"><rect data-name="Rectangle 8897" width="24" height="3" rx="1" transform="translate(269 32)"></rect><rect data-name="Rectangle 8899" width="24" height="3" rx="1" transform="translate(269 26)"></rect><rect data-name="Rectangle 8898" width="24" height="3" rx="1" transform="translate(269 38)"></rect></g><path data-name="Rectangle 8984" fill="none" d="M0 0h24v24H0z"></path></svg>
        }
    </div>
  )
}
