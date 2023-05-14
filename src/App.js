import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'

export default function App() {
  const [profession, setprofession] = useState('props')
  
  return (
    <div>
      <Header name={'Revathi'} place={'Bangalore'}/>
      <h1>Main App {profession}</h1>
      <Component1 name={'React'} classAtended={2}/>
      <Component2 number={1} topic={'Git Hub Deployment'}/>
      <Component3/>
      <button onClick={()=>{setprofession('state')}}>
        Profession
      </button>

      <Footer/>
    </div>
  )
}