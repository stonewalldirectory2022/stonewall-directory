import React, { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'

function StageOne({page, setPage}){
  return(
  <div className="stage-one">
    <p>HOW MUCH <b>TIME</b> DO YOU HAVE TO <b>TAKE ACTION</b>?</p><br /><br />
    <input type="radio"  />FIVE MINUTES <br /><br /><br />
    <input type="radio" />FEW HOURS <br /><br /><br />
    <input type="radio"  /> LOOKING TO COMMIT LONG TERM (1+ MONTH)
  </div>
  )
}

export default StageOne;