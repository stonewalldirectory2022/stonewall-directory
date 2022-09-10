import React, { useState } from 'react'
import Group from './Group.jsx'
import Img from '../../../../data/JPG/photo_15.jpg'

function FindGroup(){
  const [count, setCount] = useState(1)
  return(

  <div className="find-group">
    <img src={Img} alt="this should be an img" />
    <Group/>
  </div>
  )
}

export default FindGroup;