import React from 'react';
import './Header.css';
import Logo1 from '../../../public/logo1.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section className='h-wrapper'>
      <div className='flexCenter paddings  innerWidth h-container'>
        <img src={Logo1} alt="logo" width={60} />

        <div className='  '>
          <ul className='flexCenter h-menu'>
            <li><a href='#'>Residencies</a></li>
            <li><a href='#'>Our Value</a></li>
            <li><a href='#'>Contact Us</a></li>
            <li><a href='#'>Get Started</a></li>
            <button className='button'>
              <a href='#'>Contact</a>
            </button>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Header