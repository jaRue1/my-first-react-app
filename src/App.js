import React from "react"
import Welcome from "./components/Welcome.jsx"
import List from "./components/List.jsx"
import Greeting from "./components/Greeting.jsx"
import Profile from "./components/Profile.jsx"
import FighterForm from './components/FighterForm.jsx'
function App() {
  const people = ["Ruu", "Nikki", "Michelle", "Johnathan", "Todd"]
  const fighters = [
    { id: 0, firstName: "Mike Tyson", record: "34-4", active: true, ringName: "Iron Mike" },
    { id: 1, firstName: "Roy Jones", record: "66-6", active: true,  ringName: false},
    { id: 2, firstName: "Floyd Mayweather", record: "50-0", active: false, ringName: "Money Mayweather"},
  ]
  return (
    <React.Fragment>
      <Welcome />
      <h4>People Array</h4>
      {people.map((person) => (
        <Greeting key={person} firstName={person} />
      ))}
      <h4>Fighter Array </h4>
      {fighters.map((fighter) => (
        <Greeting key={fighter.id} firstName={fighter.firstName} />
      ))}
      <h4>Fighter's Profile</h4>
      {fighters.map((fighter) => (
        <Profile key ={fighter.id} fighter={fighter} />
      ))}
      <FighterForm />
      {/* <Greeting firstName ='Ruu'/> */}
      <p>This is a component</p>
      <List />
    </React.Fragment>
  )
}

export default App
