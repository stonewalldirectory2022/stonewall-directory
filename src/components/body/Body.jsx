import React, { useState } from 'react'
import TakeAction from './Home/takeAction/TakeAction.jsx'
import FindGroup from './Home/FindGroup/FindGroup.jsx'
import StayConnected from './Home/StayConnected/StayConnected.jsx'

function Body(){
  const [page, setPage] = useState('home')
  if(page === 'home') {
  return(
  <div className="body">
    <TakeAction /><br /><br />
    <FindGroup /><br /><br /><br /><br />
    <StayConnected />
  </div>
  )
  }
}

export default Body;