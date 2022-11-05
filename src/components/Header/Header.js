import React from 'react'
import './Header.css'

export default function Header() {
  const loginButton = () => {
    alert('Thanks for logging in')
  }
  return (
      <nav>
        <div className='logo'/>
        <ul>
          <li>Plans & Pricing</li>
          <li>Teach with us</li>
          <li>Affiliate Programming</li>
          <li>Kids</li>
        </ul>
        <div className='login-button'>
          <button id="log" type='submit' onClick={loginButton}><i class="fa-solid fa-user"></i> Login</button>
        </div>
      </nav>
  )
}
