import React from 'react'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
<img src='/images/img-1.jpg' alt='heeey'/>
<h1>ADVENTURE AWAITS</h1>
<p>what are you waiting for?</p>
<div className='hero-btns'>
    <Button className='btns two'
     buttonStyle='btn--outline' buttonSize='btn--large'>
        GET STARTED</Button>
    <Button className='btns one'
    buttonStyle='btn--primary' buttonSize='btn--large'>
    WATCH TRAILER <i className="fas fa-play"></i></Button>
</div>



    </div>
  )
}

export default HeroSection