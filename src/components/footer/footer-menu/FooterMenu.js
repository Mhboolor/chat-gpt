import React from 'react'
import './FooterMenu.css'
import Logo from '../../../assets/images/GPT-3-footer.png'

function FooterMenu() {
  return (
    <div className='footer__menu-container'>
        <div className='footer__menu-box'>
            <img src={Logo} alt="Footer-Logo" className='footer__menu-logo'/>
            <p className='footer__menu-text'>Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='footer__menu-box'>
            <ul className='footer__menu'>
                <li className='footer__menu-item'>Links</li>
                <li className='footer__menu-item'><a href="#" className='footer__menu-link'>Overons</a></li>
                <li className='footer__menu-item'><a href="#" className='footer__menu-link'>Social Media</a></li>
                <li className='footer__menu-item'><a href="#" className='footer__menu-link'>Counters</a></li>
                <li className='footer__menu-item'><a href="#" className='footer__menu-link'>Contact</a></li>
            </ul>
        </div>
        <div className='footer__menu-box'>
            <ul className='footer__menu'>
                <li className='footer__menu-item'>Company</li>
                <li className='footer__menu-item'><a href="#" className='footer__menu-link'>Terms & Conditions</a></li>
                <li className='footer__menu-item'><a href="#" className='footer__menu-link'>Privacy Policy</a></li>
                <li className='footer__menu-item'><a href="#" className='footer__menu-link'>Contact</a></li>
            </ul>
        </div>
        <div className='footer__menu-box'>
            <ul className='footer__menu'>
                <li className='footer__menu-item'>Get in touch</li>
                <li className='footer__menu-item'><a href="#" className='footer__menu-link'>Crechterwoord K12 <br /> 182 DK Alknjkcb</a></li>
                <li className='footer__menu-item'><a href="#" className='footer__menu-link'>085-132567</a></li>
                <li className='footer__menu-item'><a href="#" className='footer__menu-link'>info@payme.net</a></li>
            </ul>
        </div>
    </div>
  )
}

export default FooterMenu