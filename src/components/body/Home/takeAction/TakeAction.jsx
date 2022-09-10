import React, { useState } from 'react'
import Action from './Action.jsx'
import Img from '../../../../data/JPG/photo_1.jpg'

function TakeAction({page, setPage}){
  const [count, setCount] = useState(0)
  return(

  <div className="take-action">
    <img src={Img} alt="this should be an img" />
    <Action page={page} setPage={setPage}/>
  </div>
  )
}

export default TakeAction;