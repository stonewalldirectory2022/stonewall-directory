import React, { useState } from 'react'
import TakeAction from './Home/takeAction/TakeAction.jsx'
import FindGroup from './Home/FindGroup/FindGroup.jsx'
import StayConnected from './Home/StayConnected/StayConnected.jsx'
import PageOne from './Questionnaire/PageOne.jsx'

function Body(){
  const [page, setPage] = useState('one')
  if(page === 'home') {
  return(
  <div className="body">
    <TakeAction page={page} setPage={setPage}/><br /><br />
    <FindGroup page={page} setPage={setPage}/><br /><br /><br /><br />
    <StayConnected />
  </div>
  )
  } else if(page === 'one'){
    return(
    <PageOne page={page} setPage={setPage}/>
    )
  }
}

export default Body;