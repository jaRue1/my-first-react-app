import React from 'react'

function Greeting(props){
  const {firstName} = props
  return <p> Hello , {firstName||'Guest'} </p>
}

export default Greeting