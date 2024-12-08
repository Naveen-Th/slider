import React from 'react'
import { Slider } from './Slider/Slider'
import './App.css'


function App() {
  const slides = [
    {
      id: 1,
        heading:'Html',
        description:'Hyper text markup language'
    },
    {
      id: 2,
        heading:'JS',
        description:'Javascript'
    },
    {
        id:3,
        heading:'Css',
        description:'Cascading StyleSheet'
    }
]
  return (
    <>
      <Slider slides={slides}></Slider>
    </>
  )
}

export default App
