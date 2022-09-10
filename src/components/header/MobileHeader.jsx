import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

function MobileHeader(){
  return(
  <div className="Mobile-header">
    <GiHamburgerMenu className="header-logo"/>
    <div className="title">
    <h1> NATIONAL DIRECTORY <br /> OF LGBTQ+ DEMOCRATS</h1>
    <h2> STONEWALL DEMOCRATIC CLUB</h2>
    </div>
  </div>
  )
}

export default MobileHeader;
