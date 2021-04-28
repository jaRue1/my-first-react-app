import React, {useState} from 'react'
function FighterForm(){
  const [firstName , setFirstName,] = useState('')
  const [lastName,setLastName] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  const [address,setAddress] = useState('')
  const [email,setEmail] = useState('')
  return (

    <div>
      <label>
        First Name :
        <input type ='text' 
        name = 'firstName' 
        value={firstName}
        onChange={e =>setFirstName(e.target.value)}
        />
      </label><br/>
      <label>
        Last Name :
        <input type ='text' 
        name = 'lastName' 
        value={lastName}
        onChange={e =>setLastName(e.target.value)}
        />
      </label><br/>
      <label>
        Phone Number :
        <input type ='text' 
        name = 'phoneNumber' 
        value={phoneNumber}
        onChange={e =>setPhoneNumber(e.target.value)}
        />
      </label><br/>
      <label>
        Address :
        <input type ='text' 
        name = 'address' 
        value={address}
        onChange={e =>setAddress(e.target.value)}
        />
      </label><br/>
      <label>
        Email :
        <input type ='text' 
        name = 'email' 
        value={email}
        onChange={e =>setEmail(e.target.value)}
        />
      </label>
    </div>
  )
}
export default FighterForm