import React, { useState } from 'react'
import TakeAction from './Home/takeAction/TakeAction.jsx'
import FindGroup from './Home/FindGroup/FindGroup.jsx'
import StayConnected from './Home/StayConnected/StayConnected.jsx'
import Questionnaire from './Questionnaire/Questionnaire.jsx'

function Body(){
  const [page, setPage] = useState('questionnaire')
  if(page === 'home') {
  return(
  <div className="body">
    <TakeAction page={page} setPage={setPage}/><br /><br />
    <FindGroup page={page} setPage={setPage}/><br /><br /><br /><br />
    <StayConnected />
  </div>
  )
  } else if(page === 'questionnaire'){
    return(
    <Questionnaire page={page} setPage={setPage}/>
    )
  }
}

export default Body;