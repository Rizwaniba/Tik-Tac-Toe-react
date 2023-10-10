import React from 'react'
import "../App.css"
function square({value, chooseSquare}) {
  return (
   <div className='square' onClick={chooseSquare}>{value}</div>
  );
}

export default square;