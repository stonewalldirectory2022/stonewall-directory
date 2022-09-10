import React, { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import StageOne from './stages/StageOne.jsx'

function Questionnaire({page, setPage}){
  const [stage, setStage] = useState(0)
  let currentStage;
  if(stage === 0){
    currentStage = <StageOne />
  }
  let backArrow = () => {
    if(stage === 0){
      setPage('home')
    } else {
      setStage(stage -1)
    }
  }
  return(
  <div className="page-one">
    <BiArrowBack onClick={()=>backArrow()}/>
      {currentStage} <br /><br />
    <button>NEXT</button>
  </div>
  )
}

export default Questionnaire;