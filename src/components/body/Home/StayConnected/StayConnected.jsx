import React from 'react'
import { AiOutlineFacebook, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai'


function StayConnected(){
  return(
  <div className="stay-connected">
    <p> Stay <b>Connected</b></p>
    <div className='social-media'>
    <i><AiOutlineFacebook /></i>
    <i><AiFillTwitterSquare /></i>
    <i><AiFillInstagram /></i>
    </div>
    <a  href={'https://www.democracylab.org/events/64/projects/1036'} >StoneWall Democratic Club Main Site</a>
  </div>
  )
}

export default StayConnected;