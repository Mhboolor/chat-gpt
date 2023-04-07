import React from 'react'
import './RegesterBox.css'

function RegesterBox() {
  return (
    <div className='regester'>
        <div className='regester__item'>
            <p className='regester__item-text'>Request Early Access to Get Started</p>
            <h3 className='regester__item-title'>Register today & start exploring the endless possiblities.</h3>
        </div>
        <div className='regester__item'>
            <a href="#" className='regester__item-btn'>Get Started</a>
        </div>
    </div>
  )
}

export default RegesterBox