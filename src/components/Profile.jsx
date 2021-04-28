import React from 'react'
function Profile(props) {
  const {firstName,record,active,ringName} = props.fighter
  return (
    <>
      <p>{`Fighters: ${firstName} ${record}`}</p>
      <p>{`Active: ${active ? 'Yes' : 'No'}`}</p>
      <p>{`${ringName ? ringName : 'No Ring Name'}`}</p>

      
    </>
    )
}

export default Profile