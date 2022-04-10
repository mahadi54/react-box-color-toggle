import React, { useState } from 'react';
import './App.css';
import Box from './Box'
import boxArray from './boxes.js'

function App() {
  const [boxes, setBoxes] = useState(boxArray)

  const toggle = (id)=>{
    setBoxes((prevBoxes)=>{
      return prevBoxes.map((currentBoxes)=>{
        return currentBoxes.id === id ? {...currentBoxes, on: !currentBoxes.on } : currentBoxes

      })

    })
  }
  const element = boxes.map((box)=>{
    return <Box toggle={()=> toggle(box.id)} id={box.id} on={box.on}/>

  })
  
  return (
    
    <div className="app">
      {element}
      
    </div>
  );
}

export default App;
