import React from 'react'

function Action({page, setPage}){
  return(
  <div className='action'>
  <p> There are LGBT Democratic groups across the US that work to elect pro-lGBT Democrats in federal, state, and local elections, serve as a bullhorm for LGBT governmental issues, and supply LGBT voters to ballot boxes. </p>
  <br />
  <button type='button' onClick={()=>setPage('questionnaire')}> TAKE ACTION </button>
  </div>
  )
}

export default Action;