import React, { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'

function PageOne({page, setPage}){
  return(
  <div className="page-one">
    <BiArrowBack onClick={()=>setPage('home')}/>
    <p>HOW MUCH <b>TIME</b> DO YOU HAVE TO <b>TAKE ACTION</b>?</p><br /><br />
    <input type="radio"  />FIVE MINUTES <br /><br /><br />
    <input type="radio" />FEW HOURS <br /><br /><br />
    <input type="radio"  /> LOOKING TO COMMIT LONG TERM (1+ MONTH)
    <br /><br /><br />
    <button>NEXT</button>
  </div>
  )
}

export default PageOne;