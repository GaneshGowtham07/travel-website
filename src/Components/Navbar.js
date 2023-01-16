import React , {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button.js';


function Navbar() {

const [click , setClick] = useState(false)
const [button, setButton] = useState(true)


const clickHandler = () => setClick(!click)
const closeMenu = () => setClick(false)

const showButton = () =>
{
  if(window.innerWidth<=960){
    setButton(false)
  }else{
    setButton(true)
  }
}

useEffect(()=>{
showButton()},[])

window.addEventListener('resize',showButton)

  return (
   <div>
   <nav className='navbar'>
<div className='navbar-container'>

<Link to='/' className='nav-logo' onClick={closeMenu}>
    hii<i className="fab fa-typo3"></i>
    </Link>
    <div className='menu-icon' onClick={clickHandler}>
      <i className={click ? ' fas fa-times' : 'fas fa-bars'}/>
    </div>
    <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
    <li className='nav-items'>
      <Link to='/' className='nav-links' onClick={closeMenu}>
        Home
      </Link>
    </li>
    <li className='nav-items'>
      <Link to='/services' className='nav-links' onClick={closeMenu}>
        Services
      </Link>
    </li>
    <li className='nav-items'>
      <Link to='/products' className='nav-links' onClick={closeMenu}>
        products
      </Link>
    </li>
    <li className='nav-items'>
      <Link to='/signUp' className='nav-links-mobile' onClick={closeMenu}>
        Sign up
      </Link>
    </li>


    </ul>
{button && <Button buttonStyle='btn--outline'>SIGNUP</Button> }

</div>



   </nav>
    
           
            

   
   
   </div>
  )
}

export default Navbar