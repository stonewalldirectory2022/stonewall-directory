import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

function MobileHeader(){
  return(
  <div className="Mobile-header">
    <GiHamburgerMenu className="header-logo"/>
    <div className="title">
    <h1> STONEWALL DIRECTORY</h1>
    </div>
  </div>
  )
}

export default MobileHeader;
