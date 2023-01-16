import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join the community to get best adventures travel deals</p>
            
            <p className='footer-subscription-text'>
                You can unsubscribe at any time
            </p>

            
            <div className='input-areas'>
                <form>
                <input type='email' name='email' placeholder='email' className='footer-input'></input>
                <Button buttonStyle='btn--outline'>Subscribe</Button>

                </form>  

</div>

        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-item'>
                    <h2>About us</h2>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>careers</Link>
                    <Link to='/'>Terms of service</Link>
                    <Link to='/'>Investors</Link>
                    
                </div>
                <div className='footer-link-item'>
                    <h2>About us</h2>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>careers</Link>
                    <Link to='/'>Terms of service</Link>
                    <Link to='/'>Investors</Link>
                    
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-item'>
                    <h2>About us</h2>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>careers</Link>
                    <Link to='/'>Terms of service</Link>
                    <Link to='/'>Investors</Link>
                    
                </div>
                <div className='footer-link-item'>
                    <h2>About us</h2>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>careers</Link>
                    <Link to='/'>Terms of service</Link>
                    <Link to='/'>Investors</Link>
                    
                </div>
            </div>
        </div>
        <section className='footer-social-media'>
            <div className='footer-social-media-wrapper'>
                <div className='footer-logo'>
                    <Link to='/'>
                    hii<i className="fab fa-typo3"></i>
                    </Link>
                </div>
                <small className='footer-copyright-mark'>hii Ⓒ 2020</small>
                <div className='footer-social-media-symbols'>
                    <Link to='/'
                    className='social-media-icons facebook'
                    target='_blank'
                    aria-label='facebook'>
                        <i className="fab fa-facebook"></i>
                    </Link>
                    <Link to='/'
                    className='social-media-icons youtube'
                    target='_blank'
                    aria-label='youtube'>
                        <i className="fab fa-youtube"></i>
                    </Link>
                    <Link to='/'
                    className='social-media-icons twitter'
                    target='_blank'
                    aria-label='twitter'>
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link to='/'
                    className='social-media-icons github'
                    target='_blank'
                    aria-label='github'>
                        <i className="fab fa-github"></i>
                    </Link>
                    <Link to='/'
                    className='social-media-icons instagram'
                    target='_blank'
                    aria-label='instagram'>
                        <i className="fab fa-instagram"></i>
                    </Link>


                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer