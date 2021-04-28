import React, {useState} from 'react'
const initalState = { 
  firstName: 'Ruu',
  lastName : 'Johnson',
  phoneNumber : '',
  address : '',
  email : '',
 }
function FighterForm(){
  const [fighterInfo, setFighterInfo] = useState(initalState)
  const updateFighter = (e) => {
    return setFighterInfo({...fighterInfo, [e.target.name]:e.target.value})
  }


  return (

    <div>
      <label>
        First Name :
        <input type ='text' 
        name = 'firstName' 
        value={fighterInfo.firstName}
        onChange={(e => updateFighter(e))}
        />
      </label><br/>
      <label>
        Last Name :
        <input type ='text' 
        name = 'lastName' 
        value={fighterInfo.lastName}
        onChange={(e => updateFighter(e))}
        />
      </label><br/>
      <label>
        Phone Number :
        <input type ='text' 
        name = 'phoneNumber' 
        value={fighterInfo.phoneNumber}
        onChange={(e => updateFighter(e))}
        />
      </label><br/>
      <label>
        Address :
        <input type ='text' 
        name = 'address' 
        value={fighterInfo.address}
        onChange={(e => updateFighter(e))}
        />
      </label><br/>
      <label>
        Email :
        <input type ='text' 
        name = 'email' 
        value={fighterInfo.email}
        onChange={(e => updateFighter(e))}
        />
      </label>
    </div>
  )
}
export default FighterForm