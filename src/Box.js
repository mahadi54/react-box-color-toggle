import React from 'react'
import './index.css'

function Box(props) {
    const styles = {
        backgroundColor: props.on ? '#222222' : 'transparent'
    }   
  return (
    <div onClick={props.toggle} style={styles} className='box'>
        
    </div>
  )
}

export default Box