import React from 'react'
import './Footer.css'
import FooterTitle from './footer-title/FooterTitle'
import FooterMenu from './footer-menu/FooterMenu'

function Footer() {
  return (
    <footer className='footer'>
      <FooterTitle/>
      <FooterMenu/>
      <div className='footer__copyright'>
        © 2021 GPT-3. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer