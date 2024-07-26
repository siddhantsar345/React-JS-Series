import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'
import { Component } from 'react'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username:-"Siddhant",
    age:21
  }
  let newArr=[1,2,3];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card channel="chaiaurcode" btnText="Click me"/>
      <Card channel="Siddhant" btnText="Visit me"/>
    </>
  )
}

export default App
